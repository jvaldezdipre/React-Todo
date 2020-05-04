import React, { Component } from 'react';

export class TodoForm extends Component {
  //constructor with state
  constructor() {
    super();
    this.state = {
      keyword: '',
    };
  }

  //----------------HANDLER-----------
  handleChanges = e => {
    //update state with each keystroke
    this.setState({
      keyword: e.target.value,
    });
  };

  submitForm = e => {
    e.preventDefault();

    //calls the addTodo methos and the the written words to the name
    this.props.addTodo(this.state.keyword);

    //resets the keyword back to empty
    this.setState({
      keyword: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          type='text'
          name='todo'
          value={this.state.keyword}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
