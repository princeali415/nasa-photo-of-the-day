import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from 'styled-components'
import theme from './theme/index.js'

ReactDOM.render(
    //theme provider is a one time question
    <ThemeProvider theme={theme}><App /></ThemeProvider>,
    document.getElementById("root")
    );
