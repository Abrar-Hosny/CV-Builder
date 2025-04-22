import React from "react";
import { FaLink } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

export default function ProjectSection({ projects }) {
  return (
    <div className="mt-3">
      <h2 className="font-bold">Projects</h2>
      <hr className="border border-black" />
      {projects?.map((project, index) => (
        <div key={index} className="mt-3">
          <div className="flex flex-wrap justify-between gap-2">
            <h2 className="font-semibold break-words">
              {project.name} |{" "}
              <span className="text-sm italic font-normal break-words">
                {project.technology}
              </span>
            </h2>
            {project.link && (
              <div className="flex items-center underline">
                <FaLink className="w-3 h-3 mr-1 flex-shrink-0" />
                <a className="font-medium text-sm break-words" href={project.link}>
                  Project Link
                </a>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2 ml-5 mt-3 text-sm">
            <TbPointFilled className="mt-1 flex-shrink-0" />
            <p className="break-words">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
