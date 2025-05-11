import { useRef } from "react"

export default function FormModal({ handleModal, setTasks }) {

  const titleRef = useRef()
  const descriptionRef = useRef()
  const deadlineRef = useRef()
  const priorityRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()  

    const title = titleRef.current.value
    const description = descriptionRef.current.value
    const deadline = deadlineRef.current.value
    const priority = priorityRef.current.value

    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      deadline,
      priority
    }

    setTasks(prevTasks => [...prevTasks, newTask])
    
    handleModal()
  }

  return (
    <>
      <form action="POST" onSubmit={e => handleSubmit(e)}>
        <h2>
          <i>Add new task</i>
        </h2>
        <label>
          Title
          <input ref={titleRef} required type="text" name="title" />
        </label>
        <label>
          Description
          <input ref={descriptionRef} type="text" required name="description" />
        </label>
        <label>
          Deadline
          <input ref={deadlineRef} required type="date" name="deadline" />
        </label>
        <label>
          Priority
          <select ref={priorityRef} required name="priority">
            <option value="L">Low</option>
            <option value="M">Medium</option>
            <option value="H">High</option>
          </select>
        </label>
        <div className="form-buttons">
          <button type="submit">Add</button>
          <button className="btn-cancel" onClick={handleModal}>
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}
