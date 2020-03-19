import React from 'react';

const TodoItem = () => {
  return (
    <div className='todo-item'>
      <p>
        <input type='checkbox' />
        <span>Going To London</span>
      </p>
    </div>
  );
};

export default TodoItem;
