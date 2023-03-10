import React from "react";
import { connect } from "react-redux";

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.filters.text && <p>text filter: {props.filters.text}</p>}
    <ul>{props.expenses.map((expense) => <li key={expense.id}>{expense.description}</li>)}</ul>
  </div>
);

const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps)(ExpenseList);
