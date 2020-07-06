import React, { useContext } from 'react';
import MyNotesContext from '../context/notes-context';
import MyNote from './MyNote';

export default function MyNoteList() {
     const {notes} = useContext(MyNotesContext);

     return(
          <div>
               {notes.map((note,i) =>(
                    <MyNote key={i}
                              note={note}/>
               ))}
          </div>
     )
}