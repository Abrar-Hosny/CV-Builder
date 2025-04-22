import React from "react";

export default function TechnicalSkills({ skills }) {
  return (
    <div className="mt-3">
      <h2 className="font-bold">Technical Skills</h2>
      <hr className="border border-black" />
      <div className="mt-3">
        <div className="flex flex-wrap gap-2">
          {skills?.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm break-words"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 