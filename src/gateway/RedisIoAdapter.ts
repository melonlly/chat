import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';
import * as redisIoAdapter from 'socket.io-redis';

const redisAdapter = redisIoAdapter({ host: '47.98.146.215', port: 6379 });

export class RedisIoAdapter extends IoAdapter {
    createIOServer(port: number, options?: ServerOptions): any {
        const io = super.createIOServer(port, options);
        io.adapter(redisAdapter);
        io.on('connection', socket => {
            console.log('connected')
            socket.join('melon room', () => {
                const rooms = Object.keys(socket.rooms);
                console.log(rooms);
            });

            io.in('melon room').clients((err, clients) => {
                console.log(clients)
            })

        })
        return io;
    }
}