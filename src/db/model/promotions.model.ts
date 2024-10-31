import mongoose, {Schema} from "mongoose";
import {Promotion} from "../../models/promotion.model";

export const PromotionSchema = new Schema({
    id: {type: String, unique: true},
    name: {type: String, required: true},
    group: {type: String, required: true},
    type: {type: String, required: true},
    endDate: {type: Date, required: true},
    startDate: {type: Date, required: true},
})

export const promotionModel = mongoose.model<Promotion>('promotions', PromotionSchema);
