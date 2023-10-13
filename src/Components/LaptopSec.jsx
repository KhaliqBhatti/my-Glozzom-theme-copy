import React from "react";
import LaptopImg from "../Images/laptop.png";

export default function LaptopSec() {
  return (
    <div className="container-fluid px-0 ">
      <div className="card container d-flex border-0 pt-5 pb-5 justify-content-center align-items-center">
        <div className="row g-4  d-flex flex-wrap flex-md-row ">
          <div className="col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center">
            <div className="card-body">
              <h5 className="card-title fs-2 mb-3">Lorem Ipsum</h5>
              <p className="card-text mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium beatae eaque quos eligendi, laboriosam. Culpa
                consequuntur illum facere id molestias.
              </p>
              <button type="button" className="btn btn-outline-danger fs-5">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6">
            <img src={LaptopImg} className="img-fluid w-100 h-100" alt="" />
          </div>
        </div>
      </div>

      <div
        className="card bg-img2 text-white text-center "
        style={{ height: "30vh" }}
      >
        <div className="card-img-overlay d-flex flex-column h-100 justify-content-center align-items-center">
          <i className="fa-solid fa-play" style={{ fontSize: "60px" }}></i>
          <h5 className="card-title fs-1 fw-bolder mt-3">See What We Do</h5>
        </div>
      </div>
    </div>
  );
}
