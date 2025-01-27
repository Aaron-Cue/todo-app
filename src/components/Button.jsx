import '../styles/Button.css'

export default function Button({ handleModal }) {
  return (
    <button id="btn-add" onClick={handleModal}>
      Add Task
    </button>
  )
}
