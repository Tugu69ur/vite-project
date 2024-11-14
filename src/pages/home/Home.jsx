import React from 'react'
import Banner from './Banner'
import Men_l from "./men_l"
import Women_l from "./women_l"
import Kid_l from "./kid_l"
import Explore from "./explore"
import Social from "./social"
import Product from "./product"

const Home = () => {
  return (
    <>
      <Banner />
      <div id="mens-section">
        <Men_l />
      </div>
      <div id="womens-section">
        <Women_l />
      </div>
      <div id="kids-section">
        <Kid_l />
      </div>
      <Explore/>
      <Product/>
      <Social/>
    </>
  );
};

export default Home