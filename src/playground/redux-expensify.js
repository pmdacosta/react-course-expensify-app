import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, expense) => ({
  type: 'EDIT_EXPENSE',
  id,
  expense
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(expense => action.id === expense.id ?
        {
          ...expense,
          ...action.expense
        } : expense);
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

const unsub = store.subscribe(() =>
  console.log(store.getState())
);
const ids = [];
ids.push(
  store.dispatch(addExpense({
    description: 'Big Burgi',
    amount: 500
  })).expense.id);
ids.push(store.dispatch(addExpense({
  description: 'Small Burgi',
  amount: 400
})).expense.id);

store.dispatch(removeExpense({ id: ids[0] }));
store.dispatch(editExpense(ids[1], { amount: 600 }));
store.dispatch(setTextFilter('Burgi'));