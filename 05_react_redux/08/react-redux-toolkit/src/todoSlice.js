import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('/api/todos');
  const todos = await response.json();
  return todos;
});

const loadTodosFromLocalStorage= () => {
  const todos = localStorage.getItem('todos');
  return todos? JSON.parse(todos) : [];
}

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}
 
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: loadTodosFromLocalStorage(),
    status: 'idle',
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
      saveTodosToLocalStorage(state.items);
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((todo, index) => index !== action.payload);
      saveTodosToLocalStorage(state.items);
    },
    toggleTodo : (state, action) => {
      const todo = state.items[action.payload];
      if(todo) {
        todo.completed = !todo.completed;
        saveTodosToLocalStorage(state.items);
      } 
    },
    setTodos : (state, action) => {
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addTodo, removeTodo, toggleTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;