import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './context'
import { TodoForm, TodoItem } from './components/'

function App() {
  // Todo useState to store Todos as well as update in UI
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    // setTodos(todo) --> this will delete all the previous values of todos list
    if(todo === '') return (<h2>Please enter a task</h2>)
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...todos])
  }

  // We will use setTodos callback and use map in it which will trace every element of todos, then compare it's id with the id provided as parameter, if they match then use the todo prvided as parameter, and if they don't then keep its value as it is
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
    // This will filter the todos and keep only those todos whose id does not match the id passed as parameter
  }

  const toggleComplete = (id) => {
    // console.log(id)
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  // We useEffect() as we want to first fetch all the previously made todos after we open the website
  useEffect(() => {
    const todos2 = JSON.parse(localStorage.getItem('todos'))

    if (todos2 && todos2.length > 0) {
      setTodos(todos2)
    }
  }, [])
  // useEffect(() => {
  //   const storedTodos = localStorage.getItem('todos');

  //   if (storedTodos) {
  //     try {
  //       const parsedTodos = JSON.parse(storedTodos);

  //       if (Array.isArray(parsedTodos)) {
  //         setTodos(parsedTodos);
  //       } else {
  //         console.error('Invalid todos data in local storage.');
  //       }
  //     } catch (error) {
  //       console.error('Error parsing todos data from local storage:', error);
  //     }
  //   }
  // }, []);


  // We want to add any new todo made to the localstorage, but if we use the above useEffect then we would be loading the previously made todos again so we use another useEffect with todos as its dependency
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContextProvider value={{ todos, addTodo, updateTodo, toggleComplete, deleteTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
