import React, { useState, useEffect } from 'react';
import Note from './Note'
import Phonebook from './Phonebook'
import noteService from '../services/notes'
import Notification from './Notification'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNotes, setNewNote] = useState('a new note')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const hook = () => {
    console.log('effect')
    noteService
    .getAll()
    .then(initialNotes => {
      setNotes(initialNotes)
      console.log('response--', initialNotes);
    })
  }
  useEffect(hook, [])

  console.log('render', notes.length, 'notes');

  const addNote = (event) => {
    event.preventDefault()
    console.log('Button clicked', event.target);

    const noteObject = { 
      content: newNotes,
      date: new Date().toLocaleString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changeNote = {...note, important: !note.important}

    noteService
      .update(id, changeNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          'Note `${note.content}` was already removed from server'
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note, i) => 
          <Note 
            key={i} 
            note={note} 
            toggleImportant={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
          <input value={newNotes} onChange={handleNoteChange}/>
          <button type="submit">save</button>
      </form>
      <Phonebook />
    </div>
  )
}

export default App