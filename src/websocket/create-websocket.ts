import { WebSocketServer } from 'ws';

const toJson = JSON.stringify;
const toRaw = JSON.parse;

export function createWebSocket(port: number): void {
  const ws = new WebSocketServer({ port });
  ws.on('connection', function open(ws) {
    console.log('建立websocket连接');
    ws.send(toJson({ name: 'zhangsan', age: 12 }));
    ws.on('message', function handleReceive(data: Buffer) {
      // 收到的数据
      console.log('receive from client', toRaw(data.toString()));
    });
    // 主动推送数据
    setInterval(() => {
      ws.send(+new Date());
    }, 100);
  });
}
