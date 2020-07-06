import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import NotesApp from '../components/NotesApp';
import MyNotesApp from '../components/MyNotesApp';
import Home from '../components/Home';
import Header from '../components/Header';
import HackerNews from '../components/HackerNews';
import TodosApp from '../components/TodosApp';


export default function Menu(){
     return(
          <div>
               <Header/>
               <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/todos" component={TodosApp}/>
                    <Route path="/hackernews" component={HackerNews}/>
                    <Route path="/note" component={NotesApp}/>
                    <Route path="/mynote" component={MyNotesApp}/>
               </Switch>
          </div>
     )
}