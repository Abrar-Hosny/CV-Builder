import React from "react";

export default function PersonalInfo() {
  return (
    <>
      <div>
      <h2 className="font-bold">Education</h2>
      <hr className="border border-black" />
        <div>
       
        <div className="flex justify-between">
          <h3 className="font-semibold">Pharos University in Alexandria </h3>
          <p className="font-semibold">Sep. 2021 – May 2025</p>
        </div>
        <div className="flex justify-between  text-sm italic ">
          <h3 >Bachelor of Science in Computer Science - GPA: 3.85 </h3>
          <p>Alexandria, Egypt
          </p>
        </div>
        </div>
      </div>
    </>
  );
}
