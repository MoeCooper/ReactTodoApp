import React from "react";

export default function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };
  return (
    <div className="container">
      <form className="todoItems">
        <div>
          <input
            type="checkbox"
            checked={props.completed}
            id={props.id}
            //calls the handlechange and passes the id
            onChange={() => props.handleChange(props.id)}
          />
          <label
            htmlFor="my-list"
            style={props.completed ? completedStyle : null}
          >
            {props.task}
          </label>
        </div>
      </form>
    </div>
  );
}
