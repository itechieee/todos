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
      <div className="search">
        <h1>Ezy Do</h1>
        <form onSubmit={this.handleSubmit} className="form-inline" action="">
          <input  onChange={this.handleChange}  id="todo" type="text" value={todoData} className="form-control" name="title" placeholder="Remember to ..." required />
          <button type="submit" value="Submit" style={{ color: '#fff' }} type="submit" className="btn"><i className="fas fa-plus"></i></button>
        </form>
        <span> {todoError} </span>
      </div>
       
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
