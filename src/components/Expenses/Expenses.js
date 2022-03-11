import React, {useState} from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = (props) => {

    // set up state
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        // console.log('In Expenses.js');
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    
    const filteredExpenses = props.items.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>      
            {/* selected={filteredYear}    2 way binding    */}
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

                {/* loop */}
                {/* using special property "key" to handle issue with loop,
                Each child in a list should have a unique "key" prop */}
                {/* props.items */}

                {/* {filteredExpenses.length === 0 && expensesContent}
                {filteredExpenses.length > 0 && filteredExpenses.map((expense) => {
                        return <ExpenseItem 
                        key=    {expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} />    
                    })
                } */}
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}></ExpensesList>                
            </Card>  
        </div> 
    );
}

export default Expenses;
