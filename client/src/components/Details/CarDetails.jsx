import { CarsContext } from "../../context/carsContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

import "./CarDetails.css";

export default function CarDetails() {
  const location = useLocation();
  const pathName = location.pathname.substring(1);
  const { cars } = useContext(CarsContext);
  const currentCar = cars?.find((car) => car._id === pathName);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300"
        rel="stylesheet"
        type="text/css"
      />
      <div className="wrapper">
        <div className="col-1-2">
          <div className="product-wrap">
            <div className="product-shot">
              <img src={currentCar.images} alt="imageUrl" />
            </div>
          </div>
        </div>
        <div className="col-1-2">
          <div className="product-info">
            <h2>{currentCar.brand}</h2>
            <div className="desc">
              <li>Color: {currentCar.color}</li>
              <li>Year: {currentCar.year}</li>
              <li>Model: {currentCar.model}</li>
              <li>Price: {currentCar.price}</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
