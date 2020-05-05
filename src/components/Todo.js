import React from 'react';

const Todo = props => {
  const handleClick = () => {
    props.completeTodo(props.todo.id);
  };

  return (
    <div className={`todo-item${props.todo.completed ? ' completed' : ''}`}>
      <p onClick={handleClick}>{props.todo.name}</p>
    </div>
  );
};

export default Todo;
