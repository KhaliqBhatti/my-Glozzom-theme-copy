import React from "react";
import FirsImg from "../Images/image1.jpg";
import SecondImg from "../Images/image2.jpg";
import ThirdImg from "../Images/image3.jpg";

export default function SliderSec1() {
  return (
    <>
      
        <div
          id="carouselWithIndicators"
          className="carousel slide w-100"
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselWithIndicators"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li
              data-bs-target="#carouselWithIndicators"
              data-bs-slide-to="1"
            ></li>
            <li
              data-bs-target="#carouselWithIndicators"
              data-bs-slide-to="2"
            ></li>
          </ol>
          <div
            className="carousel-inner   "
            style={{ width: "100%", height: "80vh" }}
          >
            <div
              className="carousel-item active  border-primary "
              style={{ width: "99vw", height: "70%" ,position:'relative'}}
            >
              <div
                className="carousel-caption    d-sm-block text-end align-items-center"
                style={{ position:'absolute',top:'30%',left:'15%',transform:'translate(-50%,-50%),',width:'70%',height:'70%'}}
              >
                <h1 className="fw-normal ">First Heading</h1>
                <h6 className="fw-light  fs-6 lh-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt perferendis nobis fugit quos aspernatur voluptatem
                  sunt mollitia, nihil! Ducimus, aliquam.
                </h6>
                <button type="button" className="btn btn-danger mt-3">
                  Sign Up Now
                </button>
              </div>
              <img src={FirsImg} className="d-block " alt="Slide 1" />
            </div>
            <div
              className="carousel-item "
              style={{ width: "99vw", height: "70%" }}
            >
              <div className="carousel-caption   d-sm-block text-center align-items-center ">
                <h1 className="fw-normal">Second Heading</h1>
                <h6 className="fw-light mt-3 lh-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt perferendis nobis fugit quos aspernatur voluptatem
                  sunt mollitia, nihil! Ducimus, aliquam.
                </h6>
                <button type="button" className="btn  btn-primary mt-3">
                  Learn More
                </button>
              </div>
              <img src={SecondImg} className="d-block  " alt="Slide 2" />
            </div>
            <div
              className="carousel-item  "
              style={{ width: "100vw", height: "70%" }}
            >
              <div className="carousel-caption d-sm-block  text-end align-items-center">
                <h1 className="fw-normal " style={{ fontSize: "55px" }}>
                  Third Heading
                </h1>
                <h6 className="fw-light fs-5 mt-3  lh-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt perferendis nobis fugit quos aspernatur voluptatem
                  sunt mollitia, nihil! Ducimus, aliquam.
                </h6>
                <button type="button" className="btn btn-success mt-3">
                  Learn More
                </button>
              </div>
              <img src={ThirdImg} className="d-block " alt="Slide 3" />
            </div>
          </div>
          <p
            className="carousel-control-prev"
            href="#carouselWithIndicators"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </p>
          <p
            className="carousel-control-next"
            href="#carouselWithIndicators"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </p>
        </div>
      
    </>
  );
}
