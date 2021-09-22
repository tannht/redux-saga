import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskAction from "../../actions/task";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import { STATUSES } from "../../constants";
import PropTypes from "prop-types";

class TasksBoard extends Component {
  state = {
    open: false,
  };
  componentDidMount() {
    const { taskActionCreator } = this.props;
    const { fetchListTaskRequest } = taskActionCreator;
    fetchListTaskRequest();
  }
  renderBoard = () => {
    var { listTask } = this.props;
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
TasksBoard.propTypes = {
  taskActionCreator: PropTypes.shape({
    fetchListTaskRequest: PropTypes.func,
  }),
  listTask: PropTypes.array,
};
const mapState = (state) => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatch = (dispatch) => {
  return {
    taskActionCreator: bindActionCreators(taskAction, dispatch),
  };
};
export default connect(mapState, mapDispatch)(TasksBoard);
