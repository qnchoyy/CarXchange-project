import { useEffect, useState, useContext } from "react";
import CarsListItem from "./CarsList";
import { CarsContext } from "../../context/carsContext";
import { Link } from "react-router-dom";

export default function Cars() {
  const { cars, setCars, carsFilterValue } = useContext(CarsContext);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3030/jsonstore/cars");
        const result = await response.json();
        const cars = Object.values(result);
        setCars(cars);
      } catch {
        console.log("Cars Error");
      }
    })();
  }, []);

  const filterdCars = cars.filter((item) =>
    item.brand.toLowerCase().includes(carsFilterValue.toLowerCase())
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {cars.length > 0 ? (
            filterdCars.map((car) => (
              <Link to={`/${car._id}`}>
                <CarsListItem key={car._id} {...car} />
              </Link>
            ))
          ) : (
            <h3 className="no-articles">No Cars yet</h3>
          )}
        </div>
      </div>
    </div>
  );
}
