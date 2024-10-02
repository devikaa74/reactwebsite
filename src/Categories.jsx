import React from 'react';
import imgB1 from './assets/imgB1.jpeg';
import imgB2 from './assets/imgB2.jpeg';
import imgB3 from './assets/imgB3.jpg';
import imgB4 from './assets/imgB4.jpeg';
import imgB5 from './assets/imgB5.jpeg';
import imgB6 from './assets/imgB6.jpeg';
import imgB7 from './assets/imgB7.jpeg';
import imgB8 from './assets/imgB8.jpg';

const Categories = () => {
  return (
    <div className="container mt-5">
      <h3 className="">Our Products</h3>
      <div className="row">
        {/* Card 1 */}
        <div className="col-12 col-md-3 mb-4">
          <div className="p-3 border bg-light card-container">
            <img className="grid-image" src={imgB1} alt="" />
            <h4 className='text-dark'>PInk Glow</h4>
            <p className='fw-bolder text-success'>$20.00</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-3 mb-4">
          <div className="p-3 border bg-light card-container">
            <img className="grid-image" src={imgB2} alt="" />
            <h4 className='text-dark'>Ruby Red</h4>
            <p className='fw-bolder text-success'>$10.20</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-3 mb-4">
          <div className="p-3 border bg-light card-container">
            <img className="grid-image" src={imgB3} alt="" />
            <h4 className='text-dark'>Pinkish Red</h4>
            <p className='fw-bolder text-success'>$20.30</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-12 col-md-3 mb-4">
          <div className="p-3 border bg-light card-container">
            <img className="grid-image" src={imgB4} alt="" />
            <h4 className='text-dark'>Red/Violet/Peach-Combo</h4>
            <p className='fw-bolder text-success'>$200.01</p>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Card 5 */}
        <div className="col-12 col-md-3 mb-4">
          <div className="p-3 border bg-light card-container">
            <img className="grid-image" src={imgB5} alt="" />
            <h4 className='text-dark'>Peach Glow</h4>
            <p className='fw-bolder text-success'>$20.50</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-12 col-md-3 mb-4">
          <div className="p-3 border bg-light card-container">
            <img className="grid-image" src={imgB6} alt="" />
            <h4 className='text-dark'>Purple Glow</h4>
            <p className='fw-bolder text-success'>$50.04</p>
          </div>
        </div>

        {/* Card 7 */}
        <div className="col-12 col-md-3 mb-4">
          <div className="p-3 border bg-light card-container">
            <img className="grid-image" src={imgB7} alt="" />
            <h4 className='text-dark'>Darks-Violet</h4>
            <p className='fw-bolder text-success'>$100.23</p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="col-12 col-md-3 mb-4">
          <div className="p-3 border bg-light card-container">
            <img className="grid-image" src={imgB8} alt="" />
            <h4 className='text-dark'>Dark red/Purple-Combo</h4>
            <p className='fw-bolder text-success'>$200.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
