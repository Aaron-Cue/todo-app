import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'
import { useState } from 'react'

function App() {

  const [viewModal, setViewModal] = useState(false)

  const handleModal = () => {
    setViewModal(!viewModal)
  }

  return (
    <>
      <Header handleModal={handleModal} />
      <TaskList viewModal={viewModal} handleModal={handleModal} />
    </>
  )
}

export default App
