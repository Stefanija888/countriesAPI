import React, { useEffect, useState} from "react"
import axios from "axios"


function FilterFetching() {
    
  
  
  const [region,setRegion] = useState([]);

    useEffect(()=> {
        axios.get('https://restcountries.com/v2/all?fields=region')
        .then(res =>{
            console.log(res);
            setRegion(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    },[]);


    return (
        <div>
    
                {
                    region.map(region => 
                    <div className="countries_data"> 
                    <ul className="list">
                      <li>{region.region}</li>  
                        
                     </ul>
                    </div>)
                }
           


        </div>
    )
}

export default FilterFetching;