const LocationBar = ({ lat, lng }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow">
      <p className="text-sm text-gray-500">Your Location</p>
      <h2 className="text-lg font-semibold">
        📍 {lat || "Detecting location..."}, {lng || "Detecting location..."}
      </h2>
    </div>
  );
};

export default LocationBar;