import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Message from './message';
import reportWebVitals from './reportWebVitals';
const pHolder = 'Text your msg here...';
const pHolderAuth = 'Text your name...';
const admin = 'чат-Робот';

ReactDOM.render(
  <React.StrictMode>
    <Message defaultText={pHolder} defaultAuth={pHolderAuth} chatAdmin={admin} />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
