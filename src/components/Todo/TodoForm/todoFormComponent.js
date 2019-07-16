import React from 'react';

function TodoForm(props) {

  function handleSubmit(e) {
    e.preventDefault();    
    if(document.getElementById('todo').value === '') {
        document.getElementById('todoError').value = 'Should not be empty';
    } else {
        console.log(document.getElementById('todo').value);
        document.getElementById('todo').value = '';
        document.getElementById('todoError').innerText = '';
    }
  }
  return (
      <form onSubmit={handleSubmit}>
        <label> Name: <input id="todo" type="text" name="name" /> </label>
        <input type="submit" value="Submit" />
        <span id="todoError"></span>
      </form>
  );
}

export default TodoForm;
