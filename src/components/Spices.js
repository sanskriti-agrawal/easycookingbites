import React from 'react'
import { spices } from './Api'

const Spices = () => {
  return (
    <>
        <div className='main-spices'>
            <div className='heading2'>Common Spices</div>
            <div className='box'>
                {
                    spices.map((e)=>{
                        return(
                            <div className='box1'>
                                <img src={e.img} className="spice-img"></img>
                                <span className='spice-name'>{e.name}</span>
                                {/* <span className='spice-desc'>{e.description}</span> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Spices