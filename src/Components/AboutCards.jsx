import React from "react";
import IconsCards from "./IconsCards";
import Gear from "../Images/gear-solid.svg";
import Cloud from "../Images/cloud-solid.svg";
import Cart from "../Images/cart-plus-solid.svg";

export default function AboutCards() {
  return (
    <>
      <div className="container m-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 pt-5 pb-5 px-0 pr-0">
        <div className="mb-4">
          <IconsCards title="Turning Gear" img1={Gear} />
        </div>
        <div className="mb-4">
          <IconsCards title="Sending Data" img1={Cloud} />
        </div>
        <div className="mb-4">
          <IconsCards title="Making Money" img1={Cart} />
        </div>
      </div>

      <div
        className="card  bg-img text-white text-center"
        style={{ height: "30vh" }}
      >
        <div className="card-img-overlay d-flex flex-column h-100 justify-content-center align-items-center">
          <h5 className="card-title fs-1  fw-bolder">
            Are You Ready To Get Started?
          </h5>
          <p className="card-text px-5  mt-2 d-none d-md-block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            voluptates, consequatur labore placeat doloremque dignissimos
            exercitationem esse fuga laborum ex!
          </p>
        </div>
      </div>
    </>
  );
}
