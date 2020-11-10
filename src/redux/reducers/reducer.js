// import { BUTTON } from "../../utils/CONST_elements";
import { ADD_ELEMENT } from "../types/UITypes";
import { SET_DEVICE_LIST, SET_ACTIVE_DEVICE, SET_SCALE, SET_SOURCE } from "../types/dataTypes";

const InitialState = {
  time: "",
  deviceList: [],
  activeDevice: '',
  deviceInfo: {},

};

export default function (state = InitialState, action) {
  switch (action.type) {
    case SET_DEVICE_LIST:
      return {
        ...state,
        deviceInfo: action.payload.find((device) => device.deviceId === state.activeDevice),
        deviceList: action.payload
      }
    case SET_SCALE:
      return {
        ...state,
        deviceInfo: {
          ...state.deviceInfo,
          scale: action.payload
        }
      }
    case SET_SOURCE:
      return {
        ...state,
        deviceInfo: {
          ...state.deviceInfo,
          currentDevice: action.payload
        }
      }
    case SET_ACTIVE_DEVICE:
      const deviceInfo = state.deviceList.find((device) => device.deviceId === action.payload)
      return {
        ...state,
        deviceInfo: deviceInfo,
        activeDevice: action.payload
      }
    case ADD_ELEMENT:
      state["column" + action.column].push(action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
}









// column1: [
  //   {
  //     type: BUTTON,
  //     info: {
  //       name: "Интро",
  //       color: "primary",
  //       data: { type: "NOTE_ON", channel: 0, note: "C2" },
  //     },
  //   },
  //   {
  //     type: BUTTON,
  //     info: {
  //       name: "Молодежное Служение",
  //       color: "primary",
  //       data: { type: "NOTE_ON", channel: 0, note: "C#2" },
  //     },
  //   },
  //   {
  //     type: BUTTON,
  //     info: {
  //       name: "Перебивка",
  //       color: "primary",
  //       data: { type: "NOTE_ON", channel: 0, note: "D2" },
  //     },
  //   },
  //   {
  //     type: BUTTON,
  //     info: {
  //       name: "Пожертвования",
  //       color: "secondary",
  //       data: { type: "NOTE_ON", channel: 0, note: "D#2" },
  //     },
  //   },
  // ],
  // column2: [
  //   {
  //     type: BUTTON,
  //     info: {
  //       name: "Щит мой в Боге",
  //       color: "default",
  //       data: { type: "NOTE_ON", channel: 0, note: "C#2" },
  //     },
  //   },
  //   {
  //     type: BUTTON,
  //     info: {
  //       name: "Waymaker",
  //       color: "default",
  //       data: { type: "NOTE_ON", channel: 0, note: "D2" },
  //     },
  //   },
  //   {
  //     type: BUTTON,
  //     info: {
  //       name: "Альфа и Омега",
  //       color: "default",
  //       data: { type: "NOTE_ON", channel: 0, note: "D#2" },
  //     },
  //   },
  //   {
  //     type: BUTTON,
  //     info: {
  //       name: "Иисус люблю я",
  //       color: "default",
  //       data: { type: "NOTE_ON", channel: 0, note: "E2" },
  //     },
  //   },
  //   {
  //     type: BUTTON,
  //     info: {
  //       name: "СТОП",
  //       color: "secondary",
  //       data: { type: "NOTE_ON", channel: 0, note: "F2" },
  //     },
  //   },
  //   // {
  //   //   type: DIVIDER,
  //   //   info: {},
  //   // },
  // ],