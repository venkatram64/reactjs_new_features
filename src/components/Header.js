import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
     return(
          <header className="flex items-center justify-around bg-gray-900 text-gray-300 hover:text-white">
             
               <Link to="/">Home</Link>
               <Link to="/todos">Todos</Link>
               <Link to="/hackernews">Hacker News</Link>
               <Link to="/note">Notes</Link>
               <Link to="/mynote">MyNotes</Link>
          </header>
          // <div className="container">
          //      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          //           <Link className="navbar-brand" to="/">
          //                Home
          //           </Link>
          //           <button
          //           className="navbar-toggler"
          //           type="button"
          //           data-toggle="collapse"
          //           data-target="#navbarNav"
          //           aria-controls="navbarNav"
          //           aria-expanded="false"
          //           aria-label="Toggle navigation"
          //           >
          //                <span className="navbar-toggler-icon" />
          //           </button>
          //           <div className="collapse navbar-collapse" id="navbarNav">
          //           <ul className="navbar-nav">
                         
          //                <li className="nav-item">
          //                     <Link className="nav-link" to="/note">
          //                          Notes
          //                     </Link>
          //                </li>
          //                <li className="nav-item">
          //                     <Link className="nav-link" to="/mynote">
          //                          MyNotes
          //                     </Link>
          //                </li>
          //           </ul>
          //           </div>
          //      </nav>
          // </div>
          // <div>
          //      <Link to="/">Home</Link>
          //      <Link to="/note">Notes</Link>
          //      <Link to="/mynote">MyNotes</Link>
          // </div>
     )
}