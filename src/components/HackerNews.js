import React,{useState, useRef, useEffect} from 'react';

import axios from 'axios';

export default function HackerNews(){

     const [results, setResults] = useState([]);
     const [query, setQuery] = useState(['react hooks']);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);
     const searchInputRef = useRef();

     useEffect(() =>{
          fetchData();
     }, []);

     const onSubmit = (e) => {
          e.preventDefault();
          fetchData();
     }

     const fetchData = async () =>{
          setLoading(true);
          try{
               const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
               setResults(response.data.hits);
          }catch(error){
               setError(error);
          }
          setLoading(false);
     }

     const handleClearSearch = () =>{
          setQuery("");
          searchInputRef.current.focus();
     }

     return(
          <div className="container max-auto">
               <img src="https://icon.now.sh/react/c0c" alt="React Logo" className="float-right h-12"/>
               <h1 className="text-grey-darkest font-thin">ReactJS Hooks News</h1>

               <form className="mb-2" onSubmit={onSubmit}>
                    <input className="border p-1 rounded"
                         type="text"
                         onChange={e => setQuery(e.target.value)}
                         value={query}
                         ref={searchInputRef}
                         placeholder="Search"/>

                    <button className="bg-orange-400 rounded m-1 p-1" 
                         type="submit">Search</button>
                    <button onClick={handleClearSearch} 
                         className="bg-teal-400 text-dark rounded p-1" 
                         type="button">Clear</button>
               </form>
               {loading ? (
                    <p className="font-bold text-orange-dark">Loading...</p>
               ):(
                    <ul className="list-reset leading-normal">
                         {results.map(result => (
                              <li key={result.objectID}>
                                   <a className="text-indigo-dark hover: text-indigo-darket"
                                        href={result.url}>{result.title}</a>
                              </li>
                         ))}
                    </ul>
               )}
               {error && <div className="text-red font-bold">{error.nessage}</div>}
          </div>
     )
}