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
import { uuidv1 } from 'uuid'

@WebSocketGateway()
export class EventsGateway {
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('create')
    async createRoom(@MessageBody() params: any, @ConnectedSocket() client: any): Promise<number> {
        console.log(`创建room参数： ${ JSON.stringify(params) }`)
        const roomId = params.roomId || client.id // 房间号（唯一），如果请求参数中不包含房间号，则使用客户端id做房间号
        client.join(roomId, () => {
            const rooms = Object.keys(client.rooms);
            console.log(rooms);
        })
        return roomId
    }

    @SubscribeMessage('events')
    findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
        console.log(`events: ${JSON.stringify(data)}`)
        return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    }

    @SubscribeMessage('identity')
    async identity(@MessageBody() data: number): Promise<number> {
        console.log(`identity: ${data}`)
        return data;
    }

    @SubscribeMessage('send')
    sendMsg(@MessageBody() params: any) {
        this.server.to(params.roomId).emit('send', params.msg)
    }

}