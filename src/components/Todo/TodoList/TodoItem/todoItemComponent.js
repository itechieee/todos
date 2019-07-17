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
        <div>
          <div>
              { todo.title }
              <input type="button" value="x" onClick={this.handleDelete} />
          </div>      
        </div>
        
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
