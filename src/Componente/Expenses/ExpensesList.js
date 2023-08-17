import Expenseitmes from "./Expenseitmes"
import "./ExpensesList.css";
const ExpensesList = (props) => {
  
  if(props.filteredExpenses.length === 0){
    return <h2 className="expenses-list__fallback" >Found no expense</h2>
  }

  return (
    
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
      <Expenseitmes
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
    
    }
    </ul>
    

  )
};


export default ExpensesList;
