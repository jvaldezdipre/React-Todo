import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  //-----------------STATE-----------------
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'skiing',
          id: Date.now(),
          completed: true,
        },
      ],
    };
  }

  //--------------HANDLERS-------------------
  //Add item
  addTodo = todoName => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  //Completed Item
  completeTodo = id => {
    console.log('hello world', id);
    const tempTodo = this.state.todos.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    this.setState({
      todos: tempTodo,
    });
  };

  //Clear Completed Items
  clearCompleted = () => {
    const notCompleted = this.state.todos.filter(item => {
      return !item.completed;
    });

    this.setState({
      todos: notCompleted,
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} completeTodo={this.completeTodo} />
        <TodoForm addTodo={this.addTodo} />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
