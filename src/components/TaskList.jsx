import Task from './Task'
import '../styles/TaskList.css'
import { useState } from 'react'
import Modal from './Modal'

export default function TaskList({ viewModal, handleModal }) {
  const [tasks, setTasks] = useState([])

  return (
    <>
      {viewModal && <Modal handleModal={handleModal} setTasks={setTasks} />}
      <div className="tasks-list">
        <ul className="tasks-list--ul">
          {tasks.map(({ title, description, deadline }, i) => (
            <Task
              key={title}
              index={i}
              title={title}
              description={description}
              deadline={deadline}
              last={i === tasks.length - 1}
              setTasks={setTasks}
            />
          ))}
        </ul>
      </div>
    </>
  )
}
