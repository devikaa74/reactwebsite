import React from 'react';
import imgA1 from './assets/imga1.jpg';

const Accessories = () => {
  return (
    <div className="container-fluid rounded custom-homepage mt-5 bg-dark py-5">
      <div className="row d-flex text-center align-items-center">
        {/* Left side: Text and buttons */}
        <div className="col-md-6 mt-2 text-md-start text-center text-white">
          <h1><span style={{color:'red'}}>THE LIPSTICK</span> THAT WILL <br /> MAKE YOU FALL<span style={{color:'red'}}> IN LOVE</span></h1>
          <p className='mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Distinctio molestiae reprehenderit reiciendis, <br /> maxime laudantium eius nesciunt quidem eveniet ipsa quisquam cumque,<br /> vitae aut veritatis expedita numquam! Doloribus id facilis harum? !
          </p>
          {/* <div className="d-flex justify-content-center justify-content-md-start gap-2">
            <a className="btn btn-outline-warning rounded-pill" href="">View More</a>
            <a className="btn btn-outline-warning rounded-pill bg-dark text-white" href="">Explore Now</a>
          </div> */}
        </div>

        {/* Right side: Image */}
        <div className="col-md-6">
          <img src={imgA1} alt="Accessory" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
};

export default Accessories;
