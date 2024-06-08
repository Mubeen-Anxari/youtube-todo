import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
 export interface todoType{
    id:string,
    title:string
}
export interface TodoState {
 todo:todoType[]
}

const initialState: TodoState = {
    todo: []
}

export const TodoSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
   addTodo:(state,action)=>{
    state.todo=[...state.todo,action.payload]
   },
   deleteTodo:(state,action)=>{
    state.todo=state.todo.filter((item)=>{
        return item.id!==action.payload
    })
    
   }
  },
})

export const { addTodo, deleteTodo} = TodoSlice.actions

export default TodoSlice.reducer