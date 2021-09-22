import { ThemeProvider } from "@mui/material/styles";
import React, { Component } from "react";
import { Provider } from "react-redux";
import TasksBoard from "./containers/TasksBoard";
import configureStore from "./redux/configureStore";
import themeDefault from "./themes/Default";
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={themeDefault}>
          <TasksBoard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
