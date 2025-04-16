'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    const today = new Date()
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    }
    setDate(today.toLocaleDateString('zh-CN', options))
  }, [])

  return (
    <header className="py-4">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">今日待办</h1>
      <p className="mt-1 text-sm text-muted-foreground">{date}</p>
    </header>
  )
} 