import { NavLink } from "react-router-dom"

export const Card = ({values}) => {
    return(
        <div className="Card">
        <h1>{values.title}</h1>
        <img src={values.image} width="100" />
        <p>price: ${values.price}</p>
        <NavLink to={`/Products/${values.id}`} state={{GetProducts:values}}>
        <button className="tap-btn">Tap To Open</button>
        </NavLink>


        </div>
    )
}