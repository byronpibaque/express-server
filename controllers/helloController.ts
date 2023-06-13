import { RequestHandler,response } from "express";
import responseDTO from '../dtos/responseDTO';
import helloService from "../services/helloService";
import helloServiceImpl from "../services/impls/helloServiceImpl";


export const getHolaMundo:RequestHandler = (req, res, next) => {
   const service : helloService = new helloServiceImpl();
   let response = {
    code: 200,
    messaje:'success',
    }
    service.getHello().then((respuesta) => {
        const dto = new responseDTO(response.code, response.messaje, {respuesta});
        res.status(200).json(dto);
      }).catch((err) => {
        const dto = new responseDTO(response.code, response.messaje, err);
        res.status(500).json(dto);
      });
    
 };