import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";


export default function ProjectSection() {
  const [projectName,setProjectName ] = useState("MembersOnly")
  const [projectTechnology,setProjectTechnology ] = useState("   NextJS, NextUI, Aceternity, TypeScript, TailwindCSS, Socket.IO ,ExpressJs, MongoDB")
  const [projectLink,setProjectLink ] = useState(" ")              
  const [projectDescription,setProjectDescription ] = useState("Developed MembersOnly, a real-time web application, with session-based authentication leveraging Passport.js, which utilizes cookies to manage user sessions. it enables users to create new posts, fostering community interaction and content generation within the platform.")              
  
  return (
    <div className="mt-3">
      <h2 className="font-bold">Projects</h2>
      <hr className="border border-black" />
      <div>
        <div className="flex justify-between mt-3">
          <h2 className="font-semibold mr-3 ">
     {projectName} | {" "}
            <span className="text-sm italic font-normal">
          {projectTechnology} {" "}
            </span>
          </h2>
          <div className="flex items-center underline">
            <FaLink className="w-3 h-3 mr-1" />
            <a className="font-medium text-sm" href={projectLink}>Project Link</a>
          </div>
        </div>
        <div className="flex justify-between ml-5  mt-3 text-sm ">
        <TbPointFilled className="mt-1" />
        <p>{projectDescription}</p>
        </div>
      </div>
    </div>
  );
}
