import { useContext, useRef } from "react"
import { TaskContext } from '../context/taskContext'

export default function FormModal({ handleModal, edit, id }) {
  
  const { tasks, dispatch } = useContext(TaskContext)

  const titleRef = useRef()
  const descriptionRef = useRef()
  const deadlineRef = useRef()
  const priorityRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()  

    dispatch({
      type: 'ADD',
      payload: {
        id: crypto.randomUUID(),
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        deadline: deadlineRef.current.value,
        priority: priorityRef.current.value
      }
     })
    
    handleModal()
  }

  const handleEdit = (e, id) => {
    e.preventDefault()

    dispatch({
      type: 'EDIT',
      payload: {
        id: id,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        deadline: deadlineRef.current.value,
        priority: priorityRef.current.value
      }
    })

    handleModal()
  }

  return (
    <>
      <form
        action="POST"
        onSubmit={e => {
          e.preventDefault()
          if (edit) {
            handleEdit(e, id)
          } else {
            handleSubmit(e)
          }
        }}
      >
        <h2>
          <i>{edit ? 'Edit task' : 'Add new task'}</i>
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
          <button type="submit">{edit ? 'Edit' : 'Add'}</button>
          <button className="btn-cancel" onClick={handleModal}>
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}
