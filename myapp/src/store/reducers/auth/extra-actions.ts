import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { IToDoItem } from "../../../models/user.model";

export const addTodoList = createAsyncThunk(
    "toDoSlice/addTodoList",
    async (data:IToDoItem) => {
        const result = await axios.post(`https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d/toDolistM`, data);
        return result.data;
    }
);

export const getTodoList = createAsyncThunk(
    "toDoSlice/getTodoList",
    async () => {
        const result = await axios.get(`https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d/toDolistM`);
        return result.data;
    }
);

export const deleteTodoList = createAsyncThunk(
    "toDoSlice/deleteTodoList",
    async (todoId) => {
        const result = await axios.delete(`https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d/toDolistM/${todoId}`);
        return result.data;
    }
);

export const editTodoList = createAsyncThunk(
    "toDoSlice/editTodoList",
    async () => {
        const result = await axios.put(`https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d/toDolistM`);
        return result.data;
    }
);

