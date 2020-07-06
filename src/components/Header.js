import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
     
     return(
          <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
               <div className="flex-1 flex justify-between items-center">
                    <img src="https://icon.now.sh/react/c0c" alt="React Logo" />
               </div>
               <label for="menu-toggle" class="cursor-pointer lg:hidden block">
               <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
               </label>
               <input type="checkbox" className="hidden" id="menu-toggle" />
               <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                    <nav>
                         <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                              <li>
                                   <Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/">Home</Link>
                              </li>
                              <li>
                                   <Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/todos">Todos</Link>
                              </li>
                              <li>
                                   <Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/hackernews">Hacker News</Link>
                              </li>
                              <li>
                                   <Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/note">Notes</Link>
                              </li>
                              <li>
                                   <Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" to="/mynote">MyNotes</Link>
                              </li>
                         </ul>     
                    </nav>    
               </div>                 
                             
          </header>          
     )
}