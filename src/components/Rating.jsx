import React from "react";

const Rating = () => {
  return (
    <>
      <div className="flex items-center mb-2">
        <svg
          className="w-4 h-4 text-yellow-400 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-400 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-400 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-yellow-400 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <svg
          className="w-4 h-4 text-gray-400 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
        <p className="ms-1 text-sm font-medium text-gray-500">4.92</p>
        <p className="ms-1 text-sm font-medium text-gray-500">out of</p>
        <p className="ms-1 text-sm font-medium text-gray-500">5</p>
      </div>
      <p className="text-sm font-medium text-gray-500">1,745 global ratings</p>

      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          5 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
          <div
            className="h-5 bg-yellow-300 rounded"
            style={{ width: "70%" }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500">70%</span>
      </div>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          4 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
          <div
            className="h-5 bg-yellow-300 rounded"
            style={{ width: "17%" }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500">17%</span>
      </div>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          3 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
          <div
            className="h-5 bg-yellow-300 rounded"
            style={{ width: "8%" }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500">8%</span>
      </div>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          2 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
          <div
            className="h-5 bg-yellow-300 rounded"
            style={{ width: "4%" }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500">4%</span>
      </div>
      <div className="flex items-center mt-4">
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          1 star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
          <div
            className="h-5 bg-yellow-300 rounded"
            style={{ width: "1%" }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-500">1%</span>
      </div>
    </>
  );
};

export default Rating;
