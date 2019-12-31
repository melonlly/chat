import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
    ConnectedSocket,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('events')
    findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
        console.log(`events: ${ JSON.stringify(data) }`)
        return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    }

    @SubscribeMessage('identity')
    async identity(@MessageBody() data: number): Promise<number> {
        console.log(`identity: ${ data }`)
        return data;
    }

    @SubscribeMessage('send')
    sendMsg(@MessageBody() msg: string): WsResponse<string> {
        console.log(`sendMsg: ${ msg }`)
        this.server.to('melon room').emit('send', '666')
        return {
            event: 'send',
            data: msg
        }
    }

}