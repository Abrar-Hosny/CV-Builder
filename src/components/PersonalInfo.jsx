import React from "react";

export default function PersonalInfo({ education }) {
  return (
    <div className="mt-3">
      <h2 className="font-bold">Education</h2>
      <hr className="border border-black" />
      {education?.map((edu, index) => (
        <div key={index} className="mt-3">
          <div className="flex flex-wrap justify-between gap-2">
            <h3 className="font-semibold break-words">{edu.school}</h3>
            <p className="font-semibold break-words">
              {new Date(edu.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} – 
              {edu.endDate ? new Date(edu.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present'}
            </p>
          </div>
          <div className="flex flex-wrap justify-between text-sm italic gap-2">
            <h3 className="break-words">{edu.degree}</h3>
            <p className="break-words">{edu.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
