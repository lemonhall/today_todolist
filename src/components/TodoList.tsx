'use client'

import { Todo } from '@/app/page'
import { FiCheck, FiTrash } from 'react-icons/fi'
import { cn } from '@/lib/utils'

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="mt-8 text-center text-muted-foreground">
        今天还没有待办事项，添加一些吧！
      </div>
    )
  }

  return (
    <ul className="mt-6 space-y-2">
      {todos.map(todo => (
        <li
          key={todo.id}
          className="group flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggle(todo.id)}
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-full border transition-colors",
                todo.completed
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted-foreground"
              )}
            >
              {todo.completed && <FiCheck className="h-3 w-3" />}
            </button>
            <span
              className={cn(
                "text-sm transition-colors",
                todo.completed && "text-muted-foreground line-through"
              )}
            >
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => onDelete(todo.id)}
            className="invisible text-muted-foreground transition-colors hover:text-destructive group-hover:visible"
          >
            <FiTrash className="h-4 w-4" />
            <span className="sr-only">删除</span>
          </button>
        </li>
      ))}
    </ul>
  )
} 