import React from 'react';

const TodoItem = ({todo}) => {
  return (
    <div className='todo-item'>
      <p>
        <input type='checkbox' checked={todo.completed}/>
        <span>{todo.text}</span>
      </p>
    </div>
  );
};

export default TodoItem;
