import { Request, Response } from "express";
import UserService from "../services/user";
import { PasswordHelper } from "../helpers/passwordHelper";
import { signJwt } from "../helpers/authHelper";

export class AuthController{
    userService:UserService
    passwrodHelper: PasswordHelper;

    constructor(){
        this.userService = new UserService();
        this.passwrodHelper = new PasswordHelper();
    }

    async create(req:Request,res:Response){
        const {body} = req;
        try{
           const user = await this.userService.create(body);
           res.status(200).send(user);
        }catch(err){
           res.status(500).send(err.message)
        }
    }

    async signIn(req:Request,res:Response){
        const {email,password}:{email:string,password:string} = req.body;

        try{
            const user = await this.userService.findUserByEmail(email);
            if(user){
                const compareResult = await this.passwrodHelper.compare(password,user.password);
                if(compareResult){
                      const token = signJwt(JSON.stringify(user.toJSON()));
                      res.send({token});
                }else
                   res.send("user with provided email not found")
            }else
               res.send("user with provided email not found")
        }catch(err){
             res.send(err.message)
        }

    }
}
