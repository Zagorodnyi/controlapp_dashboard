import React from "react";

import Button from "../components/Button/Button";
import { divider } from "../assets/css/Column.module.css";

export default class ElementGenerator {
  // Generate a Button
  static BUTTON(info, index) {
    return (
      <Button key={index} type={"COMMON"} color={info.color} data={info.data}>
        {info.name}
      </Button>
    );
  }
  // Generate a divider
  static DIVIDER(info, index) {
    return <hr className={divider} key={index} />;
  }
}
