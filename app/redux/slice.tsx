import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface todoType {
  id: string;
  title: string;
}
export interface TodoState {
  todo: todoType[];
}

const initialState: TodoState = {
  todo: [],
};

export const TodoSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((item) => {
        return item.id !== action.payload;
      });
    },
    updatetodo: (state, action) => {
      const currentState = current(state);
      const updatetodo=currentState.todo.map((item)=>{
        if (item.id===action.payload.id) {
          return{
            id:action.payload.id,
            title:action.payload.id
          }
        }
        return item;
      })
    },
  },
});

export const { addTodo, deleteTodo , updatetodo} = TodoSlice.actions;

export default TodoSlice.reducer;
