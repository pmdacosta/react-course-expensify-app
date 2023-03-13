import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.filters.text && <p>text filter: {props.filters.text}</p>}
    {props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)}
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters),
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseList);
