import { Link } from "react-router-dom";

export default function CarsListItem({
  _id,
  brand,
  color,
  model,
  price,
  year,
  images,
}) {
  return (
    <>
      <div key={_id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            alt="carsImg"
            src={images}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0" />
              {}
            </h3>
            {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
          </div>
          {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
        </div>
      </div>
    </>
  );
}
