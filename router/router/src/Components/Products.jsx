import { useEffect, useState } from "react"
import { Card } from "./Card"


export const Products = () => {

    const [values, setValue] = useState([])

    const Api = "https://fakestoreapi.com/products"

    const fetchCards = async() => {
        try{
            const res = await fetch(Api);
            const data = await res.json();
            setValue(data);
            console.log(data);
        }catch(error){
            console.log(error) 
        }
    }
    
    useEffect(() => {
     fetchCards();
    },[])
    return(
        <>
       <h1>Fetched Card data</h1>
       <div className="products-container">
        {
            values.map((current)=>{
                return(
                    <Card  
                    key={current.id}
                    values={current} 
                    
                    />
                )
            })
        }
       </div>
       
        
        </>
    )
}