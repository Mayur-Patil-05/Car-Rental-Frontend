import React, { useEffect, useState } from "react";
import CarCard from "../Components/CarCard";

const Home = () => {
  const [car, setCar] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceFilter, setPriceFilter] = useState("All");
  const [availability, setAvailability] = useState("All");

  const url = "http://localhost:8080/cars";

  useEffect(() => {
    const getCars = async () => {
      let response = await fetch(url);
      let data = await response.json();
      setCar(data);
    };

    getCars();
  }, []);

  return (
    <div className="px-4 py-10 md:px-8 lg:px-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Find Your Perfect Ride
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Choose from our premium fleet of vehicles for your next adventure.
          From luxury sedans to rugged SUVs, we have the perfect car for every
          journey
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Search cars..."
            className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(evt) => setSearch(evt.target.value)}
          />

          <select
            className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(evt) => setCategory(evt.target.value)}
          >
            <option value="" disabled>Select Category</option>
            <option>All</option>
            <option>Luxury</option>
            <option>Sports</option>
            <option>SUV</option>
            <option>Truck</option>
            <option>Electric</option>
            <option>Economy</option>
          </select>

          <select
            className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={priceFilter}
            onChange={(evt) => setPriceFilter(evt.target.value)}
          >
            <option value="All">All prices</option>
            <option value="50">Under $50/day</option>
            <option value="100">Under $100/day</option>
            <option value="150">Under $150/day</option>
            <option value="200">Under $200/day</option>
            <option value="500">Under $500/day</option>
          </select>

          <select
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={availability}
            onChange={(evt) => setAvailability(evt.target.value)}
          >
            <option>All</option>
            <option>Available</option>
            <option>Unavailable</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
        {car
          .filter((carItem) => {
            const matchesSearch = carItem.brand
              .toLowerCase()
              .startsWith(search.toLowerCase());

            const matchesCategory =
              category === "All" ||
              category === "" ||
              carItem.category.toLowerCase() === category.toLowerCase();

            const matchesPrice =
              priceFilter === "All" ||
              carItem.dailyRate <= parseInt(priceFilter);

            const matchesAvailability =
              availability === "All" ||
              (availability === "Available" && carItem.available === true) ||
              (availability === "Unavailable" && carItem.available === false);

            return (
              matchesSearch &&
              matchesCategory &&
              matchesPrice &&
              matchesAvailability
            );
          })
          .map((carItem) => (
            <CarCard key={carItem.carId} car={carItem} />
          ))}
      </div>
    </div>
  );
};

export default Home;
