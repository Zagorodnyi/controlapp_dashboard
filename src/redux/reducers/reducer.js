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
        data: { type: "NOTE_ON", channel: 0, note: "C#2" },
      },
    },
    {
      type: BUTTON,
      info: {
        name: "Пожертвования",
        color: "secondary",
        data: { type: "NOTE_ON", channel: 2, note: "A2" },
      },
    },
    {
      type: DIVIDER,
      info: {},
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
    {
      type: BUTTON,
      info: {
        name: "Стих Быт 4:38",
        color: "default",
        data: { type: "NOTE_ON", channel: 3, note: "E4" },
      },
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
