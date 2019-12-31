import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'socket.io';

export class MyIoAdapter extends IoAdapter {
    createIOServer(port: number, options?: ServerOptions): any {
        const io = super.createIOServer(port, options);
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