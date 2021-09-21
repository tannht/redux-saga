import {
  Card,
  CardActions,
  CardContent,
  Fab,
  Grid,
  Icon,
  Typography
} from "@mui/material";
import React, { Component } from "react";
import "./TaskItem.css";
class TaskItem extends Component {
  render() {
    var { task, status } = this.props;
    return (
      <Card key={task.id}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className="cardActions">
          <Fab color="primary" size="small">
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab color="secondary" size="small">
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default TaskItem;
