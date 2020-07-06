import React, { useContext } from 'react';
import { TodosContext } from '../context/todos-context';
import axios from 'axios';

export default function TodosList() {
     const {state, dispatch} = useContext(TodosContext);
     const title = state.todos.length > 0 ? `${state.todos.length} Todos` : "Nothing to do";

     const onHandleDblClick = async (todo) => {
          const response = await axios.patch(`http://localhost:8080/todos/${todo.id}`,{
               complete: !todo.complete
          });
          dispatch({
               type: 'TOGGLE_TODO',
               payload: response.data
          })
     }

     const onSetTodo = async (todo) =>{
          dispatch({
               type: 'SET_CURRENT_TODO',
               payload: todo
          });
     }

     const onRemoveTodo = async(todo) => {
          await axios.delete(`http://localhost:8080/todos/${todo.id}`);
          dispatch({
               type:'REMOVE_TODO',
               payload: todo
          });
     }

     return (
          <div className="container mx-auto max-w-md text-center font-mono">
               <h1 className="text-bold">{title}</h1>
               <ul className="list-reset text-dark">
                    {state.todos.map(todo =>(
                         <li key={todo.id} className="flex items-center bg-orange-400 border-black border-dashed border-2 my-2 py-4">
                              <span 
                                   onDoubleClick={() => onHandleDblClick(todo)}
                                   className={`flex-1 ml-12 cursor-pointer ${todo.complete && 
                                        "line-through text-grey-400"}`}
                                   >
                                        {todo.text}
                              </span>
                              <button onClick={()=>onSetTodo(todo)}>
                                   <img className="h-6" src="https://icon.now.sh/edit/0050c5" alt="Edit Icon"/>
                              </button>
                              <button onClick={() => {onRemoveTodo(todo)}}>
                                   <img className="h-6" src="https://icon.now.sh/delete/8b000" alt="Delete Icon"/>
                              </button>
                         </li>
                    ))}                    
               </ul>
          </div>
     )
}