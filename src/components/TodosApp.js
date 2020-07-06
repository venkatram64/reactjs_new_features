
import React, { useContext, useState, useReducer, useEffect } from 'react';
import {TodosContext} from './../context/todos-context';
import todosReducer from './../reducers/todos';
import axios from 'axios';
import TodosForm from './TodosForm';
import TodosList from './TodosList';


//custom hooks
const useAPI = endPoint =>{

     const[data, setData] = useState([]);
     useEffect(() =>{
          getData();
     }, []);

     const getData = async () => {
          const response = await axios.get(endPoint);
          setData(response.data);
     }
     return data;
}

export default function TodosApp(){

     const initState = useContext(TodosContext);
     const [state, dispatch] = useReducer(todosReducer, initState);
     const savedTodos = useAPI("http://localhost:8080/todos"); //custom hooks

     useEffect(() =>{
          dispatch({
               type: "GET_TODOS",
               payload: savedTodos
          });
     }, [savedTodos]);

     return (
          <div>
               <TodosContext.Provider value={{state, dispatch}}>
                    <TodosForm/>
                    <TodosList/>
               </TodosContext.Provider>
          </div>
     )

}