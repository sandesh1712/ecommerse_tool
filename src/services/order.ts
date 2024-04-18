import { Repository } from "typeorm";
import { Order } from "../entity/Order";
import AppDataSource from "../data-source";
import { BasketService } from "./basket";
import { OrderStatus } from "../types/order";
import { BasketStatus } from "../types/basket";
import { User } from "../entity/User";
import { Basket } from "../entity/Basket";

export class OrderService {
    orderRepository: Repository<Order>
    userRepository: Repository<User>
    basketService: BasketService

    constructor(){
       this.orderRepository = AppDataSource.getRepository(Order);
       this.userRepository = AppDataSource.getRepository(User);
       this.basketService = new BasketService();
    }

    async create(basketId){
        const basket = await this.basketService.getOneBasketById(basketId);

        basket.basketItems.forEach(basketItem =>{
            const product = basketItem.product;

            if((product.stock - basketItem.quantity) < 0)
                throw `Not Enough stock available for ${product.name}`;

            product.stock -= basketItem.quantity;
        })

        const order = await this.orderRepository.create({});
        order.basket = basket;
        order.user = await basket.user;
        order.orderTotal = basket.basketTotal;
        order.basket.status = BasketStatus.ORDERED;
        const newOrder = await this.orderRepository.save(order);

        //assigning new basket to user
        const user = await  this.userRepository.findOneBy({id: order.user.id});
        const userBaskets =  await user.basket;
        userBaskets.push(new Basket());
        await this.userRepository.save(user);

        return newOrder;
    }

    async acceptOrder(orderId){
     const order = await this.orderRepository.findOneBy({id: parseInt(orderId)})
     order.status = OrderStatus.ACCEPTED;
     return this.orderRepository.save(order);
    }

    async completeOrder(orderId){
        const order = await this.orderRepository.findOneBy({id: parseInt(orderId)})
        order.status = OrderStatus.COMPLETED;
        return this.orderRepository.save(order);
    }

    async getOrder(id){
      return await this.orderRepository.findOneBy({id : parseInt(id)})
    }
}
