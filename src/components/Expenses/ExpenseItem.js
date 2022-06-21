import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// Stateless or presentational component
// One rule, u must have on root element per return statement or per js code snippet
const ExpenseItem = (props) => {
  // let title = props.title;
  return (
    // <div className='expense-item'>
    //   <ExpenseDate date={props.date}/>
    //   <div className='expense-item__description'>
    //     <h2>{props.title}</h2>
    //     <div className='expense-item__price'>${props.amount}</div>
    //   </div>
    // </div>
    <li>
      {/* Composition */}
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
