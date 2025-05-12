import FormModal from './FormModal'
import '../styles/Modal.css'

export default function Modal({ handleModal }) {
  return (
    <>
      <div className="modal">
        <FormModal handleModal={handleModal} />
      </div>
    </>
  )
}
