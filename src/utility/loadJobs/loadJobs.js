import { fetchJobs } from "../../apis/fetchJobs/fetchJob";

export const loadJobs = async ({
  location,
  setLoading,
  setError,
  setJobs,
  page,
  limit
}) => {
  setLoading(true);

  const result = await fetchJobs({
    lat: location.lat,
    lng: location.lng,
    page: page || 1,
    limit: limit || 20,
  });

  if (result.error) {
    setError(result.error);
  } else {
    setJobs(result.jobs);
  }

  setLoading(false);
};
