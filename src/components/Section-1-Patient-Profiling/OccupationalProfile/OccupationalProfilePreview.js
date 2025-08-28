import React, { useState } from "react";

export default function OccupationalProfilePreview(data) {
    console.log(data)
  const [workLifeBalance, setWorkLifeBalance] = useState(4);
  const [stressWorries, setStressWorries] = useState(4);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 w-full max-w-md">
      {/* Heading */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Occupational Profile
      </h2>

      {/* Profile Details */}
      <div className="space-y-2 text-sm">
        <p>
          <span className="text-gray-500">Select Job Type :</span>{" "}
          <span className="text-gray-900">Government Employee</span>
        </p>
        <p>
          <span className="text-gray-500">Job Time :</span>{" "}
          <span className="text-gray-900">Day Time</span>
        </p>
        <p>
          <span className="text-gray-500">Job Place :</span>{" "}
          <span className="text-gray-900">Work from Home (WFH)</span>
        </p>
        <p>
          <span className="text-gray-500">Exposure to Dust and Smile :</span>{" "}
          <span className="text-gray-900">Yes</span>
        </p>
        <p>
          <span className="text-gray-500">
            Exposure to Heavy Metals and Toxic Elements :
          </span>{" "}
          <span className="text-gray-900">No</span>
        </p>
      </div>

      {/* Sliders */}
      <div className="mt-6 space-y-5">
        {/* Work Life Balance */}
        <div>
          <label className="text-gray-700 font-medium text-sm">
            Work Life Balance ({workLifeBalance}/10)
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={workLifeBalance}
            onChange={(e) => setWorkLifeBalance(Number(e.target.value))}
            className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>1</span>
            <span>10</span>
          </div>
        </div>

        {/* Stress and Worries */}
        <div>
          <label className="text-gray-700 font-medium text-sm">
            Stress and Worries ({stressWorries}/10)
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={stressWorries}
            onChange={(e) => setStressWorries(Number(e.target.value))}
            className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>1</span>
            <span>10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
