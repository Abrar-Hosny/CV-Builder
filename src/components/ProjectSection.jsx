import React from "react";
import { FaLink } from "react-icons/fa";
import { FaStarOfLife } from "react-icons/fa6";

export default function ProjectSection() {
  return (
    <div>
      <h2 className="font-bold">Projects</h2>
      <hr className="border border-black" />
      <div>
        <div className="flex justify-between">
          <h2 className="font-semibold mr-3">
            MembersOnly |{" "}
            <span className="text-sm italic font-normal">
              NextJS, NextUI, Aceternity, TypeScript, TailwindCSS, Socket.IO ,
              ExpressJs, MongoDB{" "}
            </span>
          </h2>
          <div className="flex items-center underline">
            <FaLink className="w-3 h-3 mr-1" />
            <a className="font-medium">Project</a>
          </div>
        </div>
        <div className="flex justify-between  text-sm italic ">
          <h3>Bachelor of Science in Computer Science - GPA: 3.85 </h3>
          <p>Alexandria, Egypt</p>
        </div>
      </div>
    </div>
  );
}
