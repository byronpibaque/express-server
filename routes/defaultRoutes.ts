import { Router } from 'express';
import {getHolaMundo} from '../controllers/helloController';
export const defaultRoute = Router();

defaultRoute.get('/', getHolaMundo);
