import React from 'react';
import TodoItem from './TodoItem';
import TodosData from './TodosData';

function App() {
  const todosComponent = TodosData.map( (todo) => {
    return(
      <div>
        <TodoItem key={todo.id} todo={todo} />
      </div>
    )
  })
  return (
    <div className='todo-list'>
      {todosComponent}
    </div>
  );
}
export default App
