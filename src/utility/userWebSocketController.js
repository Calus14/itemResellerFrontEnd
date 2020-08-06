import io from 'socket.io-client';

export default class UserWebSocketController{

    constructor(address, userUUID){
        this.uuid = userUUID
        this.socket = new io(address)

        this.socket.onopen = function (e) {
            console.log("[open] Connection established");
            console.log("Sending to server");
            console.log(e)
            this.socket.send("My name is John");
        }

        this.socket.onmessage = function (event) {
            console.log(`[message] Data received from server: ${event.data}`);
        }

        this.socket.onclose = function (event) {
            if (event.wasClean) {
                console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
            } else {
                // e.g. server process killed or network down
                // event.code is usually 1006 in this case
                console.log('[close] Connection died');
            }
        }

        this.socket.onerror = function (error) {
            console.log(`[error] ${error.message}`);
        }

        console.log("Created the user websosocket listen to see if its open");
    }
}