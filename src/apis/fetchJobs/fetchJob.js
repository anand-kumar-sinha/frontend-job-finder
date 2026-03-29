import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

export const fetchJobs = async ({ lat, lng, page, limit }) => {
  try {
    if (!lat || !lng) {
      throw new Error("Latitude and longitude are required to fetch jobs.");
    }

    if (!page) page = 1;
    if (!limit) limit = 20;

    const { data } = await axios.get(
      `${baseUrl}/jobs/fetch-jobs?lat=${lat}&lng=${lng}&page=${page}&limit=${limit}`,
    );

    if (data.success) {
      return { jobs: data.jobs };
    }
  } catch (error) {
    return {
      error:
        error?.message ||
        error?.response?.data?.message ||
        "Failed to fetch jobs.",
    };
  }
};
