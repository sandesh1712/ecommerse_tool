import * as bcrypt from 'bcrypt';

export class PasswordHelper{
   async encrypt(password){
      return await bcrypt.hash(password,6);
   }

   async compare(password,hash){
     return await bcrypt.compare(password,hash);
   }
}
