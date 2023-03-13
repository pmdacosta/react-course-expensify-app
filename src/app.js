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
const expenses = [
  {
    description: 'Water bill',
    note: 'May',
    amount: 500,
    createdAt: 2000
  }, {
    description: 'Gas bill',
    note: 'May',
    amount: 600,
    createdAt: 1000
  }, {
    description: 'Gas oven',
    note: 'May',
    amount: 2000,
    createdAt: 9000
  }, {
    description: 'Eletric bill',
    note: 'May',
    amount: 700,
    createdAt: 3000
  }
].map(expense => store.dispatch(addExpense(expense)));

store.dispatch(setTextFilter(''));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));