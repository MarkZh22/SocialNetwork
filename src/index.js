import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import store from './redux/redux-store.ts';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul,
  li,
  ol {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }

  html,
  body {
    height: 100%;
    line-height: 1;
    font-size: 14px;
    font-weight: 400;
    font-family: "Montserrat";
  
  }
  img{
    max-width: 100%;
    object-fit: cover;
  }
  input {outline:none;}
`;
const root = ReactDOM.createRoot(document.getElementById('root'));

window.store = store;
    root.render(
            <BrowserRouter>
                <Global />
                  <Provider store={store}>
                    <App/>
                  </Provider>
            </BrowserRouter>
    );

