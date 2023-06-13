"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHolaMundo = void 0;
const responseDTO_1 = __importDefault(require("../dtos/responseDTO"));
const helloServiceImpl_1 = __importDefault(require("../services/impls/helloServiceImpl"));
const getHolaMundo = (req, res, next) => {
    const service = new helloServiceImpl_1.default();
    let response = {
        code: 200,
        messaje: 'success',
    };
    service.getHello().then((respuesta) => {
        const dto = new responseDTO_1.default(response.code, response.messaje, { respuesta });
        res.status(200).json(dto);
    }).catch((err) => {
        const dto = new responseDTO_1.default(response.code, response.messaje, err);
        res.status(500).json(dto);
    });
};
exports.getHolaMundo = getHolaMundo;
