import cors from 'cors';
import express from 'express'
import {promotionRouter} from "./http/routes/promotion.route";


export const app = express();
app.use(cors());
app.use(express.json());
app.use(promotionRouter);
