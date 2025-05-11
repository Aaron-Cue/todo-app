import './App.css'
import Filter from './components/Filter'
import Header from './components/Header'
import TaskList from './components/TaskList'
import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {

  const [viewModal, setViewModal] = useState(false)

  const handleModal = () => {
    setViewModal(!viewModal)
  }

  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [priorityCategory, setPriorityCategory] = useState('ALL')

  return (
    <div className="container">
      <Header handleModal={handleModal} />
      <Filter setPriorityCategory={setPriorityCategory} />
      <TaskList
        viewModal={viewModal}
        handleModal={handleModal}
        tasks={tasks}
        setTasks={setTasks}
        priorityCategory={priorityCategory}
      />
    </div>
  )
}

export default App
