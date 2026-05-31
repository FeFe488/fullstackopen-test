import { useParams } from 'react-router-dom'

const Note = ({ notes, toggleImportance }) => {

  const id = useParams().id
  const note = notes.find(n => n.id === id)

  const label = note.important ? 'make not important' : 'make important'

  return (
    <li className="note">
      <span>{note.content}</span>
      <button onClick={() => toggleImportance(id)}>{label}</button>
    </li>
  )
}

export default Note
