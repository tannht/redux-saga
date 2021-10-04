import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import React, { Component } from "react";
class SearchBox extends Component {
  render() {
    var {handleChange} = this.props;
    return (
      <form noValidate autoComplete="off">
      <TextField 
      autoComplete="off"
      id="standard-basic" 
      label="Search" 
      variant="standard" 
      onChange = {handleChange}
      margin = "normal"
      placeholder = "Keyword"
      />
      </form>
    );
  }
}
SearchBox.propTypes = {
  handleChange: PropTypes.func
}
export default SearchBox;
