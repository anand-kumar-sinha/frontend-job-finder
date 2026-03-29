import getLocation from "../getLocation/getLocation";

const fetchLocation = async ({
  setLocation,
  setError,
}) => {
  try {
    const loc = await getLocation();
    setLocation(loc);

    // optional: cache
    localStorage.setItem("userLocation", JSON.stringify(loc));
  } catch (err) {
    setError(err);

    const saved = localStorage.getItem("userLocation");
    if (saved) {
      setLocation(JSON.parse(saved));
    }
  }
};

export default fetchLocation;
