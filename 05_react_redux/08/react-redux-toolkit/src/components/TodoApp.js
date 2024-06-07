import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, fetchTodos } from '../todoSlice';

const TodoApp = () => {
  const { items: todos, status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState('');


  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (text.trim()) {
        dispatch(addTodo({
          text,
        }));
        setText(''); // 입력 후 input 초기화
      }
  };

  status === 'loading' && console.log('Loading ...'); 
  status === 'failed' && console.log('Error :', error); 
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;