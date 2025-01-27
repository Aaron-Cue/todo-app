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
      <li className={`tasks-list--li ${completed ? 'through' : ''}`}>
        {title}
        <input
          type="checkbox"
          onChange={handleChangeCheck}
          className="checkbox"
        />
        <img
          src={deleteImg}
          className="tasks-list--li--img"
          alt="button for delete task"
          onClick={(index) => deleteTask(index)}
        />
      </li>
      {last || <hr />}
    </>
  )
}
