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
        name: "Интро",
        color: "default",
        data: { type: "NOTE_ON", channel: 0, note: "C#2" },
      },
    },
    {
      type: DIVIDER,
      info: {},
    },
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
