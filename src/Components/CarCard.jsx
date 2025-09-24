import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        src="https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg"
        alt="Car Image"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          {car.brand} {car.model}
        </h2>
        <p className="text-gray-700">
          <strong>Daily Rate:</strong> ${car.dailyRate}
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            to={`/cardetails/${car.carId}`}
          >
            View Details
          </Link>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded hover:from-purple-600 hover:to-pink-600 transition">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
