import React from "react";
import ElementGenerator from "../../classes/ElementGenerator";

// redux
import { connect } from "react-redux";
import { handleAddColumn } from "../../redux/actions/UiActions";

// @material-ui/icons
import AddIcon from "@material-ui/icons/Add";
import classes from "../../assets/css/App.module.css";

// @material-ui/core
import Fab from "@material-ui/core/Fab";

function SecondColumn(props) {
  return (
    <div className={classes.containerItem + " " + classes.col2}>
      <h1>Трансляция</h1>
      {props.column2.map((element, index) => {
        return ElementGenerator[element.type](element.info, index);
      })}

      <Fab
        size="small"
        color="primary"
        aria-label="add"
        className={classes.fabAdd}
        onClick={props.handleAddColumn}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
const mapStateToProps = (state) => ({
  column2: state.column2,
});

const mapActionsToProps = {
  handleAddColumn,
};

export default connect(mapStateToProps, mapActionsToProps)(SecondColumn);
