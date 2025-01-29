import { useState } from 'react'
import deleteImg from '../assets/delete.svg'

export default function Task({
  title,
  description,
  deadline,
  last,
  setTasks,
  index
}) {
  const [completed, setCompleted] = useState(false)

  const handleChangeCheck = () => {
    setCompleted(!completed)
  }

  const deleteTask = (index) => {
    setTasks((tasks) => {
      const updatedTasks = [...tasks]
      updatedTasks.splice(index, 1)
      return updatedTasks
    })
  }

  return (
    <>
      <div className="deadline">{deadline}</div>
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
          onClick={() => deleteTask(index)}
        />
      </li>

      {last || <hr />}
    </>
  )
}
