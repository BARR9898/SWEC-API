import { Request,response,Response } from "express"
import { insertExpedient,deleteExpedient,getExpedient,getExpedients,updateExpedient} from "../services/expedientes";
import { handleHttp } from "../utils/error.handle";

const getExpediente = async ({params} : Request,res:Response) => {
    try {
        const {id} = params;
        const response = await getExpedient(id);
        const data = response ? response: "NOT_FOUND"
        res.send(data);
    } catch (e) {
        handleHttp(res,'ERROR_GET_ITEM');
    }

}

const getExpedientes = async (req:Request,res:Response) => {
    try {
        const response = await getExpedients();
        res.send(response);
    } catch (e) {
        handleHttp(res,'ERROR_GET_ITEMS',e);
    }
}

const updateExpediente = async ( {params,body} :Request,res:Response) => {
    try {
        const {id} = params;
        const response = await updateExpedient(id,body);
        res.send(response);
    } catch (e) {
        handleHttp(res,'ERROR_UPDATE_ITEM');
    }
}

const postExpediente = async ({body} : Request,res:Response) => {
    try {
        const responseItem = await insertExpedient(body);
        res.send(responseItem); 

    } catch (e) {
        handleHttp(res,'ERROR_POST_ITEM',e);
    }
}

const deleteExpediente = async ({params} : Request,res:Response) => {
    try {
        const {id} = params;
        const responseItem = await deleteExpedient(id);
        res.send(responseItem); 
    } catch (e) {
        handleHttp(res,'ERROR_DELETE_ITEM');
    }
}

export {getExpediente,getExpedientes,updateExpediente,deleteExpediente,postExpediente}