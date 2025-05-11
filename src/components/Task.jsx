import { useState } from 'react'
import deleteImg from '../assets/delete.svg'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function Task({
  title,
  description,
  deadline,
  priority,
  last,
  setTasks,
  id
}) {
  console.log(id)

  const [completed, setCompleted] = useLocalStorage(
    `task-${id}-completed`,
    false
  ) 
  

  const handleChangeCheck = () => {
    setCompleted(!completed)
  }

  const deleteTask = id => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  
    setTasks(tasks => tasks.filter(task => task.id !== id))
  

  return (
    <article>
      <div className="deadline">{deadline}</div>
      <div className="tasks-list--li--container">
        <div className={`priority ${priority}-color`}>{priority}</div>
        <li className="tasks-list--li">
          <label className="label-check">
            <div className="info">
              <strong className={completed ? 'through' : ''}>{title}</strong>
              <span className={`desc ${completed ? 'through' : ''}`}>
                {description}
              </span>
            </div>
            <input
              type="checkbox"
              checked={completed}
              onChange={handleChangeCheck}
              className="checkbox"
            />
            <span className="circle-check">
              <span className="span-check"></span>
            </span>
          </label>
          <img
            src={deleteImg}
            className="tasks-list--li--img"
            alt="button for delete task"
            onClick={() => deleteTask(id)}
          />
        </li>
      </div>

      {last || <hr />}
    </article>
  )
}
