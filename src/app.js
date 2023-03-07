import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch, NavLink } from 'react-router-dom';
import 'normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from ExpenseDashboardPage
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from AddExpensePage
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from EditExpensePage
  </div>
);

const HelpPage = () => (
  <div>
    This is from HelpPage
  </div>
);

const NotFoundPage = () => (
  <div>
    <pre>404 Not Found!</pre>
    <Link to="/"><button>Go home</button></Link>
  </div>
);

const Header = () => (
  <header>
    <span>
      <h1>Expensify</h1>
      <NavLink activeClassName="is-active" to="/" exact={true}>Home</NavLink>
      <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
      <NavLink activeClassName="is-active" to="/edit">Edit Expense</NavLink>
      <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </span>
  </header>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
