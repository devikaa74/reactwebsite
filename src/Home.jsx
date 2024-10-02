import React from 'react';
import rImg1 from './assets/imgr1.png';

const Home = () => {
  return (
    <div className="container-fluid hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Image on the left on medium and larger screens */}
          <div className="col-md-6 text-center order-md-1">
            <img style={{}} src={rImg1} className="img-fluid" alt="Happy person with a dog" />
          </div>
          {/* Text on the right on medium and larger screens */}
          <div className="col-md-6 text-center text-md-start order-md-2">
            <h1 className="text-dark">WE Sale World's TOP <br /> 
              <span className='fw-bolder' style={{color:'red'}}>LIPSTICKS!</span> 
            </h1>
            <p>Add a touch of romance to your everyday look with our exquisite lipsticks, carefully crafted to make you feel like a queen.!
            Experience the art of elegance with our luxurious lipsticks, designed to make a statement
            </p>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a href="#" className="btn btn-warning rounded me-2">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
