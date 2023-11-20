import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {id: 1 , title: 'todo1' , complete: false},
        {id: 2 , title: 'todo2' , complete: false},
        {id: 3 , title: 'todo3' , complete: false}
    ],
    reducers: {
        addTodo : (state , action) => {
             const   newTodo = {
                id:  Date.now(),
                title:action.payload.title,
                complete: false
                };
            state.push(newTodo);
        },
        toggleComplete : (state , action) => {
            const index = state.findIndex((todo)=> todo.id === action.payload.id);
            state[index].complete = action.payload.complete;
        },
        deleteTodo : (state , action)=> {
            return state.filter((todo)=> todo.id !== action.payload.id);
            
        },
        editTodo : (state , action)=> {
            const index = state.findIndex((todo)=> todo.id === action.payload.id);
            state[index].title = action.payload.title;
        },
    }
});
export const {addTodo , toggleComplete , deleteTodo , editTodo} =todoSlice.actions;
export default todoSlice.reducer;