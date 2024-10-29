import {promotionModel} from "../../db/model/promotions.model";

export const PromotionService = {
    getPromotions: async (page: number, limit: number) => {
        return promotionModel.find().skip((page - 1) * limit).limit(limit);
    },
    getAllPromotions: async () => {
        return promotionModel.find({}).lean().exec();
    }
};