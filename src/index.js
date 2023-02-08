import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { DSSelContextProvider } from './store/DS-Sel-context'
import { DSVisContextProvider } from './store/DS-Vis-context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DSSelContextProvider>
    <DSVisContextProvider>
      <App />
      </DSVisContextProvider>
    </DSSelContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
