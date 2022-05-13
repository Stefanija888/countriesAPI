import './App.css';
import { useEffect, useState } from 'react';
import DataFetching from './components/dataFetching';
import Header from './components/Header';
import FilterFetching from './components/Filter';

function App() {
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([]);
  const regionList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [searchInput, setSearchInput] = useState('');
  const [selectInput, setSelectInput] = useState('');


  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
}
  const handleChangeSelect = (e) => {
    setSelectInput(e.target.value);
}
useEffect(() => {
  const result = items.filter(
      item =>
      (!searchInput || item.name.common.toLowerCase().includes(searchInput.toLowerCase())) &&
      (!selectInput || item.region === selectInput)
  );
  setFilteredItems(result);
  console.log(result);
  },[searchInput, items, selectInput]);


  return (
    <div className="App">
      <Header />
      <div className="app_body">

        <div className="inputs">

          <div className={"search_input"}>
            <input type="text" placeholder='Search for a country...'  onChange={handleChangeInput}/>


          </div>

          <div className={"select_region"}>
            <select name='select' id='select' onChange={handleChangeSelect}>
            <option value="">All</option>
            <option> Oceania </option>
            <option>Smaller Than Lithuania</option>
                      
            </select>
          </div>

        </div>

      </div>

      <DataFetching />
      <FilterFetching/>
      

    </div >
  );
}

export default App;

