import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import TaskItem from "./TaskItem";
class TaskList extends Component {
  render() {
    var { status, task } = this.props;
    return (
      <Grid item sm={4} xs={12} key={status.value}>
        <Box mt={2} mb={2}>
          <div>{status.label}</div>
          <div>
            {task.map((task, index) => {
              return <TaskItem key={index}status={status} task={task} />;
            })}
          </div>
        </Box>
      </Grid>
    );
  }
}

export default TaskList;
