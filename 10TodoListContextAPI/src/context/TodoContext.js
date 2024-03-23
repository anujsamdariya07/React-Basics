import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        // making the default model for properties
        {
            id: 1, 
            todo: 'Todo Message', 
            completed: false, 
        }
    ], 
    // Now we will add functionalities for the todo list, we only declare them instead of defining them
    addTodo: (todo) => {}, 
    updateTodo: (id, todo) => {}, 
    deleteTodo: (id) => {}, 
    toggleComplete: (id) => {}
})

export const useTodo = () => useContext(TodoContext)

export const TodoContextProvider = TodoContext.Provider