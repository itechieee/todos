import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../../../../actions/todoAction';

class TodoItem extends Component {
  handleDelete = (e) => {
    const { todo } = this.props;
    this.props.remove(todo.id);
  }
  render() {  
      const { todo } = this.props;
      return (
        <tr className="item">
          <td> {todo.title}</td>
          <td><button onClick={this.handleDelete} className="btn"><i style={{ color: 'white', fontSize: '1.8rem' }} className="far fa-trash-alt"></i></button></td>
          <td><button className="btn"><i style={{ color: 'white', fontSize: '1.8rem' }} className="fas fa-pen"></i></button></td>
          <td><button className="btn"><i style={{ color: 'white', fontSize: '1.8rem' }} className="far fa-check-circle"></i></button></td>
        </tr>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => {
      dispatch(removeTodo(id))
    }
  }
}
export default connect(null, mapDispatchToProps)(TodoItem);
