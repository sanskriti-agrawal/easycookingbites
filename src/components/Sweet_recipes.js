import React from "react";
import { all_recipes } from "./Api";
import time from "../components/images/hourglass.png";
import calories from "../components/images/flame.png";
import serve from "../components/images/serving-dish.png";
import Feedback from "./Feedback";

const Sweet_recipes = () => {
  return (
    <>
      <div className="main-container">
        {all_recipes
          .filter((cat) => cat.category.includes("sweet"))
          .map((e) => {
            return (
              <>
                <div className="sub-recipes">
                  <img className="image" src={e.img}></img>
                  <div className="name">{e.name}</div>

                  <div className="serving">
                    <img src={time} />
                    <span>{e.time}</span>
                    <img src={calories} />
                    <span>{e.calories}</span>
                    <img src={serve} />
                    <span>{e.serve}</span>
                  </div>

                  <div className="comb">
                    <div className="ingre2">
                      <h2>
                        <u>Ingredients</u>
                      </h2>
                      <ul>
                        <li>{e.ing1}</li> <br />
                        <li>{e.ing2}</li>
                      </ul>
                    </div>

                    <div className="making2">
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
                <Feedback/>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Sweet_recipes;
