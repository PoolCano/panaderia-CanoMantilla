import { NavLink } from "react-router-dom";
import CartWidget from "./cartWidget";

const Navbar = () => {
    return(

        <nav style={{padding: '1px'}}>
        <div>
            <NavLink to='/'>Panaderia Peruana</NavLink>
        </div>
        <ul>
            <li>
                <NavLink to='/category/panes'>Panes</NavLink>
            </li>
            <li>
                <NavLink to='/category/tortas'>Tortas</NavLink>
            </li>
            <li>
                <NavLink to='cart'><CartWidget /></NavLink>
            </li>
        </ul>
        
        </nav>
        
    )
}

export default Navbar;