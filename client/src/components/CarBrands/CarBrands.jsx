import { CarsContext } from "../../context/carsContext";
import { useContext } from "react";
export default function CarBrands() {
  const { cars, setCarsFilterValue } = useContext(CarsContext);

  const uniqueCars = cars.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.brand === item.brand)
  );
  return (
    <div className="bg-white mt-24 pb-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-center text-3xl font-semibold leading-12 text-gray-900">
          Welcome to CarXchange
        </h1>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div
            onClick={() => {
              setCarsFilterValue("");
            }}
            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/623/239/original/auto-car-logo-template-vector-icon.jpg"
                aria-hidden="true"
                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
              />
            </div>
            <div className="flex-auto">
              All Brands
              <span className="absolute inset-0" />
            </div>
          </div>
          {uniqueCars.map((item) => (
            <div
              onClick={() => {
                setCarsFilterValue(item.brand);
              }}
              key={item._id}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <img
                  src={
                    item.icon
                      ? item.icon
                      : "https://static.vecteezy.com/system/resources/previews/000/623/239/original/auto-car-logo-template-vector-icon.jpg"
                  }
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                />
              </div>
              <div className="flex-auto">
                {item.brand}
                <span className="absolute inset-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
