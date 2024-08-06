import { useState, useContext, useEffect } from "react";
import { CarsContext } from "../../context/carsContext";

import { useLocation, useNavigate } from "react-router-dom";
import EditDetails from "./EditDetails";
import "./CarDetails.css";

export default function CarDetails() {
  const location = useLocation();
  const pathName = location.pathname.substring(1);
  const { cars } = useContext(CarsContext);
  const currentCar = cars?.find((car) => car._id === pathName);
  const navigate = useNavigate();
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const { accessToken, setAccessToken } = useContext(CarsContext);

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);
    setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3030/jsonstore/cars/${currentCar._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      navigate("/");
    } catch (error) {
      console.error("Cars Error:", error.message);
    }
  };
  return (
    <>
      <EditDetails
        currentCar={currentCar}
        openEditDialog={openEditDialog}
        setOpenEditDialog={setOpenEditDialog}
      />
      <div className="mt-24 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto flex flex-col md:flex-row">
          {/* Icon Grid Section */}

          <div className="flex-1 mb-8 md:mb-0 md:mr-8 relative  rounded-lg p-8">
            <img src={currentCar.images} style={{ width: "100%" }} alt="img" />
            {/* Placeholder icons */}
          </div>
          {/* Text and Buttons Section */}
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 mr-1">★★★★☆</span>
              <span className="text-gray-500">4.0</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {currentCar.brand} {currentCar.model}
            </h1>
            <p className="text-gray-500 text-sm mb-4"></p>

            {accessToken && (
              <div className="flex items-center space-x-4 mb-6">
                <button
                  onClick={() => setOpenEditDialog(true)}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Delete
                </button>
                <div>
                  <button className="like-btn" onClick={handleLikeClick}>
                    {likeCount > 0 ? "❤️" : "👍 Like"}
                  </button>
                </div>
              </div>
            )}

            <div>
              <h2 className="text-lg font-semibold mb-2">Details</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Year: {currentCar.year}</li>
                <li>Price: {currentCar.price}$ </li>
                <li>Color: {currentCar.color} </li>
              </ul>
              <p className="count">
                {likeCount > 0
                  ? `${likeCount}  ${likeCount === 1 ? "like" : "likes"}`
                  : "No likes yet"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
