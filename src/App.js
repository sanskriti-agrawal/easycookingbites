import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Veg_recipes from './components/Veg_recipes';
import Main_Page from './components/Main_Page';

function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main_Page/>}/>
          <Route path='/veg-recipes' element={<Veg_recipes/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App