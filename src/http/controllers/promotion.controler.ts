import {Request, Response} from 'express';
import {PromotionService} from "../services/promotion.service";


export const getPromotions = async (req: Request, res: Response) => {
    try {
        const {page = 1, limit = 50} = req.query;
        console.log(req.query)
        const promotions = await PromotionService.getPromotions(+page, +limit);
        const all = await PromotionService.getAllPromotions()
        console.log(all);
        res.json(promotions);
    } catch (error) {
        res.status(500).json({message: 'Error fetching promotions'});
    }
};