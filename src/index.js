import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const auth0Domain = "dev-tx3nfqo6.us.auth0.com";
const auth0ClientId = "uYfImiMZuDzDXeXAVjEGzzYdZveOAeJU";

const root = ReactDOM.createRoot(document.getElementById("root"));

const onRedirectCallback = (appState) => {
  console.log(appState);
};
root.render(
  <Auth0Provider
    domain={auth0Domain}
    clientId={auth0ClientId}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback()}
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
