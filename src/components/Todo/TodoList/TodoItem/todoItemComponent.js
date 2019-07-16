import React from 'react';

function TodoItem(props) {
  const { todo } = props;
  return (
    <div>
      <div>
          { todo.title }
          <input type="button" value="x" />
      </div>      
    </div>
    
  );
}

export default TodoItem;
