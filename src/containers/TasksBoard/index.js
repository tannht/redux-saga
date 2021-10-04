import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActions from "../../actions/modal";
import * as taskAction from "../../actions/task";
import TaskModal from "../../components/Modal";
import SearchBox from "../../components/SearchBox";
import TaskList from "../../components/TaskList";
import { STATUSES } from "../../constants";

class TasksBoard extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    const { taskActionCreator } = this.props;
    const { fetchListTask } = taskActionCreator;
    fetchListTask();
  }
  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActionCreator } = this.props;
    const { filterTask } = taskActionCreator;
    filterTask(value);
  };
  renderSearchBox = () => {
    var xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter} />;
    return xhtml;
  };

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

  openDialog = () => {
    // const { modalActionsCreator } = this.props;
    // const { showModal, changeModalContent, changeModalTitle } =
    //   modalActionsCreator;
    // showModal();
    // changeModalTitle("Add new task");
    // changeModalContent();
    this.setState({
      open: true,
    });
  };

  renderForm = () => {
    const { open } = this.state;
    var xhtml = null;
    xhtml = <TaskModal open={open} onClose={this.handleClose} />;
    return xhtml;
  };
  render() {
    return (
      <div className="">
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.openDialog}
            >
              <AddIcon />
              Add New Task
            </Button>
          </Grid>
          <Grid item md={4} xs={12}>
            {this.renderSearchBox()}
          </Grid>
        </Grid>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}
TasksBoard.propTypes = {
  taskActionCreator: PropTypes.shape({
    fetchListTaskRequest: PropTypes.func,
    filterTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
  modalActions: PropTypes.shape({
    showModal: PropTypes.func,
    changeModalContent: PropTypes.func,
    changeModalTitle: PropTypes.func,
  }),
};
const mapState = (state) => {
  return {
    listTask: state.task.listTask,
  };
};
const mapDispatch = (dispatch) => {
  return {
    taskActionCreator: bindActionCreators(taskAction, dispatch),
    modalActionsCreator: bindActionCreators(modalActions, dispatch),
  };
};
export default connect(mapState, mapDispatch)(TasksBoard);
