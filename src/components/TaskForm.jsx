import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React, { Component } from "react";
class TaskForm extends Component {
  render() {
    var { open, onClose } = this.props;
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Thêm công việc</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Tên công việc"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="txtDesc"
            label="Mô tả công việc"
            type="area"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default TaskForm;
