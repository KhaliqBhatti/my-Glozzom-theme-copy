import React from "react";


export default function IconsCards(props) {
  return (
    <>
      <div className="card pt-4 h-100 rounded shadow align-items-center">
        <img
          src={props.img1}
          className="card-img-top"
          alt="card-img-top "
          style={{width:'50px', height:'50px'}}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text lh-normal fs-5 fw-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, maxime.
          </p>
          
        </div>
      </div>
    </>
  );
}
