import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("");
    const {getTotalCartAmount} =useContext(StoreContext);

    return (
        <div className='navbar'>
          <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>  
            <ul className='navbar-menu'>
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
                <a href='#explore-menu'  onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
                <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
                <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
            </ul>
            <div className='navbar-right'>
                <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
                <div className="navbar-search-icon">
                    <Link to='/cart'><a href=""><i class="fa-solid fa-bag-shopping"></i></a></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign in</button>
            </div>


        </div>
    )
}

export default Navbar