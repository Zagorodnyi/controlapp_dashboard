import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import socket from './utils/socket'
import { getAlldevices } from './redux/actions/confidenceSettingsActions'
import { SETTINGS_CHANGED } from './utils/CONST_events'


socket.on(SETTINGS_CHANGED, () => {
  console.log('socket Trigger')
  store.dispatch(getAlldevices())
})

socket.on("STATUS_CHANGED", () => {
  store.dispatch(getAlldevices())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
