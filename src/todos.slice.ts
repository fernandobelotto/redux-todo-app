import { createSlice } from "@reduxjs/toolkit";

type Todos = {
  id: string;
  completed: boolean;
  text: string;
};

const initialState: Todos[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload;
      state.push({ id, text, completed: false });
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      console.log(todo);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo(state, action) {
      const { id, text } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
