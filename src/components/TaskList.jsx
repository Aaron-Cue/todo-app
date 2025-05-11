import Task from './Task'
import '../styles/TaskList.css'
import Modal from './Modal'

export default function TaskList({
  viewModal,
  handleModal,
  tasks,
  setTasks,
  priorityCategory
}) {

  // filtrar segun prioridad
  const tasksFiltered = tasks.filter(task => {
    if (priorityCategory === 'ALL') return true
    return task.priority === priorityCategory
  })

  return (
    <>
      {viewModal && <Modal handleModal={handleModal} setTasks={setTasks} />}
      <div className="tasks-list">
        <ul className="tasks-list--ul">
          {tasksFiltered.map(
            ({ title, description, deadline, priority }, i) => (
              <Task
                key={i}
                index={i}
                title={title}
                description={description}
                deadline={deadline}
                priority={priority}
                last={i === tasks.length - 1}
                setTasks={setTasks}
              />
            )
          )}
        </ul>
      </div>
    </>
  )
}
