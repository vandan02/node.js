import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-opts'>
        <NavLink to={'/add'} className="sidebar-opt">
          <img src={assets.add_icon} alt="" />
          <p>add items</p>
        </NavLink>
        <NavLink to={'/list'} className="sidebar-opt">
          <img src={assets.order_icon} alt="" />
          <p>list items</p>
        </NavLink>
        <NavLink to={'/order'} className="sidebar-opt">
          <img src={assets.order_icon} alt="" />
          <p>order</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Sidebar
