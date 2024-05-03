
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = (props) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    time:new Date().toISOString()
  });
  const { todos, completeTodo, removeTodo, updateTodo } = props;

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
      time:new Date().toISOString()
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
  
        <div
      className={todo.isComplete ? 'flex justify-between items-center mx-auto my-4 mt-2 rounded-lg bg-[#302d36]  lext-lg  px-3 text-white    p-2 w-90 line-through opacity-40' : 'flex justify-between items-center mx-auto my-2 text-white  rounded-lg p-2 w-90  bg-[#302d36]  lext-lg mt-2  px-3'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='flex items-center text-24 cursor-pointer'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='mr-5 text-white'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='text-white'
        />
      </div>
    
    </div>
  
  
  )
  )

};

export default Todo;