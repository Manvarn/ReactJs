import {Link} from "react-router-dom"


export const NavBar = () => {
    return(
        <div className="mainDiv">
            <div className="listDiv">
                <li>
                    <Link to="/Home" style={{textDecoration:"none"}}>Home</Link></li>
                <li>
                    <Link to="/About" style={{textDecoration:"none"}}>About</Link>
                </li>
                <li>
                    <Link to="/Contact" style={{textDecoration:"none"}}>Contect</Link>
                </li>
                <li>
                    <Link to="/Products" style={{textDecoration:"none"}}>Product</Link>
                </li>
            </div>
        </div>

    )
}