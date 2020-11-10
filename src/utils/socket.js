import io from "socket.io-client";
import { SUCCESS } from "./CONST_events";


const socket = io("https://fierce-sierra-99883.herokuapp.com/timer", {
    transports: ["websocket"],
});

socket.on(SUCCESS, () => {
    console.log("connected");
});

export default socket