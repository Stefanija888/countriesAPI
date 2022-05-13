import React, { useEffect, useState} from "react"
import axios from "axios"


function DataFetching() {
    const [countries,setCountries] = useState([]);

    useEffect(()=> {
        axios.get('https://restcountries.com/v2/all?fields=name,region,area')
        .then(res =>{
            console.log(res);
            setCountries(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[]);


    return (
        <div>
    
                {
                    countries.map(countries => 
                    <div className="countries_data"> 
                    <ul className="list">
                      <li><h3>{countries.name}</h3> </li>  
                       <li >Region: {countries.region}</li> 
                       <li >Area: {countries.area}</li> 
                     </ul>
                    </div>)
                }
           


        </div>
    )
}

export default DataFetching