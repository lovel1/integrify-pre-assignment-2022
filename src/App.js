import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { filterData } from './utils/filterData';
import HomeScreen from './screens/HomeScreen';
import Search from './components/Search';
import BreweryScreen from './screens/BreweryScreen';

function App() {

  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    axios.get('https://api.openbrewerydb.org/breweries')
      .then(res => setBreweries(res.data))
      .catch(err => console.error(err))
  }, [])


  return (
    <BrowserRouter>
      <div className='bg-slate-100 text-slate-900 min-h-screen'>
        <Routes>
          <Route path="/" element={<HomeScreen breweries={breweries}/>} exact />
          <Route path="/:id" element={<BreweryScreen breweries={breweries}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
