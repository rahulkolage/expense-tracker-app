import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    
    const saveExpenseDataHandler = (enteredExpenseData) => {        
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);

        // emit data to parent component which is App.js
        props.onAddExpense(expenseData);

        //
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onEditFormCancel={stopEditingHandler}
            />}
        </div>
    );
};

export default NewExpense;