import {WebSocketServer} from "ws";

let wss: WebSocketServer;
export const setupWebSocket = (server: any) => {
    wss = new WebSocketServer({server});

    wss.on('connection', (ws) => {
        console.log('Client connected');
        ws.on('close', () => console.log('Client disconnected'));
    });

    return wss;
};

export const getWSServerClients = () => wss.clients