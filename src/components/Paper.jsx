import React from "react";
import {} from "react-icons";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import PersonalInfo from "./PersonalInfo";
import ProjectSection from "./ProjectSection";
import TechnicalSkills from "./TechnicalSkills";
import Content from "./Content";


export default function Paper({personName}) {
  console.log(personName)
  return (
      <>
       <div className="flex bg-gray-100 p-2 ml-7 mt-2">
         <div className="flex mr-2"> 
          <a
            className="block  p-6 bg-white border border-gray-200 shadow min-h-screen dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
             {personName}
            </h1>
            <p className="text-sm text-center ">Alexandria, Egypt</p>
            <div className="flex justify-center flex-wrap mt-4">
              <div className="flex items-center mr-4">
                <FaPhone className="mr-1" />
                <p>+201002531133</p>
              </div>
              <div className="flex items-center mr-4">
                <IoMdMail className="mr-1" />
                <p>abrarhosny19@gmail.com</p>
              </div>
              <div className="flex items-center mr-4">
                <FaLinkedin className="mr-1" />
                <p>LinkedIn</p>
              </div>
              <div className="flex items-center mr-4">
                <FaGithub className="mr-1" />
                <p>Github</p>
              </div>
              <div className="flex items-center">
                <TfiWorld className="mr-1" />
                <p>Website</p>
              </div>
            </div>
            <PersonalInfo />
            <ProjectSection />
            <TechnicalSkills />
          </a>
        
        </div>
       
       </div>
      </>
    );
  }
  