import React from "react";
import {} from "react-icons";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

export default function Paper() {
  return (
    <>
      <div className="flex justify-end ">
        <a
          href="#"
          class="block  min-w-sm p-6 bg-white border  border-gray-200  shadow  min-h-screen dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Abrar Hosny{" "}
          </h1>
          <p className="text-sm text-center ">Alexandria, Egypt</p>
          <div className="flex ">
            <div className="flex  items-center">
              <FaPhone className="mr-1" />
              <p className="mr-3">+201002531133</p>
            </div>
            <div className="flex  items-center ">
              <IoMdMail className="mr-1" />
              <p className="mr-3">abrarhosny19@gmail.com</p>
            </div>
            <div className="flex  items-center ">
              <FaLinkedin className="mr-1" />
              <p className="mr-3">LinkedIn</p>
            </div>
            <div className="flex  items-center ">
              <FaGithub className="mr-1" />
              <p className="mr-3">Github</p>
            </div>
            <div className="flex  items-center ">
              <TfiWorld className="mr-1" />
              <p>Website</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
