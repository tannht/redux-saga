import { ThemeProvider } from "@mui/material/styles";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TasksBoard from "./containers/TasksBoard";
import GlobalLoading from "./GlobalLoading";
import configureStore from "./redux/configureStore";
import themeDefault from "./themes/Default";

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={themeDefault}>
          <ToastContainer />
          <GlobalLoading/>
          <TasksBoard />
        </ThemeProvider>
      </Provider>
    );
  }
}

// export default App;
export default App
