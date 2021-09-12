import React, { Fragment } from 'react';
import ExpenseDetails from './Components/ExpenseDetails'
import ExpenseInput from './Components/ExpenseInput'
import './App.css';
function App() {
  return (
    <Fragment>
      <div className="Expensebody">      
        <p className="heading">Expense Tracker - Basic</p>
        
        <ExpenseInput/>
        <ExpenseDetails/>
      </div>

    </Fragment>
  );
}

export default App;
