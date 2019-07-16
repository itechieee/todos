import React from 'react';

function TodoForm(props) {

  function handleSubmit() {
    console.log('form submittt');
  }
  return (
      <form onSubmit={handleSubmit}>
        <label> Name: <input type="text" name="name" /> </label>
        <input type="submit" value="Submit" />
      </form>
  );
}

export default TodoForm;
