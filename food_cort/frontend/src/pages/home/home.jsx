import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header'
import Expolermenu from '../../components/exploremenu/Expolermenu'
const Home = () => {
    const [category,setcategory]=useState("All")
  return (
    <div>
      <Header/>
      <Expolermenu category={category} setcategory={setcategory}/>
    </div>
  )
}

export default Home
