import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// interface todoType{
//     id:number,
//     title:string
// }
export interface TodoState {
 todo:string[]
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
        return item!==action.payload
    })
    
   }
  },
})

export const { addTodo, deleteTodo} = TodoSlice.actions

export default TodoSlice.reducer