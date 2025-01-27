import { useState } from "react"

export default function FormModal({ handleModal, setTasks }) {
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [deadline, setDeadline] = useState(null)

  const handleChangeTitle = (newValue) => {
    setTitle(newValue)
  }

  const handleChangeDesc = (newValue) => {
    setDescription(newValue)
  }

  const handleChangeDeadline = (newValue) => {
    setDeadline(newValue)
  }

  console.log(title, description, deadline)

  const handleAddTask = () => {
    handleModal()

    const newTask = { title, description, deadline }

    setTasks(prevTasks => [...prevTasks, newTask])
  }

  return (
    <>
      <form action="POST">
        <h2>
          <i>Add new task</i>
        </h2>
        <label>
          Title
          <input
            type="text"
            name="title"
            onChange={(e) => handleChangeTitle(e.target.value)}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            name="description"
            onChange={(e) => handleChangeDesc(e.target.value)}
          />
        </label>
        <label>
          Deadline
          <input
            type="date"
            name="deadline"
            onChange={(e) => handleChangeDeadline(e.target.value)}
          />
        </label>
        <div className="form-buttons">
          <button type="submit" onClick={handleAddTask}>
            Add
          </button>
          <button className="btn-cancel" onClick={handleModal}>
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}
