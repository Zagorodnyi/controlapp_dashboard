import socket from '../../utils/socket'


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
