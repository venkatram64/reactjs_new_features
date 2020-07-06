import React, { useContext } from 'react';
import MyNotesContext from '../context/notes-context';


export default function MyNote({i, note}){
     const {dispatch} = useContext(MyNotesContext);

     const remove = (title) => {
          dispatch({
               type:'REMOVE_NOTE',
               note:{title}
          });
     }

     return(
          <div key={i}>
               <p>{note.title}</p>
               <p>{note.body}</p>
               <button onClick={() => remove(note.title)}>X</button>
          </div>
     )
}