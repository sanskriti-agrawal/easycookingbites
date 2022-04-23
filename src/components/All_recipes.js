import React from "react";
import "./style.css";
import Carousel from "react-bootstrap/Carousel";
import Veg_recipes from './Veg_recipes';
import NonVeg_recipes from './NonVeg_recipes';
import Snacks_recipes from './Snacks_recipes';
import Sweet_recipes from './Sweet_recipes';

const All_recipes = () => {
  return (
    <>
      <div className="all-container">
        <div className="first-image">
          <img src="assets/browmies.jpg" className="grid-image"></img>
          <img src="assets/ff.jpg" className="grid-image"></img>
          <img src="assets/kp.jpg" className="grid-image"></img>
        </div>

        <div className="second-image">
          <img src="assets/soyac.jpg" className="grid2-image"></img>
          <img src="assets/cupcake.jpg" className="grid2-image"></img>
        </div>

        <div className="carousel2">
          <Carousel fade>
            <Carousel.Item interval={200}>
              <img className="c2-image" src="assets/pbm.jpg" alt="First slide" />
              <Carousel.Caption>
                <h3 className="carousel2-heading">Paneer Butter Masala</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={200}>
              <img
                className="c2-image"
                src="assets/chillic.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 className="carousel2-heading">Chilli Chicken</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={200}>
              <img className="c2-image" src="assets/rk.jpg" alt="Third slide" />

              <Carousel.Caption>
                <h3 className="carousel2-heading">Reshmi Kabab</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={200}>
              <img className="c2-image" src="assets/cc.jpg" alt="Third slide" />

              <Carousel.Caption>
                <h3 className="carousel2-heading">Chocolate Cake</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        
        <h1>Enjoy Your Favourite Food!</h1>
        <div className="allrecipe-container">
          <Veg_recipes/>
          <NonVeg_recipes/>
          <Snacks_recipes/>
          <Sweet_recipes/>
        </div>
      </div>
    </>
  );
};

export default All_recipes;
