'use client'

import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoList from '@/components/TodoList'
import TodoForm from '@/components/TodoForm'
import Header from '@/components/Header'

export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos)
        setTodos(parsedTodos.map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        })))
      } catch (error) {
        console.error('Error parsing todos', error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      createdAt: new Date()
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <main className="container mx-auto max-w-md p-4">
      <Header />
      <TodoForm onAddTodo={addTodo} />
      <TodoList 
        todos={todos} 
        onToggle={toggleTodo} 
        onDelete={deleteTodo} 
      />
    </main>
  )
} 