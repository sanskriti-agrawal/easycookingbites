import React from "react";
import { veg_Recipes} from "./Api";
import "./style.css";
import time from "../components/images/hourglass.png";
import calories from "../components/images/flame.png";
import serve from "../components/images/serving-dish.png";

const Veg_recipes = () => {
  return (
    <>
      <div className="main-container">
        {veg_Recipes.map((e) => {
          return (
            <>
              <div className="sub-recipes">
                <img className="image" src={e.img}></img>
                <div className="name">{e.name}</div>

                <div className="comb">
                  <div className="ingre">
                    <h2>
                      <u>Ingredients</u>
                    </h2>
                    <ul>
                      <li>{e.ing1}</li> <br />
                      <li>{e.ing2}</li>
                    </ul>
                  </div>

                  <div className="making">
                    <h2>
                      <u>Making</u>
                    </h2>
                    <span>{e.make1}</span> <br />
                    <br />
                    <span>{e.make2}</span> <br />
                    <br />
                    <span>{e.make3}</span> <br />
                    <br />
                    <span>{e.make4}</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Veg_recipes;
