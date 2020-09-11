import io from "socket.io-client";
import { SUCCESS } from "../../utils/CONST_events";
import { ADD_ELEMENT } from "../types/UITypes";

const socket = io("fierce-sierra-99883.herokuapp.com/controlApp", {
  transports: ["websocket"],
});

socket.on(SUCCESS, () => {
  console.log("connected");
});

export const handleAddColumn = (data, column) => (dispatch) => {
  if (data.info.name.trim() === "") return;
  dispatch({ type: ADD_ELEMENT, column: column, payload: data });
};

export const onButtonClick = (data) => (dispatch) => {
  socket.emit(data.type, data);
};
