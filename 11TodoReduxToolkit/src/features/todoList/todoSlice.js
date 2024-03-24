import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo', 
    initialState, 
    // Inside reducers unlike Context API here we also need to define the functionalities instead of only declaring them
    reducers: {
        // We will always get access of two variables - state and action
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload, 
            }
            state.todos.push(todo)
        }, 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }, 
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => (todo.id === action.payload.id)? action.payload.text : todo)
        }, 
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer