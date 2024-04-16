import { Router } from "express";
import productRouter from "./product";

//register routes and appropriate handlers
const routes = [
    {
        path: "/product", handler: productRouter,
    }
]

const router = Router();

routes.forEach(routeObj=>{
    router.use(routeObj.path,routeObj.handler);
});

export default router;
