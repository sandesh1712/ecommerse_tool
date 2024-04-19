import {pathToRegexp} from 'path-to-regexp';

const getPathsThatUserHasAccessTo = [
    "/product/:id",
    "/product/list",
    "/user/:id/basket",
    "/user/:id/orders",
    "/order/:id",
    "/basket/:id",
]

const postPathsThatUserHasAccessTo = [
    "/order",
    "/basket/:id/add"
]

const putPathsThatUserHasAccessTo =[
    "basket/:id/update/:basketItemId"
]

const deletePathsThatUserHasAccessTo =[
    "basket/:id/remove/:basketItemId"
]

const USER_ROLE_MAPING ={
   GET: getPathsThatUserHasAccessTo.map(path=>pathToRegexp(path)),
   POST: postPathsThatUserHasAccessTo.map(path=>pathToRegexp(path)),
   PUT: putPathsThatUserHasAccessTo.map(path=>pathToRegexp(path)),
   DELETE: deletePathsThatUserHasAccessTo.map(path=>pathToRegexp(path))
}


export const matchPath=(method:string,path:string):boolean =>{
    if(method){
        const paths = USER_ROLE_MAPING[method];
        return paths && paths.find(p => !!p.exec(path));
    }
    return false;
}
