import React, { useReducer, useEffect } from 'react';
import notesReducer from './../reducers/notes';
import MyNotesContext from './../context/notes-context';
import MyNoteList from './MyNotList';
import MyNoteForm from './MyNoteForm';

export default function MyNotesApp(){

      const [notes, dispatch] = useReducer(notesReducer, []);

      useEffect(() =>{
            const notes = JSON.parse(localStorage.getItem('NOTES'));
            if(notes){
                  dispatch({
                        type:'FETCH_NOTES',
                        notes: notes
                  });
            }
      }, []);

      useEffect(() =>{
            localStorage.setItem("NOTES", JSON.stringify(notes));
      }, [notes]);

      return(
            <div className="px-20">
                  <MyNotesContext.Provider value = {{notes, dispatch}}>
                        <MyNoteList />
                        <MyNoteForm />
                  </MyNotesContext.Provider>
            </div>
      )
}