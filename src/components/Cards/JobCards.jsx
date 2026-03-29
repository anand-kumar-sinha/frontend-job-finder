import React from "react";

const JobCard = ({ job }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-xl p-5 bg-red-500
                 hover:shadow-md transition duration-200 w-full"
    >
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{job?.title}</h2>
          <p className="text-sm text-gray-600 mt-1">{job?.company}</p>
        </div>

        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
          Full Time
        </span>
      </div>

      {/* Meta Info */}
      <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
        <span>
          📍 {job?.location?.coordinates?.[1]?.toFixed(2)},{" "}
          {job?.location?.coordinates?.[0]?.toFixed(2)}
        </span>

        <span>🕒 {new Date(job?.createdAt).toLocaleDateString()}</span>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-5">
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90">
          Apply
        </button>

        <button className="text-sm text-gray-700 hover:underline">
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
