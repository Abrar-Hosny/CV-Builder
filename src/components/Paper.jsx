import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import PersonalInfo from "./PersonalInfo";
import ProjectSection from "./ProjectSection";
import TechnicalSkills from "./TechnicalSkills";

export default function Paper({ personInfo }) {
  return (
    <div className="flex bg-gray-100 p-2">
      <div className="w-[800px] max-w-full mx-auto">
        <div className="block p-6 bg-white border border-gray-200 shadow min-h-screen overflow-y-auto">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center break-words">
            {personInfo.name}
          </h1>
          <p className="text-sm text-center break-words">{personInfo.location}</p>
          <div className="flex flex-wrap justify-center mt-4 gap-4">
            <div className="flex items-center break-words">
              <FaPhone className="mr-1 flex-shrink-0" />
              <p className="break-words">{personInfo.phone}</p>
            </div>
            <div className="flex items-center break-words">
              <IoMdMail className="mr-1 flex-shrink-0" />
              <p className="break-words">{personInfo.email}</p>
            </div>
            <div className="flex items-center break-words">
              <FaLinkedin className="mr-1 flex-shrink-0" />
              <a href={personInfo.linkedin} className="break-words">LinkedIn</a>
            </div>
            <div className="flex items-center break-words">
              <FaGithub className="mr-1 flex-shrink-0" />
              <a href={personInfo.github} className="break-words">Github</a>
            </div>
            <div className="flex items-center break-words">
              <TfiWorld className="mr-1 flex-shrink-0" />
              <a href={personInfo.website} className="break-words">Website</a>
            </div>
          </div>

          <PersonalInfo education={personInfo.education} />
          <ProjectSection projects={personInfo.projects} />
          <TechnicalSkills skills={personInfo.skills} />
        </div>
      </div>
    </div>
  );
}
  