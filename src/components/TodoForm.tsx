'use client'

import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'

interface TodoFormProps {
  onAddTodo: (text: string) => void
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAddTodo(text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="添加新的待办事项..."
          className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          <FiPlus className="mr-1 h-4 w-4" />
          添加
        </button>
      </div>
    </form>
  )
} 