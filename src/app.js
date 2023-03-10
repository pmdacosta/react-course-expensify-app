import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses.js';

const store = configureStore();
store.dispatch(addExpense({
  description: 'Water bill',
  note: 'May',
  amount: 100,
  createdAt: 1000
}));
store.dispatch(addExpense({
  description: 'Gas bill',
  note: 'May',
  amount: 200,
  createdAt: 2000
}));
store.dispatch(setTextFilter('water'));
setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));