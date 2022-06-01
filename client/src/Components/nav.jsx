import { NavLink } from "react-router-dom";

const Nav = ()=>{
    return(
        <div>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/form'>
                Form
            </NavLink>
        </div>
    )
}
export default Nav;