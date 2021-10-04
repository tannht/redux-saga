import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as uiActions from "../actions/ui";
import LoadingIcon from "../assets/images/loading.gif";
import "./style.css";
class GlobalLoading extends Component {
  render() {
    const { showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className="overlay-bg">
          <img src={LoadingIcon} alt="loading" className="icon" />
        </div>
      );
    }
    return xhtml;
  }
}

const mapState = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};
const mapDispatch = (dispatch) => {
  return {
    uiAction: bindActionCreators(uiActions, dispatch),
  };
};
const withConnect = connect(mapState, mapDispatch);

export default withConnect(GlobalLoading)