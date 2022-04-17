import React from "react";
import recipes from './Api';
import timeicon from '../components/images/hourglass.png';
import serveicon from '../components/images/serving-dish.png';
import caloriesicon from '../components/images/flame.png';

const Recipe = (e) => {
  return (
    <>
      <div className="top-recipes">
        <span className="heading1">Our Top Recipes..</span>
        {
          recipes.map((e)=>{
            return(
              <>
                <div className="recipe1">
                  <img src={e.img} className="recipe-image"/>
                  <span className="recipe-number">{e.id}</span>
                  <span className="recipe-name">{e.name}</span>
                  <div className="recipe-desc">{e.description}</div>
                </div>
                
                <div className="details">

                  <div className="time-icon"><img src={timeicon} className="icon1"></img>
                  <span className="recipe-time">{e.time}</span></div>

                  <div className="time-icon"> <img src={caloriesicon} className='icon2'></img>
                  <span className="recipe-calories">{e.calories}</span></div>

                  <div className="time-icon"> <img src={serveicon} className='icon3'></img>
                  <span className="recipe-serve">{e.serve}</span></div>

                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
};

export default Recipe;
