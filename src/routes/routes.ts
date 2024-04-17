import { Router } from "express";
import productRouter from "./product";
import userRouter from "./user";
import basketRouter from "./basket";


//register routes and appropriate handlers
const routes = [
    {path: "/product", handler: productRouter},
    {path: "/user", handler: userRouter},
    {path: "/basket", handler: basketRouter},
]

const router = Router();

routes.forEach(routeObj=>{
    router.use(routeObj.path,routeObj.handler);
});

export default router;
