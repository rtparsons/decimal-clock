import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Dashboard></Dashboard>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}
