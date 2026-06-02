import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('')

  const navigate = useNavigate()

  const addNote = (event) => {
    event.preventDefault()
    createNote({
      content: newNote,
      important: true
    })

    setNewNote('')
    navigate('/notes')
  }

  return (
    <div>
      <h2>Create a new note</h2>

      <form onSubmit={addNote}>
        <TextField
          label="note content"
          value={newNote}
          onChange={event => setNewNote(event.target.value)}
        />
        <div>
          <Button type="submit" variant="contained" style={{marginTop: 10}}>
            save
          </Button>
        </div>
      </form>
    </div>
  )
}

export default NoteForm