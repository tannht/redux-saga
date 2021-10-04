import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActions from "../../actions/modal";
import TaskForm from "../TaskForm";
class TaskModal extends Component {
  render() {
    const { open, onClose } = this.props;
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>ADD NEW TASK</DialogTitle>
        <DialogContent>
          <TaskForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    );
  }
}
TaskModal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  open: PropTypes.bool,
  component: PropTypes.object,
  modalActionsCreator: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
};
const mapState = (state) => ({
  open: state.modal.showModal,
  component: state.modal.component,
  title: state.modal.title,
  content: state.modal.content,
});
const mapDispatch = (dispatch) => ({
  modalActionsCreator: bindActionCreators(modalActions, dispatch),
});
const withConnect = connect(mapState, mapDispatch);
export default withConnect(TaskModal);
