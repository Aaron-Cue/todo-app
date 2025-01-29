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
    <div className='container'>
      <Header handleModal={handleModal} />
      <TaskList viewModal={viewModal} handleModal={handleModal} />
    </div>
  )
}

export default App
