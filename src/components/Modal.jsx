import FormModal from './FormModal'
import '../styles/Modal.css'

export default function Modal({ handleModal, edit, id }) {
  return (
    <>
      <div className="modal">
        <FormModal handleModal={handleModal} edit={edit} id={id} />
      </div>
    </>
  )
}
