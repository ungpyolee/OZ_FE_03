import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo, setTodos } from '../todoSlice';

const TodoApp = () => {
  const { items: todos, status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all')


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if(storedTodos) {
      dispatch(setTodos(storedTodos))
    }
  }, [dispatch]);

  const handleAddTodo = () => {
    if (text.trim()) {
        dispatch(addTodo({
          text,
          completed : false,
        }));
        setText(''); // 입력 후 input 초기화
      }
  };

  const handleToggleTodo = (index) =>{
    dispatch(toggleTodo(index));
  }

  const handleRemoveTodo = (index) =>{
    dispatch(removeTodo(index))
  }

  const filteredTodos = todos.filter((todo) => {
    if(filter === 'all') return true;
    if(filter === 'completed') return todo.completed;
    if(filter === 'active') return !todo.completed;
    return true;
  })
  

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
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('active')}>Active</button>
      </div>
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index} style={{textDecoration : todo.completed ? 'line-through' : 'none'}}>
            {todo.text}
            <button onClick={() => handleToggleTodo(index)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;