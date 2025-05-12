import { useContext, useState } from 'react'
import deleteImg from '../assets/delete.svg'
import editImg from '../assets/edit.svg'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { TaskContext } from '../context/taskContext'
import Modal from './Modal'

export default function Task({
  title,
  description,
  deadline,
  priority,
  last,
  id
}) {
  const { tasks, dispatch } = useContext(TaskContext)

  const [completed, dispatchCompleted] = useLocalStorage(
    `task-${id}-completed`,
    (state, action) => {
      if (action.type === 'TOGGLE') {
        return !state
      } else {
        throw new Error('unknow action type')
      }
    },
    false
  )

  const handleChangeCheck = () => {
    dispatchCompleted({
      type: 'TOGGLE'
    })
  }

  const [viewEditModal, setViewEditModal] = useState(false)

  const handleViewEditModal = () => {
    setViewEditModal(!viewEditModal)
  }

  return (
    <>
      {viewEditModal && (
        <Modal handleModal={handleViewEditModal} edit id={id} />
      )}

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
            <div>
              <img
                src={editImg}
                className="tasks-list--li--img"
                alt="button for edit task"
                onClick={() => setViewEditModal(!viewEditModal)}
              />
              <img
                src={deleteImg}
                className="tasks-list--li--img"
                alt="button for delete task"
                onClick={() =>
                  dispatch({
                    type: 'DELETE',
                    payload: {
                      id: id
                    }
                  })
                }
              />
            </div>
          </li>
        </div>

        {last || <hr />}
      </article>
    </>
  )
}
