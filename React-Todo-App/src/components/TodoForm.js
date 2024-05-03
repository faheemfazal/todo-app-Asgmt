import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      time:new Date().toISOString()

    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='mb mt-2'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='px-16 py-14 border-2 border-solid border-purple-600 rounded-l outline-none w-320 bg-transparent text-white edit'
          />
          <button onClick={handleSubmit} className='px-16 py-16 border-0 rounded-r cursor-pointer outline-none bg-gradient-to-r from-purple-700 to-purple-900 text-white capitalize edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='px-4 py-2 border-2 w-9/12 border-solid border-purple-600 rounded-l outline-none w-320 bg-transparent text-white'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='px-4 py-2 w-3/12 border-0 rounded-r cursor-pointer outline-none bg-gradient-to-r from-purple-700 to-purple-900 text-white capitalize'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
