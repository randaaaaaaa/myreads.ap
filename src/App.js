import "./App.css";

import { useEffect, useState } from "react";
//importing all the to pages components here so i can pass state and props to them  and to make the main routes in app.js 
import SearchPage from "./components/SearchPage";
import MainList from "./components/MainList";
//importing the router libariry from react router 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//importing the main method that fetch data from the api
import { getAll, update, search} from "./BooksAPI";



function App() {
  //defind a state to hold the get all res from the api then i will send it to main page as a state and used useeffect hook to reder once the page rander or rerender
  const [books, setbooks] = useState([]);
  useEffect(() => {
    getAll()
    .then((data) => setbooks(data))
    // setmapofidbook(creatMapofbooks(data))
  } ,[]);
  // https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/
  //https://dev.to/saaage/how-to-write-a-search-component-with-suggestions-in-react-d20
  //using the usestate here to to hold the input the user write in the search bar 
 const [query, setquery] = useState('');
 const handelInputChange =  (searchValue) => {

  setquery(searchValue)
// console.log("query", query)


 } 


 const [newbooks, setnewbooks] = useState([]);

// const [isLoaded, setisLoaded] = useState(false);
//  calling the search method with the stat of the query of the user and heandling the error
useEffect(() => {
  if(query) {
    search(query, 20).then(res=>{
      if(res && !res.error){ 
              // mapping the books comming from the search and assining it's id to the same id and shelf of the book from the main page 
              const combined = res.map(searchbook=>{
                books.forEach((book)=>{
                  if(searchbook.id === book.id) searchbook.shelf =book.shelf
                  
                })
                return searchbook;   
              })
              
               setnewbooks(combined)
              //  setisloaded(true)
               }else{
                setnewbooks([])
                // setisloaded(false)
             
              }

    })
  }
  else {
     setnewbooks([])
  }

}
, [query,books])

// using the update method from to update the book in the wright shelf and putting this in a state
const changeShelf = async (book,shelf)=>{
  await update(book, shelf);
  await getAll().then((res)=> {
    setbooks(res)
  });

}

  return (
    //created 2 routes fror the 2 pages to make sure we can from one to the other followed the react router documentation
    //https://reactrouter.com/en/v6.3.0/getting-started/installation  
    <Router>
    <div className="app">
    <Routes>
     <Route path='/search' element={<SearchPage book ={books} handelInputChange={handelInputChange} newbooks= {newbooks} changeShelf = {changeShelf} query={query} />} />
     <Route path='/' element={<MainList book={books} update={update} changeShelf = {changeShelf} />   } />
   </Routes>
   
   </div>
   </Router>
    
      )}
    

export default App;
