import express from 'express';
import { defaultRoute } from './defaultRoutes'; 

export const routes = express.Router();


routes.use([
    defaultRoute
]);