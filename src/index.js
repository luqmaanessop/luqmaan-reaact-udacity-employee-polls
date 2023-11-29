import React from 'react';
import { createStore } from "redux";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import reducer from './reducers';
import middleware from './middleware';
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = createStore(reducer, middleware);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

