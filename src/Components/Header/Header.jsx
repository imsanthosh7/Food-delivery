import React from 'react'
import './Header.css'


const Header = () => {
  return (
   
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food hear</h2>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tempora. Voluptatum et ea incidunt non recusandae veritatis iusto, suscipit provident!</p> */}
          
          <a href="#food-disply"><button>View Menu</button></a>
        </div>
       
    </div>
    
  )
}

export default Header