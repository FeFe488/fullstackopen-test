import { useState, useEffect } from 'react'
import noteService from './services/notes'

import {
  BrowserRouter as Router,
  Routes, Route, Link,
  useMatch,
  useNavigate
} from 'react-router-dom'
import NoteList from './components/NoteList'
import Home from './components/Home'
import Footer from './components/Footer'
import NoteForm from './components/NoteForm'
import Note from './components/Note'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import { AppBar,Toolbar,Button, Container } from '@mui/material'



const App = () => {
  const [notes, setNotes] = useState([])
  const [message, setMessage] = useState(null)
  const [username, setUsername]=useState('')
  const [password, setPassword]=useState('')
  const [user, setUser]=useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    noteService.getAll().then(initialNotes => {
      setNotes(initialNotes)
    })
  }, [])

  const addNote = noteObject => {
    noteService.create(noteObject).then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setMessage({ text: `Note '${returnedNote.content}' added!`, type: 'success' })
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    })
  }

  const padding = {
    padding: 5
  }

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)

    const changedNote = {
      ...note,
      important: !note.important
    }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note =>
          note.id !== id ? note : returnedNote
        ))
      })
  }

  const deleteNote = (id) => {
    noteService.remove(id).then(() => {
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  const match = useMatch('/notes/:id')
  
  const note = match
    ? notes.find( note => note.id === match.params.id)
  : null

  
//   useEffect(() => {
//       const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
//       if (loggedUserJSON) {
//         const user = JSON.parse(loggedUserJSON)
//         setUser(user)
//         noteService.setToken(user.token)
//       }
//     }, [])
//  }

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({ username, password })

      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))
      noteService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      navigate('/home')
      }
      catch {
      // setErrorMessage('wrong credentials')
      // setTimeout(() => {
        // setErrorMessage(null)
      // }, 5000)
     }
  }
   
  

  const handleLogout = ()=>{
    window.localStorage.removeItem('loggedBlogappUser')
    noteService.setToken(null)
    setUser(null)
    navigate('/login')
  }
  
  const style = { '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }

  
  return (

    <>
      <Container>
        
        {user??
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/" sx={style}>
              home
            </Button>
            <Button color="inherit" component={Link} to="/notes" sx={style}>
              notes
            </Button>
            <Button color="inherit" component={Link} to="/create" sx={style}>
              new note
            </Button>
          </Toolbar>
        </AppBar>
        }
        
      

  
      <Notification message={message}/>

      <Routes>
        
        <Route path="/notes/:id" element={
          <Note
            note={note}
            toggleImportanceOf={toggleImportanceOf}
            deleteNote={deleteNote}
          />
          }/>
        
        <Route path="/notes" element={
          <NoteList notes={notes}
          
           />
        } />
        
        <Route path="/create" element={
          <NoteForm createNote={addNote}/>
        } />

        <Route path="/" element={<Home />} />
  
      

      
        
        <Route path='/login' element={
          <LoginForm
            handleSubmit={handleLogin}
            handleUsernameChange={e=>setUsername(e.target.value)}
            handlePasswordChange={e=>setPassword(e.target.value)}
            username={username}
            password= {password}          
          />
        } />
      </Routes>
      <button onClick={handleLogout}>logout</button>
      <Footer />
    </Container>
    </>
  )
}

export default App