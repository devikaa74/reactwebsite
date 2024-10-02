import React from 'react';
import Card from 'react-bootstrap/Card';
import imgR2 from './assets/imgr2.png';
import imgR3 from './assets/imgr3.png';
import imgR4 from './assets/imgr4.png';
import imgR5 from './assets/imgr5.png';

const Products = () => {
  return (
    <div>
      <div className="my-5">
        <h3 className='text-center'>Our Best Sellers*</h3>
        <div className="row mt-5 g-4"> {/* Add gap between cards with g-4 */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card style={{ width: '100%' }}> {/* Set width to 100% to take full space */}
              <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} variant="top" src={imgR2} />
              <Card.Body>
                <Card.Text>
                  <h4>Calvin Klein</h4>
                  <p style={{color:'red'}}><span className='fw-bolder'>$43.20</span> with code</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card style={{ width: '100%' }}>
              <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} variant="top" src={imgR3} />
              <Card.Body>
                <Card.Text>
                  <h4>MayBelline</h4>
                  <p style={{color:'red'}}><span className='fw-bolder'>$43.20</span> with code</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card style={{ width: '100%' }}>
              <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} variant="top" src={imgR4} />
              <Card.Body>
                <Card.Text>
                  <h4>LanCome</h4>
                  <p style={{color:'red'}}><span className='fw-bolder'>$43.20</span> with code</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card style={{ width: '100%' }}>
              <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} variant="top" src={imgR5} />
              <Card.Body>
                <Card.Text>
                  <h4>PureShadows</h4>
                  <p style={{color:'red'}}><span className='fw-bolder'>$43.20</span> with code</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
