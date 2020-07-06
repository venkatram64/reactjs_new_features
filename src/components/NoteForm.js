import React,{useState} from 'react';


export default function NoteForm(props){

     const[title, setTitle] = useState('');
     const[body, setBody] = useState('');

     const onHandleSubmit = (e) =>{
          e.preventDefault();
          props.onHandleSubmit(title, body);
          setTitle('');
          setBody('');
     }

     return(
          <div className="w-full max-w-xs">
               <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onHandleSubmit}>
                    <input className="hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                         value={title}
                         placeholder="Title"
                         onChange={(e) => setTitle(e.target.value)}
                         />
                    <textarea className="hadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         value={body}
                         placeholder="Body"
                         onChange={(e)=>setBody(e.target.value)}
                         />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
               </form>
          </div>
     )
}