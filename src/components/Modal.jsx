import FormModal from './FormModal'
import '../styles/Modal.css'

export default function Modal({ handleModal, setTasks }) {
  return (
    <>
      <div className="modal">
        <FormModal handleModal={handleModal} setTasks={setTasks} />
      </div>
    </>
  )
}
