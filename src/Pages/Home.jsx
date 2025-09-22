import React from "react";

const Home = () => {
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
          />

          <select className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Luxury</option>
            <option>Sports</option>
            <option>SUV</option>
            <option>Truck</option>
            <option>Electric</option>
            <option>Economy</option>
          </select>

          <select className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All prices</option>
            <option>Under $50/day</option>
            <option>Under $100/day</option>
            <option>Under $150/day</option>
            <option>Under $200/day</option>
            <option>Under $500/day</option>
          </select>

          <select className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All</option>
            <option>Available</option>
            <option>Unavailable</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Home;
