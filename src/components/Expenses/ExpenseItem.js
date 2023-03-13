import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

//props pass data to other components - props are parameters - can be called anything 
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      {/* add attribute to ExpenseDate - date and assign to prop.date. This gives access to data from outside this component
      props.date = is from ExpenseDate component */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* when button is clicked change title -  onClick is a special prop adds a event listener. Points to a function*/}
      <button onClick={clickHandler}>Change Title</button> 
    </Card>
  );
}

export default ExpenseItem;
