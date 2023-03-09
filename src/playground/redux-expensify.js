import { createStore, combineReducers } from "redux";

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
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
console.log(store.getState());

const demoState = {
  expenses: [{
    id: 1,
    description: 'food',
    note: 'McDonalds',
    amount: 500, // cents
    createdAt: new Date()
  }],
  filters: {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};

console.log();
