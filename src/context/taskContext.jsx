import { createContext } from 'react'
import { taskReducer } from '../state/taskReducer'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useLocalStorage('tasks', taskReducer, [])

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}


