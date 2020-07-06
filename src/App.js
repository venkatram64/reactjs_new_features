import React from 'react';
import logo from './logo.svg';
import './App.css';
import './generated/styles.css';
import NotesApp from './components/NotesApp';
import Header from './components/Header';
import Menu from './router/Menu';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-200">
      <BrowserRouter>
        <Menu/>
      </BrowserRouter>
    </div>
  );
}

export default App;
