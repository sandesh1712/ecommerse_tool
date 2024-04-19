import { Request, Response } from "express"
import * as jwt from "jsonwebtoken";
import { User } from "../entity/User";
import { UserRole } from "../types/user";
import { matchPath } from "../auth/policy";

const jwtSecret = process.env.JWT_SECRET || 'xxx12345'


export function authMiddlerWare(req:Request,res:Response,next){
    if(!req.path.includes('signup')||!req.path.includes('signin')){
       const token = req.headers.authorization.split(" ")[1];
       const user =  jwt.verify(token,jwtSecret) as User;
       req['user'] = user;
       if(user && user.role === UserRole.USER){
            if(matchPath(req.method,req.path))
                next();
            else
                res.sendStatus(401);
       }
       else if(user && user.role === UserRole.ADMIN){ //assumming admin have access to all routes
         next();
       }
       else
       res.sendStatus(401);
    }else
      next();
}

export const signJwt=(claims)=>{
   return jwt.sign(claims,jwtSecret);
}
