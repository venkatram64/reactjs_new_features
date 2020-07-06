import React, {useState, useEffect} from 'react';
import NoteForm from './NoteForm';
import Note from './Note';


export default function NotesApp(props) {

      const [notes, setNotes] = useState([]);

      useEffect(() =>{
            const notesFromStore = JSON.parse(localStorage.getItem("NOTES"));
            setNotes(notesFromStore || []);
      }, []);//similar to the componentDidMount

      useEffect(() =>{
            localStorage.setItem("NOTES", JSON.stringify(notes));
      }, [notes]);//similiar to componentDidUpdate

      const onHandleSubmit = (title, body) =>{
            setNotes([
                  ...notes,
                  {
                        title,
                        body
                  }
            ]);
      }

      const remove = (title) =>{
            setNotes(notes.filter(note => note.title !== title));
      }

      return(
            <div className="container">
                  <h1>Notes</h1>
                  {notes.map((note,i) => (
                        <Note key={i}
                              note={note}
                              remove={remove} />
                  ))}
                  <NoteForm onHandleSubmit={onHandleSubmit}/>
            </div>
      )
          
}