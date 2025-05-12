import './App.css'
import Filter from './components/Filter'
import Header from './components/Header'
import TaskList from './components/TaskList'
import { useState } from 'react'
import { TaskProvider } from './context/taskContext'

function App() {
  const [viewModal, setViewModal] = useState(false)

  const handleModal = () => {
    setViewModal(!viewModal)
  }

  const [priorityCategory, setPriorityCategory] = useState('ALL')

  return (
    <TaskProvider>
      <div className="container">
        <Header handleModal={handleModal} />
        <Filter setPriorityCategory={setPriorityCategory} />
        <TaskList
          viewModal={viewModal}
          handleModal={handleModal}
          priorityCategory={priorityCategory}
        />
      </div>
    </TaskProvider>
  )
}

export default App
