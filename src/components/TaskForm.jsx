import { TextField } from "@mui/material";
import React, { Component } from "react";
class TaskForm extends Component {
  render() {
    return (
      <form>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Task Title"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="name"
          label="Task description"
          type="text"
          fullWidth
          variant="standard"
        />
      </form>
    );
  }
}

export default TaskForm;
