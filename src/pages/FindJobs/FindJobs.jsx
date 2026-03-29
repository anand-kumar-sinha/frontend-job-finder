import { useEffect, useState } from "react";
import LocationBar from "../../components/LocationBar/LocationBar";
import { loadJobs } from "../../utility/loadJobs/loadJobs";
import JobCard from "../../components/Cards/JobCards";
import { useSearchParams } from "react-router-dom";
const FindJobs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState([]);
  const page = Number.parseInt(searchParams.get("page") || "1");
  const limit = Number.parseInt(searchParams.get("limit") || "10");
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(() => {
    loadJobs({
      setLoading,
      setError,
      location: { lat, lng },
      setJobs,
      page,
      limit,
    });
  }, [page]);

  return (
    <div className="">
      {/* Error */}
      {error && (
        <p className="text-red-500">
          Location access denied. Please enable it.
        </p>
      )}

      {/* Location UI */}
      {!loading && <LocationBar lat={lat} lng={lng} />}

      {/* Jobs List */}
      {!loading && jobs.length > 0 ?(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      ): <p className="text-center mt-5 text-gray-500">No jobs found in your area.</p>}
    </div>
  );
};

export default FindJobs;
