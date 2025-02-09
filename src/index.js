import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <Auth0Provider
  domain = {domain}
  clientId = {clientId}
  redirectUri = {window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
