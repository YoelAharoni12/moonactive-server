import {promotionModel} from "../../db/model/promotions.model";
import {getWSServerClients} from "../../utils/websocket";

export const watchPromotions = () => {
    promotionModel.watch([], {fullDocument: 'updateLookup'}).on('change', (change) => {
        console.log(`Watcher change`, change.operationType);
        if (change.operationType === 'update' || change.operationType === 'insert') {
            console.log(change)
            const newPromotion = change.fullDocument;
            console.log(newPromotion)
            broadcastUpdate(newPromotion);
        }
    });
};

const broadcastUpdate = (newPromotion: any) => {
    if (!getWSServerClients) {
        throw new Error("No WS server client available");
    }

    getWSServerClients().forEach((client) => {
        if (client.readyState === client.OPEN) {
            client.send(JSON.stringify({...newPromotion}));
        }
    });
};