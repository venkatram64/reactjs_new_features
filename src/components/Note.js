import React from 'react';

export default function Note({i, note, remove}) {

     const onRemove = (title) => {
          remove(title);
     }

     return (
          <div key={i}>
               <span>{note.title}</span>
               <span>{note.body}</span>
               <button onClick={() => onRemove(note.title)}>X</button>
          </div>
     )
}