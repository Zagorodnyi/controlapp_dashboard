import React, { useState } from "react";
import ElementGenerator from "../../classes/ElementGenerator";

// redux
import { connect } from "react-redux";
import { handleAddColumn } from "../../redux/actions/UiActions";

// @material-ui/icons
import AddIcon from "@material-ui/icons/Add";

import classes from "../../assets/css/App.module.css";

// @material-ui/core
import Fab from "@material-ui/core/Fab";
import AddDialog from "../AddDialog/AddDialog";

function FirstColumn(props) {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className={classes.containerItem + " " + classes.col1}>
      <h1>Видео</h1>
      {props.column1.map((element, index) => {
        return ElementGenerator[element.type](element.info, index);
      })}
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        className={classes.fabAdd}
        onClick={() => {
          setDialogOpen(true);
        }}
      >
        <AddIcon />
      </Fab>
      <AddDialog
        open={dialogOpen}
        handleClose={() => {
          setDialogOpen(false);
        }}
        column="1"
      />
    </div>
  );
}
const mapStateToProps = (state) => ({
  column1: state.column1,
});

const mapActionsToProps = {
  handleAddColumn,
};

export default connect(mapStateToProps, mapActionsToProps)(FirstColumn);
