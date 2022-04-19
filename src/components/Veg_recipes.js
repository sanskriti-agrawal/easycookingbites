import React from 'react'
import { vegrecipes } from './Api';
import './style.css';

const Veg_recipes = () => {
  return (
    <>
        <div className='main-container'>
            {
                vegrecipes.map((e)=>{
                    return(
                        <>
                            <div className='sub-recipes'>
                                <div className='name'>{e.name}</div>
                                <img className='image' src={e.img}></img>

                                <div className='ingre'>
                                    <ul>
                                        <li>{e.ing1}</li> <br/>
                                        <li>{e.ing2}</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default Veg_recipes