import React from "react";

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    amount: '',
    note: ''
  };
  onDescripitionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/))
      this.setState(() => ({ amount }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  render() {
    return (
      <form>
        <input type="text" placeholder="Description" autoFocus
          value={this.state.description} onChange={this.onDescripitionChange}
        />
        <input type="text" placeholder="Amount"
          value={this.state.amount} onChange={this.onAmountChange}
        />
        <textarea placeholder="Add a note for your expense (optional)."
          cols="30" rows="10" value={this.state.note} onChange={this.onNoteChange}></textarea>
        <button>Add Expense</button>
      </form>
    );
  }
}