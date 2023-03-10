import React from 'react';
import ReactDOM from 'react-dom';
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

{
  store.dispatch(setTextFilter('bill'));
  const state = store.getState();
  const expenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(expenses);
}
{
  store.dispatch(setTextFilter('gas'));
  const state = store.getState();
  const expenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(expenses);
}

ReactDOM.render(<AppRouter />, document.getElementById('app'));