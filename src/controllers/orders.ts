import { Request,response,Response } from "express"
import { insertCar,getCars, getCar, updateCar, deleteCar } from "../services/items";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExtend extends Request{
    user?: string | JwtPayload
}


const getItems = async (req:RequestExtend,res:Response) => {
    try {
        res.send({
            data: "ESTO SOLO LO PUEDEN VER USUARIOS CON TOKEN VALIDO",
            user: req.user
        });
        
    } catch (e) {
        handleHttp(res,'ERROR_GET_ORDER',e);
    }
}


export {getItems}