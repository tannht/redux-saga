import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import React, { Component } from "react";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import { STATUSES } from "../../constants";

const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read material ui book",
    status: 0,
  },
  {
    id: 2,
    title: "Play football",
    description: "With my friends",
    status: 1,
  },
  {
    id: 1,
    title: "Play game",
    description: "With my friends",
    status: 2,
  },
];
class TasksBoard extends Component {
  state = {
    open: false,
  };
  renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          var filterTask = listTask.filter(
            (task) => task.status === status.value
          );
          return <TaskList key={index} status={status} task={filterTask} />;
        })}
      </Grid>
    );
    return xhtml;
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  openForm = () => {
    this.setState({
      open: true,
    });
  };
  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }
  render() {
    return (
      <div className="">
        <Button variant="contained" color="primary" onClick={this.openForm}>
          <AddIcon />
          Add New Task
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

export default TasksBoard;
