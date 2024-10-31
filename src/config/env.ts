import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    PORT: process.env.PORT || 8000,
    MONGO_URI: "mongodb+srv://yoelAharoni:Aa123456@products-nanoxai.hsvf4.mongodb.net/",
};

