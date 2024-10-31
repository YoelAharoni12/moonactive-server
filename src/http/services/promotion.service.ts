import {promotionModel} from "../../db/model/promotions.model";
import {Promotion} from "../../models/promotion.model";

export const PromotionService = {
    getPromotions: async (page: number, limit: number): Promise<Promotion[]> => {
        return promotionModel.find().skip((page - 1) * limit).limit(limit);
    }
};