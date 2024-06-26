
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(todo,...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ];

  const d = new Date();
  let day = weekday[d.getDay()];
  return (
    <div className=''>
          <h1 className='text-[#7250d6] text-2xl font-semibold pt-2'>Tasks</h1>

      <h1 className=' text-white text-24 pt-2'>What's the Plan for ! {day}?</h1>


      <TodoForm onSubmit={addTodo} />
      <div className=''>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />

      </div>
    </div>
  );
}

export default TodoList;