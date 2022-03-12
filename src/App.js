import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Card from "./Components/Card/Card";
import Filter from "./Components/Filter/Filter";
import Pagination from "./Components/Pagination/Pagination";
import Search from "./Components/Search/Search";
import NavBar from "./Components/NavBar/NavBar";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Episodes from "./Pages/Episodes";
import Locations from "./Pages/Locations";
import CardDetails from "./Components/Card/CardDetails";

function App(){
  return(
    <Router>
      <div className="App">
      <NavBar />
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<CardDetails />}></Route>
        
        <Route path='/episodes' element={<Episodes />}></Route>
        <Route path='/episodes/:id' element={<CardDetails />}></Route>
        
        <Route path='/locations' element={<Locations />}></Route>
        <Route path='/locations/:id' element={<CardDetails />}></Route>
      </Routes>
    </Router>
  )
}


const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState('')
  let [gender, setGender] = useState('')
  let [species, setSpecies] = useState('')

  let [fetchedData, setFetchedData] = useState([]);
  // destructuring the fetchedData to have access to the two parts of the response : info & results
  let { info, results } = fetchedData;
  console.log(results)

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  // Whenever the API change I re-fetch the data again -
  // ie if we change page -> setPageNumber -> pageNumber change -> api call will change too
  // -> re- fetch thanks too the useEffect

  useEffect(() => {
    // IIFE => define and directly invoke the function by adding '()'after the definition of the function
    // the formule :   (function (){})()

    (async function () {
      let data = await fetch(api)
        // convert the response to JSON
        .then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      
      <h1 className="text-center mb-4">Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filter setSpecies={setSpecies} setStatus={setStatus} setGender={setGender} setPageNumber={setPageNumber} />
          <div className="col-12 col-lg-8">
            <div className="row">
              <Card page='/' results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
