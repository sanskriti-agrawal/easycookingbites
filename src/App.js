import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Veg_recipes from './components/Veg_recipes';
import Main_Page from './components/Main_Page';
import NonVeg_recipes from './components/NonVeg_recipes';
import Sweet_recipes from './components/Sweet_recipes';
import Snacks_recipes from './components/Snacks_recipes';
import All_recipes from './components/All_recipes';
import Blog from './components/Blog';

function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main_Page/>}/>
          <Route path='/all-recipe' element={<All_recipes/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          {/* <Route path='/contact' element={<Contact/>}></Route> */}
          <Route path='/veg-recipes' element={<Veg_recipes/>}></Route>
          <Route path='/nonveg-recipes' element={<NonVeg_recipes/>}></Route>
          <Route path='/snacks-recipes' element={<Snacks_recipes/>}></Route>
          <Route path='/sweet-recipes' element={<Sweet_recipes/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App