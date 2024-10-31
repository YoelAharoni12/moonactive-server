import {config} from "../config/env";


import {app} from "../app";
import {createServer} from "node:http";
import {setupWebSocket} from "../utils/websocket";
import {watchPromotions} from "../http/services/promition.watcher";
import {dbConnect} from "../db/connection";


const startServer = async () => {
    const port = config.PORT;

    await dbConnect()
    const server = createServer(app)
    setupWebSocket(server);
    watchPromotions()

    server.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}

startServer();