// React
import React from "react";
// @material-ui/core
import Button from "@material-ui/core/Button";
// CSS
import { button } from "../../assets/css/Confidence.module.css";

//redux
import { connect } from "react-redux";
import { onButtonClick } from "../../redux/actions/UiActions";
import { onButtonClickTimer } from "../../redux/actions/timerActions";

// Button Component
const CustumButton = (props) => {
  // Check wheater Button generated dynamicly or static
  return props.type === "COMMON" ? (
    // For Dynamic
    <Button
      key={props.name}
      variant="outlined"
      color={props.color}
      className={button}
      onClick={props.onButtonClick.bind(this, props.data)}
    >
      {props.children}
    </Button>
  ) : (
      // For Static Confidence Column
      <Button
        key={props.name}
        variant="outlined"
        color={props.color}
        className={button}
        onClick={props.onButtonClickTimer.bind(this, props.data)}
      >
        {props.children}
      </Button>
    );
};

const mapActionsToProps = {
  onButtonClick,
  onButtonClickTimer,
};

export default connect(null, mapActionsToProps)(CustumButton);
