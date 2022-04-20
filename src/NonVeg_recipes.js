import React from 'react'
import { nonveg_recipe } from './components/Api';

const NonVeg_recipes = () => {
  return (
    <>
      <div className="main-container">
        {nonveg_recipe.map((e) => {
          return (
            <>
              <div className="sub-recipes2">
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
                    <span>{e.make4}</span> <br/>
                    <br/>
                    <span>{e.make5}</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default NonVeg_recipes