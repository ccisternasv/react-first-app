import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const expenses = props.expenses;

  const selectExpensesFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = expenses.filter(expense => {
    return (expense.date).getFullYear().toString() === filteredYear;
  });

  return <div>
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onExpensesFilterSelection={selectExpensesFilter} />
      <ExpensesChart items = {filteredExpenses}/>
      <ExpensesList items = {filteredExpenses}></ExpensesList>
    </Card>
  </div>
    ;
}

export default Expenses;