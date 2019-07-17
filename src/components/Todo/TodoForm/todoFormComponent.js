import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '.././../../actions/todoAction';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
            todoError :'Todo cannot be empty',
            todoData: ''
          }
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();    
    if(this.state.todoData === '') {
      this.setState({ todoError:'Todo cannot be empty' });
    } else {
        this.props.add(this.state.todoData);
        this.setState({ 
          todoError:'',
          todoData: ''
        });
    }
  }

  handleChange(e) {
    this.setState({
      todoData: e.target.value,
      todoError: ''
    })
  }

  render() {
    const {todoData, todoError} = this.state;
    return (
          <form onSubmit={this.handleSubmit}>
            <label> Name: <input id="todo" type="text" name="name" value={todoData} onChange={this.handleChange} /> </label>
            <input type="submit" value="Submit" />
            <span> {todoError} </span>
          </form>
      );
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (todoTitle) => {
      dispatch(addTodo(todoTitle))
    }
  }
}
export default connect(null, mapDispatchToProps)(TodoForm);
