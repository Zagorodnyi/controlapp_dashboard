// React Imports
import React, { useState } from "react";
// Redux
import { connect } from "react-redux";
import { changeLayout } from "../../redux/actions/timerActions";
// Styles import
import classes from "../../assets/css/App.module.css";
import {
  row0,
  row1,
  row2,
  item1,
  item2,
  time,
  dividerStatic,
} from "../../assets/css/Column.module.css";
// @material-ui imports
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import LayersIcon from "@material-ui/icons/Layers";
// Custom components
import Button from "../Button/Button";
// Strings
import {
  TIMER_START,
  TIMER_STOP,
  CAPTURE,
  CAPTURE_STOP,
  LAYOUT,
} from "../../utils/CONST_events";

function ThirdColumn(props) {
  const [mins, setMins] = useState("00");
  const [secs, setSecs] = useState("00");

  const onMinsChange = (event) => {
    if (event.target.value.length <= 5) {
      setMins(event.target.value);
    }
    return;
  };
  const onSecsChange = (event) => {
    if (event.target.value.length <= 5) {
      setSecs(event.target.value);
    }
    return;
  };
  return (
    <div className={classes.containerItem + " " + classes.col3}>
      <h1 className={row0}>Стейдж монитор</h1>
      <div className={row1}>
        <div className={item1}>
          <TextField
            className={time}
            size="small"
            id="Minutes"
            label="Min"
            value={mins}
            onChange={onMinsChange}
          />
          <span>:</span>
          <TextField
            size="small"
            className={time}
            id="Seconds"
            label="Sec"
            value={secs}
            onChange={onSecsChange}
          />
        </div>

        <div className={item2}>
          <Button
            color="primary"
            data={{
              type: TIMER_START,
              minutes: mins,
              seconds: secs,
            }}
          >
            Tаймер старт
          </Button>
          <Button
            data={{
              type: TIMER_STOP,
            }}
          >
            Стоп
          </Button>
        </div>
      </div>
      <hr className={dividerStatic} />
      <div className={row2}>
        <Button
          data={{
            type: CAPTURE,
          }}
        >
          Начать общий отсчет
        </Button>
        <Button
          data={{
            type: CAPTURE_STOP,
          }}
        >
          Остановить общий отсчет
        </Button>
      </div>
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        className={classes.fabLayer}
        onClick={props.changeLayout.bind(this, { type: LAYOUT })}
      >
        <LayersIcon />
      </Fab>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapActionsToProps = {
  changeLayout,
};

export default connect(mapStateToProps, mapActionsToProps)(ThirdColumn);
