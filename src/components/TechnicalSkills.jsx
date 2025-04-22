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
    <div className="flex bg-gray-100 p-2 ml-7 mt-2">
      <div className="flex mr-2">
        <div className="block p-6 bg-white border border-gray-200 shadow min-h-screen dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {personInfo.name}
          </h1>
          <p className="text-sm text-center">{personInfo.location}</p>
          <div className="flex justify-center flex-wrap mt-4">
            <div className="flex items-center mr-4">
              <FaPhone className="mr-1" />
              <p>{personInfo.phone}</p>
            </div>
            <div className="flex items-center mr-4">
              <IoMdMail className="mr-1" />
              <p>{personInfo.email}</p>
            </div>
            <div className="flex items-center mr-4">
              <FaLinkedin className="mr-1" />
              <a href={personInfo.linkedin}>LinkedIn</a>
            </div>
            <div className="flex items-center mr-4">
              <FaGithub className="mr-1" />
              <a href={personInfo.github}>Github</a>
            </div>
            <div className="flex items-center">
              <TfiWorld className="mr-1" />
              <a href={personInfo.website}>Website</a>
            </div>
          </div>

          {/* Pass data as props here */}
          <PersonalInfo education={personInfo.education} />
          <ProjectSection projects={personInfo.projects} />
          <TechnicalSkills skills={personInfo.skills} />
        </div>
      </div>
    </div>
  );
}
