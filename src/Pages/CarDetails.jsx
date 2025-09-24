import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const { carId } = useParams();

  useEffect(() => {
    const getCarById = async () => {
      try {
        const response = await fetch(`http://localhost:8080/cars/${carId}`);
        const result = await response.json();
        setCar(result);
      } catch (error) {
        console.error("Failed to fetch car:", error);
      }
    };

    getCarById();
  }, [carId]);

  if (!car) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading car details...</p>
      </div>
    );
  }

  // Build image URL using brand & model
  const imageUrl = `https://source.unsplash.com/featured/600x400/?car,${car.brand},${car.model}`;

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden md:flex">
        
        <div className="md:w-1/2">
          <img
            src={imageUrl}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {car.brand} {car.model}
          </h2>

          <p className="text-gray-600 text-sm mb-4 italic">
            {car.category} • {car.fuelType}
          </p>

          <div className="space-y-2 text-gray-700 text-base">
            <p><span className="font-semibold">Year:</span> {car.year}</p>
            <p><span className="font-semibold">Daily Rate:</span> ${car.dailyRate}</p>
            <p><span className="font-semibold">Seats:</span> {car.seat}</p>
            <p>
              <span className="font-semibold">Available:</span>{" "}
              <span className={car.available ? "text-green-600" : "text-red-500"}>
                {car.available ? "Yes" : "No"}
              </span>
            </p>
          </div>

          <div className="mt-6">
            <button
              className={`${
                car.available ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
              } text-white font-semibold py-2 px-4 rounded transition`}
              disabled={!car.available}
            >
              {car.available ? "Book Now" : "Not Available"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
