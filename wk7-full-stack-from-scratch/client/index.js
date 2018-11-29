import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import App from "./components/App"
import { Provider } from "react-redux"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

document.addEventListener("DOMContentLoaded", () => {
  var mountNode = document.getElementById("app");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  mountNode);
})
