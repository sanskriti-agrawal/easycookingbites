import React from 'react'
import './style.css';
import Navbar from './Navbar';
import veg from '../components/images/salad.png';
import nonveg from '../components/images/chicken-leg.png';
import snack from '../components/images/nachos.png';
import sweet from '../components/images/cupcake.png';
import Recipe from './Recipe';
import Spices from './Spices';
import recipes from './Api';

// import { FaSearch } from "react-icons/fa";

const Main_Page = () => {

  return (
    <div className='app'>
     <Navbar/>

      <div className='search'>
        <input type='text' placeholder='Search Your Recipes' className='search' ></input>
      </div>

      <div className='select-food'>
        <button className='button'><img src={veg} className="food-cat"/></button>
        <button className='button'><img src={nonveg} className="food-cat"/></button>
        <button className='button'><img src={snack} className="food-cat"/></button>
        <button className='button'><img src={sweet} className="food-cat"/></button>
      </div>

      <Recipe/>
      <Spices/>

    </div>
  )
}

export default Main_Page;