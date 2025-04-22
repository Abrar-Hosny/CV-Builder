import React, { useState } from "react";


export default function TechnicalSkills() {
const [Languages, setLanguages] = useState("")
const [technology, setTechnology] = useState("")





  return (
    <div className="mt-3">
      <h2 className="font-bold">Technical Skills</h2>
      <hr className="border border-black" />
      <div>
        <div className="flex mt-3">
          <p>
            <span className="font-bold">Languages:</span>
            <span> {Languages}</span>
          </p>
        </div>
        <div className="flex">
          <p>
            <span className="font-bold">Technologies/Frameworks: </span>
            <span clasName="font-light">
              {technology}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
