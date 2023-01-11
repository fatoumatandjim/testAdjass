import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from "react-intl";
import messages_en from "./en.json";
import messages_fr from "./fr.json";
const language = "en";
const messages = {
    'en': messages_en,
    'fr': messages_fr
};
ReactDOM.createRoot(document.getElementById('root') ).render(
  <React.StrictMode>
  
   <IntlProvider locale={language} messages={messages[language]}>
            <App/>
        </IntlProvider>
  </React.StrictMode>,
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
