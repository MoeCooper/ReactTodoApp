import React from "react";
import TodoItem from "../components/TodoItem";
import Header from "../components/Header";
import tasksData from "./tasksData";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: tasksData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      //uses map to loop over prevState from this.state todos TasksData
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          //opposite of what it currently is
          todo.completed = !todo.completed;
        }
        return todo;
      });
      //returns new version of todos
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const tasksComponents = this.state.todos.map(taskers => (
      <TodoItem
        id={taskers.id}
        task={taskers.task}
        completed={taskers.completed}
        handleChange={this.handleChange}
      />
    ));

    return (
      <div className="App">
        <Header />
        {tasksComponents}
      </div>
    );
  }
}

//2:40:14 FCC video!~
