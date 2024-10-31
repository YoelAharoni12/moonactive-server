import {Router} from 'express';
import {getPromotions} from '../controllers/promotion.controler';

export const promotionRouter = Router();

promotionRouter.get('/promotions', getPromotions);
