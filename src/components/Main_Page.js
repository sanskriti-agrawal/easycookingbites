import React, { useState } from "react";
import "./style.css";
import image from '../components/images/image.jpg';
import veg from "../components/images/salad.png";
import nonveg from "../components/images/chicken-leg.png";
import snack from "../components/images/nachos.png";
import sweet from "../components/images/cupcake.png";
import Recipe from "./Recipe";
import Spices from "./Spices";
import Footer from "./Footer";
import { FaSearch } from "react-icons/fa";
import { all_recipes } from "./Api";
import NavbarComp from "./NavbarComp";

const Main_Page = () => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = all_recipes.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="app">
      <NavbarComp />
      <img
          src={image}
          style={{
            width:'100vw',
            height: "510px",
            objectFit:'fill'
          }}
        />
      <div className="search">
        <input
          type="text"
          placeholder="Search Your Recipes"
          className="search"
          onChange={handleFilter}
        ></input>
        <div className="serachIcon">
          <FaSearch />
        </div>

        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.map((value, key) => {
              return (
                <a className="dataItem" href="/all-recipe">
                  <p>{value.name} </p>
                </a>
              );
            })}
          </div>
        )}
      </div>

      <div className="select-food">
        <a href="/veg-recipes">
          <button className="button">
            <img src={veg} className="food-cat" />
          </button>
        </a>

        <a href="/nonveg-recipes">
          <button className="button" >
            <img src={nonveg} className="food-cat" />
          </button>
        </a>

        <a href="/snacks-recipes">
          <button className="button" >
            <img src={snack} className="food-cat" />
          </button>
        </a>

        <a href="/sweet-recipes">
          <button className="button">
            <img src={sweet} className="food-cat" />
          </button>
        </a>
      </div>

      <Recipe />
      <Spices />
      <Footer />
    </div>
  );
};

export default Main_Page;
