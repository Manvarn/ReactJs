import jewelleryData from "../api/Jewellery_D.json"
import Myproduct from "./Myjewellery"
export const Jewellery = ()=>{
    return(
        <div>
            {
                jewelleryData.map((items)=>{return <Myproduct key={items.id} items={items}/>})
            }
        </div>
    );
}