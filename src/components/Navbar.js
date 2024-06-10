											// ॥ श्री गणेशाय नमः ॥ 

import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png"
import { useSelector } from "react-redux";

function Navbar(){

    const { cart } = useSelector((state) => state);

    return(
        <nav className="flex justify-between h-20 items-center max-w-6xl mx-auto">
            <NavLink to="/">
                <div className="ml-5"> 
                    <img src={logo} alt="logo" loading="lazy" className="h-14"/>
                </div>
            </NavLink>
            <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                <NavLink to="/">
                    <p>Home</p>
                </NavLink>
                <NavLink to="/cart">
                    <div className="relative">
                        <FaShoppingCart className="text-2xl"/>
                        {
                            cart.length > 0 &&
                            <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                            {cart.length}</span>
                        }
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}


export default Navbar;