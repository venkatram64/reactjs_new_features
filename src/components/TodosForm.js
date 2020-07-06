import React, { useContext, useEffect, useState } from 'react';
import { TodosContext } from '../context/todos-context';
import axios from 'axios';
import { uuid } from 'uuidv4';

export default function TodosForm() {

     const [todo, setTodo] = useState("");
     const{state:{currentTodo = {}}, dispatch} = useContext(TodosContext);

     useEffect(() =>{
          if(currentTodo.text){
               setTodo(currentTodo.text);
          }else{
               setTodo("");
          }
     }, [currentTodo.id]); //will be called only when currentTod will have the id value

     const handleSubmit= async (e) =>{
          e.preventDefault();
          if(currentTodo.text){
               const response = await axios.patch(`http://localhost:8080/todos/${currentTodo.id}`,{
                    text: todo
               });
               dispatch({type: "UPDATE_TODO", payload: response.data});
          }else{
               const response = await axios.post(`http://localhost:8080/todos`,{
                    id: uuid(),
                    text: todo,
                    complete: false
               });
               dispatch({type: "ADD_TODO", payload: response.data});
          }
          setTodo("");
     }

     return(
          <div>
               <form onSubmit={handleSubmit} className="flex justify-center p-5">
                    <input placeholder="Todo"
                         className="borde-black border-solid border-2"
                         type="text"
                         onChange={e=>setTodo(e.target.value)}
                         value={todo}
                         />
               </form>
          </div>
     )
}