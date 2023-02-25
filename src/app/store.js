import { configureStore, createSlice } from "@reduxjs/toolkit";

const Tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "description 1",
    isDone: true,
  },
  {
    id: 2,
    title: "Task 2",
    description: "description 2",
    isDone: true,
  }
];
const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
const todoSlice = createSlice({
  name: "todos",
  initialState: tasks,
  reducers: {
    addTodo: (state, action) => {
      localStorage.setItem("tasks", JSON.stringify([...state, action.payload]));
      return state = [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      const newTasks = state.filter((el) => el.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    },
    updateTodo: (state, action) => { // caré de validation
      const newTasks = state.map((el) => {
        if (el.id === action.payload) {
          return { ...el, isDone: !el.isDone }; // si true twli falsze ; si false twli true
        }
        return el;
      });
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    },
    EditTask: (state, action) => { // editeTask
      const { id, title, description } = action.payload; // title description t3 notre cst
      const newTasks = state.map((el) => {
        if (el.id === id) { // 3la li klikite 3lih edit
          return { ...el, title, description }; // returni nouveaux titl+Desc
        }
        return el;
      });
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, EditTask } = todoSlice.actions;
export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
