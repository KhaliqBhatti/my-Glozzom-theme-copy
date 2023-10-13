import React from 'react'

export default function LastSec() {
  return (
    <>
    <div className='border  text-center ' style={{paddingBottom:'200px', paddingTop:'50px'}}>
        <h1 className='fs-1'>Photo Gallery</h1>
        <p >Check Our Photos</p>

    </div>
    <div
        className="card bg-dark text-white text-center"
        style={{ height: "40vh" }}
      >
        <div className="card-img-overlay d-flex flex-column h-100 justify-content-center align-items-center">
          <h5 className="card-title fs-1  fw-bolder">
            Sign Up For Our Newsletter
          </h5>
          <p className="card-text px-5  mt-2 d-none d-md-block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            voluptates, consequatur labore placeat doloremque dignissimos
            exercitationem esse fuga laborum ex!
          </p>
          <div className='container w-50 gap-3  d-md-flex justify-content-between '>
        <input type="text" className="form-control mb-2" placeholder="Enter Your Name"/>
        <input type="text" className="form-control mb-2" placeholder="Enter Your Email"/>
        <button type="button" class="btn btn-primary">Primary</button>
        </div>
        </div>
      </div>
      <div className='contanier-fluid bg-light d-flex justify-content-center align-items-center pt-5' style={{background:'000000'}}>
    <p className='text-dark pb-4 fs-5' >Copyright 2023 @ Gllozzom</p>
      </div>
    </>
  )
}
