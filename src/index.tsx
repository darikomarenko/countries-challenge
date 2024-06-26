import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import {store} from './store';


const rootElement = document.getElementById("root") as HTMLDivElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
