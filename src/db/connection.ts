import {connect} from "mongoose";
import {config} from "../config/env";

export const dbConnect = async () => {
    try {
        await connect(config.MONGO_URI);
        console.log("Connected to DB");
    } catch (error) {
        console.error("Could not connect to DB", error);
    }
};