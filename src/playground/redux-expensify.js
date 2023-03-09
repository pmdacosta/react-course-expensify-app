import { createStore, combineReducers } from "redux";

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

console.log(demoState);
