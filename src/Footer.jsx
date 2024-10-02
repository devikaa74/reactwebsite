import React from 'react'


const Footer = () => {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
      <div className="d-flex justify-content-between">
        <div style={{width:'400px'}} className="intro">
          <h5 className='fw-bolder text-dark'>LIP<span className='text-warning'>STICK</span></h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ratione asperiores quisquam obcaecati nam dolorum a laborum! Repellat quasi illum atque? Quas, minus! Impedit facere ea eos iure, sunt error!</p>
          <p>Code licenced Lipstick, docs CC by 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className="d-flex flex-column">
          <h5>Links</h5>
          <a href="#" style={{textDecoration:'none', color:'white'}} target='_blank'>Home</a>
            <a href="#" style={{textDecoration:'none', color:'white'}} target='_blank'>Products</a>
            <a href="#" style={{textDecoration:'none', color:'white'}} target='_blank'>Shop</a>
            <a href="#" style={{textDecoration:'none', color:'white'}} target='_blank'>Login</a>

        </div>
        <div className="d-flex flex-column">
          <h5>Guides</h5>
            <a href="#" style={{textDecoration:'none', color:'white'}} target='_blank'>React</a>
            <a href="#" style={{textDecoration:'none', color:'white'}} target='_blank'>React Bootstrap</a>
        </div>
        <div className="d-flex flex-column">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input placeholder='Enter your email here' type="text" className='form-control' />
            <button className='btn btn-info ms-2'> <i className='fa-solid fa-arrow-right'></i> </button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-twitter'></i> </a>
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-instagram'></i> </a>
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-facebook'></i> </a>
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-linkedin'></i> </a>
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-brands fa-github'></i> </a>
        <a href="" style={{textDecoration:'none', color:'white'}} target='_blank'><i className='fa-solid fa-phone'></i> </a>


        </div>
        </div>
       
      </div>
      <p className="text-center mt-3">Copyright @copy; All world brand, Lipstick.
        </p>
    </div>
  )
}

export default Footer