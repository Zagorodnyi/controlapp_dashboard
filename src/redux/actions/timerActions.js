import io from "socket.io-client";
import { SUCCESS } from "../../utils/CONST_events";

const socket = io("fierce-sierra-99883.herokuapp.com/timer", {
  transports: ["websocket"],
});

socket.on(SUCCESS, () => {
  console.log("connected");
});

export const timerStop = (data) => (dispatch) => {
  socket.emit(data.type);
};

export const captureStop = (data) => (dispatch) => {
  socket.emit(data.type);
};

export const captureStart = (data) => (dispatch) => {
  socket.emit(data.type);
};

export const onButtonClickTimer = (data) => (dispatch) => {
  socket.emit(data.type, data);
};

export const changeLayout = (data) => (dispatch) => {
  console.log(data);
  socket.emit(data.type);
};
