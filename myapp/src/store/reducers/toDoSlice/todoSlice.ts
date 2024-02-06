import { createSlice } from "@reduxjs/toolkit";
import { IToDoItem } from "../../../models/user.model";
import { addTodoList } from "../auth/extra-actions";
import { PayloadAction } from "@reduxjs/toolkit";
import { getTodoList } from "../auth/extra-actions";
import { deleteTodoList } from "../auth/extra-actions";
import { editTodoList } from "../auth/extra-actions";

interface IInitialState{
    list:IToDoItem[],
    loader:boolean
}

const initialState:IInitialState = {
    list: [],
    loader: false
}

const toDoSlice = createSlice({
    name:"toDoSlice",
    initialState,
    reducers:{
        
    },
    extraReducers(builder) {
        builder.addCase(addTodoList.pending, (state) =>{
            state.loader = true
        })
        builder.addCase(addTodoList.fulfilled, (state, action:PayloadAction<IToDoItem[]> ) =>{
            state.loader = false
            console.log(action)
        })
        builder.addCase(getTodoList.pending, (state) =>{
            state.loader = true
        })
        builder.addCase(getTodoList.fulfilled, (state, action:PayloadAction<IToDoItem[]> ) =>{
            state.loader = false
            state.list = action.payload
        })
        builder.addCase(deleteTodoList.pending, (state) =>{
            state.loader = true
        })
        builder.addCase(deleteTodoList.fulfilled, (state, action:PayloadAction<IToDoItem[]> ) =>{
            state.loader = false
            state.list = action.payload
        })
        builder.addCase(editTodoList.pending, (state) =>{
            state.loader = true
        })
        builder.addCase(editTodoList.fulfilled, (state, action:PayloadAction<IToDoItem[]> ) =>{
            state.loader = false
            state.list = action.payload
        })
    },
    
    
})

export default toDoSlice.reducer