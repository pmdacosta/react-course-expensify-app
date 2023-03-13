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
    amount: 100,
    createdAt: 1000
  }, {
    description: 'Gas bill',
    note: 'May',
    amount: 200,
    createdAt: 2000
  }, {
    description: 'Gas oven',
    note: 'May',
    amount: 5000,
    createdAt: 4000
  }, {
    description: 'Eletric bill',
    note: 'May',
    amount: 300,
    createdAt: 3000
  }
].map(expense => store.dispatch(addExpense(expense)));


store.dispatch(setTextFilter('gas'));

setTimeout(() => store.dispatch(setTextFilter('bill')), 4000);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));