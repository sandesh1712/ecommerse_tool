import { Repository } from "typeorm";
import { Basket } from "../entity/Basket";
import { BasketItem } from "../entity/BasketItem";

import AppDataSource from "../data-source";

export class BasketService {
    basketRepository:Repository<Basket>
    basketItemRepository:Repository<BasketItem>


    constructor(){
        this.basketRepository = AppDataSource.getRepository(Basket);
        this.basketItemRepository = AppDataSource.getRepository(BasketItem);3421
    }

    async getOneBasketById(basketId){
        return await this.basketRepository.findOneBy({id:parseInt(basketId)});
    }

    async addToBasket(basketId,basketItem:BasketItem){
        const basket = await this.getOneBasketById(basketId);
        basket.basketItems.push(basketItem);
        basket.basketTotal += basketItem.total;
        return this.basketRepository.save(basket);
    }

    async removeFromBasket(basketId,basketItemId){
        const basketItem = await this.basketItemRepository.findOneBy({id : parseInt(basketItemId)});
        const basket = await this.getOneBasketById(basketId);
        basket.basketTotal -= basketItem.total;
        const index = basket.basketItems.findIndex((basketItem,index,obj)=>basketItem.id === obj[index].id);
        basket.basketItems.splice(index,1);
        await this.basketItemRepository.remove(basketItem);
        return await this.basketRepository.save(basket);
    }
}
