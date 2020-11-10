// React Imports
import React, { useState } from "react";
// @material-ui/core
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
// Redux
import { handleAddColumn } from "../../redux/actions/UiActions";
import { connect } from "react-redux";
// Custom Components
import SelectCustom from "../Select/Select";
// Other
import styles from "../../assets/jss/Dialog/Dialog";
import {
  BUTTON,
  NOTES_LIST,
  OCTAVE_LIST,
  MIDI_CNANNEL_LIST,
} from "../../utils/CONST_elements";

const useStyles = makeStyles(styles);

// Dialog Component

function AddDialog(props) {
  //Define Classes
  const classes = useStyles();
  // Internal State
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("NOTE_ON");
  const [channel, setChannel] = useState(0);
  const [note, setNote] = useState("C");
  const [octave, setOctave] = useState("0");
  const [color, setColor] = useState("default");

  // Change Handlers
  const changeNameHandle = (event) => {
    setName(event.target.value);
  };
  const changeNoteHandle = (event) => {
    setNote(event.target.value);
  };
  const changeOctaveHandle = (event) => {
    setOctave(event.target.value);
  };
  const changeChannelHandle = (event) => {
    setChannel(event.target.value);
  };
  // Submit Handle
  const handleSubmit = () => {
    const data = {
      type: BUTTON,
      info: {
        name: name,
        color: color,
        data: {
          type: eventType,
          channel: parseInt(channel) - 1,
          note: `${note}${octave}`,
        },
      },
    };

    props.handleAddColumn(data, props.column);
    props.handleClose();
  };

  return (
    <Dialog
      fullWidth={true}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle style={{ textAlign: "center" }} id="form-dialog-title">
        Add Button
      </DialogTitle>
      <DialogContent>
        {/* <DialogContentText>Configure new Button</DialogContentText> */}
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Button text"
          type="text"
          value={name}
          onChange={changeNameHandle}
          fullWidth
        />
        <div className={classes.select}>
          <SelectCustom
            list={NOTES_LIST}
            name="Note"
            onChange={changeNoteHandle}
            value={note}
          />
          <SelectCustom
            list={OCTAVE_LIST}
            name="Octave"
            onChange={changeOctaveHandle}
            value={octave}
          />
          <SelectCustom
            list={MIDI_CNANNEL_LIST}
            name="Channel"
            onChange={changeChannelHandle}
            value={channel}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapActionsToProps = {
  handleAddColumn,
};

export default connect(null, mapActionsToProps)(AddDialog);
