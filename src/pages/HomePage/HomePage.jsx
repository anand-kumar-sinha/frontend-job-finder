import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fetchLocation from "../../utility/fetchLocation/fetchLocation";
import { useState } from "react";

const HomePage = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLocation({
      setLocation,
      setError,
    });
  }, []);

  const handleClick = () => {
    navigate(
      `/find-jobs?lat=${location?.lat}&lng=${location?.lng}&page=1&limit=20`,
    );
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleClick}
        className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90"
      >
        Find Jobs
      </button>
    </div>
  );
};

export default HomePage;
