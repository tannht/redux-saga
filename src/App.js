import { ThemeProvider } from "@mui/material/styles";
import React, { Component } from "react";
import TasksBoard from "./containers/TasksBoard";
import themeDefault from "./themes/Default";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themeDefault}>
        <TasksBoard />
      </ThemeProvider>
    );
  }
}

export default App;
