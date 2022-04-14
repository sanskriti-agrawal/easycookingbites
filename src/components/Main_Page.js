import React from 'react'
import './style.css';
import image from '../components/images/image.jpg';
import veg from '../components/images/salad.png';
import nonveg from '../components/images/chicken-leg.png';
import snack from '../components/images/nachos.png';
import sweet from '../components/images/cupcake.png';
import logo from '../components/images/logo.png';
import { FaSearch } from "react-icons/fa";
import Recipe from './Recipe';

const Main_Page = () => {
  return (
    <div className='app'>
      <div className='navbar'>

        <img src={logo} className="logo" />


        <ul className='link1'>
          <li>Home</li>
          <li>All recipes</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul> 

        <ul className='link2'>
          <li>LogIn</li>
          <li>Sign Up</li>
        </ul> 
      </div>

      <div>
        <img src={image} style={{
          width:'100%',
          height: '500px'
        }} />
      </div>

      <div className='search'>
        <input type='text' placeholder='Search Your Recipes' className='search' ></input>
      </div>

      <div className='select-food'>
        <img src={veg} className="food-cat"/>
        <img src={nonveg} className="food-cat"/>
        <img src={snack} className="food-cat"/>
        <img src={sweet} className="food-cat"/>
      </div>

      <Recipe/>

    </div>
  )
}

export default Main_Page;