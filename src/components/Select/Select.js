import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function SelectCustom(props) {
  const generateOptions = () => {
    return props.list.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });
  };

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={props.name}>{props.name}</InputLabel>
      <Select
        native
        value={props.value}
        onChange={props.onChange}
        label={props.name}
        inputProps={{
          name: props.name,
          id: "outlined-channel-native-simple",
        }}
      >
        {generateOptions()}
      </Select>
    </FormControl>
  );
}
