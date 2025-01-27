
import Button from './Button'

export default function Header({ handleModal }) {
  return (
    <>
      <h1>TodoApp</h1>
      <Button handleModal={handleModal} />
    </>
  )
}
