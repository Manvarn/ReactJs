import productData from "../api/Product.json"
import Myproduct  from "./Myproduct"
export const Product = ()=>{
    return(
        <div>
            {
                productData.map((items)=> <Myproduct key={items.id} items={items} />)
                // productData.map((items)=>{return  <Myproduct key={items.id} items={items} />})
            }
        </div>
    )
}

// export default           


    