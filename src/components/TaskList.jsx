import Task from './Task'
import '../styles/TaskList.css'
import Modal from './Modal'
import { useContext } from 'react'
import { TaskContext } from '../context/taskContext'

export default function TaskList({
  viewModal,
  handleModal,
  priorityCategory
}) {

  const { tasks } = useContext(TaskContext)

  // filtrar segun prioridad
  const tasksFiltered = tasks.filter(task => {
    if (priorityCategory === 'ALL') return true
    return task.priority === priorityCategory
  })

  return (
    <>
      {viewModal && <Modal handleModal={handleModal} />}
      <div className="tasks-list">
        <ul className="tasks-list--ul">
          {tasksFiltered.map(
            ({ title, description, deadline, priority, id }, i) => (
              <Task
                key={i}
                id={id}
                title={title}
                description={description}
                deadline={deadline}
                priority={priority}
                last={i === tasks.length - 1}
              />
            )
          )}
        </ul>
      </div>
    </>
  )
}
