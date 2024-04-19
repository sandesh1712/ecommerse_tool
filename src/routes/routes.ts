import { Router } from "express";
import productRouter from "./product";
import userRouter from "./user";
import basketRouter from "./basket";
import orderRouter from "./order";
import authRouter from "./auth";


//register routes and appropriate handlers
const routes = [
    {path:"/auth",handler: authRouter},
    {path: "/product", handler: productRouter},
    {path: "/user", handler: userRouter},
    {path: "/basket", handler: basketRouter},
    {path: "/order",handler: orderRouter}
]

const router = Router();

routes.forEach(routeObj=>{
    router.use(routeObj.path,routeObj.handler);
});

export default router;
