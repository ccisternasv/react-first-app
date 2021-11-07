import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Expenses from './components/Expenses/Expenses';

const expenses = [
  {
    id: '',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date (2021, 2, 28)
  },
  {
    id: '',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date (2021, 2, 28)
  },
  {
    id: '',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date (2021, 2, 28)
  },
  {
    id: '',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date (2021, 2, 28)
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Expenses expenses= {expenses}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
