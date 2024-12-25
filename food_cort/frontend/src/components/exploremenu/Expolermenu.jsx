import React from 'react'
import './explore.css'
import {menu_list} from '../../assets/assets'
const Expolermenu = ({category,setcategory}) => {
  return (
    <div className='Expolermenu' id='Expolermenu'>
        <h1>explore our menu</h1>
        <p className='explore-text'>choose from a divers menu featurning a delectable array dishes crafted with the finest ingredients and culinary expretise.</p>
<div className="explore-list">
    {menu_list.map((item,index)=>{
        return(
           <div onClick={()=>setcategory(prev=>prev===item.menu_name?"all":item.menu_name)} key={index} className='explore-menu-list-item'>
            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
           </div>
        )
    })    }
</div>
      <hr />
    </div>
  )
}

export default Expolermenu
