import { BUTTON, DIVIDER } from "../../utils/CONST_elements";
import { ADD_ELEMENT } from "../types/UITypes";

const InitialState = {
  time: "",
  column1: [
    {
      type: BUTTON,
      info: {
        name: "Интро",
        color: "primary",
        data: { type: "NOTE_ON", channel: 0, note: "C2" },
      },
    },
    {
      type: BUTTON,
      info: {
        name: "Молодежное Служение",
        color: "primary",
        data: { type: "NOTE_ON", channel: 0, note: "C#2" },
      },
    },
    {
      type: BUTTON,
      info: {
        name: "Перебивка",
        color: "primary",
        data: { type: "NOTE_ON", channel: 0, note: "D2" },
      },
    },
    {
      type: BUTTON,
      info: {
        name: "Пожертвования",
        color: "secondary",
        data: { type: "NOTE_ON", channel: 0, note: "D#2" },
      },
    },
  ],
  column2: [
    {
      type: BUTTON,
      info: {
        name: "Щит мой в Боге",
        color: "default",
        data: { type: "NOTE_ON", channel: 0, note: "C#2" },
      },
    },
    {
      type: BUTTON,
      info: {
        name: "Waymaker",
        color: "default",
        data: { type: "NOTE_ON", channel: 0, note: "D2" },
      },
    },
    {
      type: BUTTON,
      info: {
        name: "Альфа и Омега",
        color: "default",
        data: { type: "NOTE_ON", channel: 0, note: "D#2" },
      },
    },
    {
      type: BUTTON,
      info: {
        name: "Иисус люблю я",
        color: "default",
        data: { type: "NOTE_ON", channel: 0, note: "E2" },
      },
    },
    {
      type: BUTTON,
      info: {
        name: "СТОП",
        color: "secondary",
        data: { type: "NOTE_ON", channel: 0, note: "F2" },
      },
    },
    // {
    //   type: DIVIDER,
    //   info: {},
    // },
  ],
};

export default function (state = InitialState, action) {
  switch (action.type) {
    case ADD_ELEMENT:
      state["column" + action.column].push(action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
}
