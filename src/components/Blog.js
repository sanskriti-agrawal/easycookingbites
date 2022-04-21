import React from "react";
import { blog } from "./Api";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Blog = () => {
  return (
    <>
      <Navbar/>
      <div className="blog">
        <div className="margin"></div>

        <div className="parallax">
          <div className="inner">
            <h1>Best Food Blog</h1>
          </div>

          <div>
            {blog.map((e) => {
              return (
                <div className="inner2">
                  <span>{e.id}</span>
                  <h2>{e.name}</h2>
                  <p>{e.description}</p>
                  <h4>{e.link}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div className="margin"></div>
      </div>
      <Footer/>
    </>
  );
};

export default Blog;
