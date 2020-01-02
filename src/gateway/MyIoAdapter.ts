import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';
import { MessageMappingProperties } from '@nestjs/websockets';
import { Observable, fromEvent, EMPTY } from 'rxjs';
import { mergeMap, filter } from 'rxjs/operators';

export class MyIoAdapter extends IoAdapter {
    createIOServer(port: number, options?: ServerOptions): any {
        return super.createIOServer(port, options)
    }

    // 绑定客户端连接事件
    bindClientConnect(server, callback: Function) {
        server.on('connection', callback);
    }

    // // 将传入的消息绑定到适当的消息处理程序
    // bindMessageHandlers(socket: any, handlers: MessageMappingProperties[], process: (data: any) => Observable<any>) {
    //     console.log(socket.id)
    //     fromEvent(socket, 'events')
    //         .pipe(
    //             mergeMap(data => this.bindMessageHandler(data, handlers, process)),
    //             filter(result => result)
    //         )
    //         .subscribe(response => socket.send(JSON.stringify(response)));
    // }
    // bindMessageHandler(
    //     data,
    //     handlers: MessageMappingProperties[],
    //     process: (data: any) => Observable<any>,
    // ): Observable<any> {
    //     const message = data;
    //     // 查找对应的消息处理
    //     const messageHandler = handlers.find(
    //         handler => handler.message === message.event,
    //     );
    //     if (!messageHandler) {
    //         return EMPTY;
    //     }
    //     return process(messageHandler.callback(message));
    // }

    // 终止服务器实例
    close(server) {
        server.close();
    }
}