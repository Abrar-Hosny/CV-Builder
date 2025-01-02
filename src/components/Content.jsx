import React, { useState } from "react";
import Paper from "./Paper";

export default function Content() {
const [name ,setName]=useState("Abrar Hosny")
const handleNameChange = (event) => { 
setName(event.target.value)

}

  
  return (
    <>
     <div className="flex bg-gray-50">
     <div className="bg-white mt-3 ml-4 p-4 border rounded-xl ">
       <div className="flex">
       <div className="w-60 p-2">
          <h1 className="font-bold text-xl mb-2 ">Personal Details</h1>
          <div class="mb-2">
            <label
              for="email"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              Full Name
            </label>
            <input
              type="text"
              id="text"
              value={name}
              onChange={handleNameChange}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              placeholder="Abrar Hosny"
              required
            />
          </div>
          <div class="mb-2">
            <label
              for="phone"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              placeholder="+01002531133"
              required
            />
          </div>
          <div class="mb-2">
            <label
              for="email"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              placeholder="abrarhosny@gmil.com"
              required
            />
          </div>
          <div class="mb-2">
            <label
              for="text"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              Link Your Linkedin
            </label>
            <input
              type="text"
              id="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              required
            />
          </div>

          <div class="mb-2">
            <label
              for="text"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              Link Your Github
            </label>
            <input
              type=""
              id="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              required
            />
          </div>

          <div class="mb-2">
            <label
              for="password"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              Link Your Website
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              required
            />
          </div>
        </div>

        <div className="w-60 p-2">
          <h1 className="font-bold text-xl mb-2 ">Education</h1>
          <div class="mb-2">
            <label
              for="email"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              School
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              placeholder="Pharos University"
              required
            />
          </div>
          <div class="mb-2">
            <label
              for="phone"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              Degree
            </label>
            <input
              type="tel"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              placeholder="Bachelor Degree"
              required
            />
          </div>
          <div class="mb-2">
            <label
              for="email"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              Start Date
            </label>
            <input
              type="date"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              placeholder="abrarhosny@gmil.com"
              required
            />
          </div>
          <div class="mb-2">
            <label
              for="text"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              End Date
            </label>
            <input
              type="date"
              id="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              required
            />
          </div>

          <div class="mb-2">
            <label
              for="text"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              Location
            </label>
            <input
              type="text"
              id="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              placeholder="Alexandria ,Egypt"
              required
            />
          </div>
        </div>
       </div>

        <div className="w-60 p-3">
          <h1 className="font-bold text-xl mb-2 ">Projects</h1>
          <div class="mb-2">
            <label
              for="email"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              Company Name
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              placeholder="Ex: Route"
              required
            />
          </div>
          <div class="mb-2">
            <label
              for="phone"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              Position Title
            </label>
            <input
              type="tel"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              placeholder="Bachelor Degree"
              required
            />
          </div>
          <div class="mb-2">
            <label
              for="email"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              Start Date
            </label>
            <input
              type="date"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              placeholder="abrarhosny@gmil.com"
              required
            />
          </div>
          <div class="mb-2">
            <label
              for="text"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              End Date
            </label>
            <input
              type="date"
              id="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              required
            />
          </div>

          <div class="mb-2">
            <label
              for="text"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              Location
            </label>
            <input
              type="text"
              id="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              placeholder="Alexandria ,Egypt"
              required
            />
          </div>

          <div class="mb-2">
            <label
              for="text"
              class="block mb-1 text-sm font-medium text-gray-900 "
            >
              Description
            </label>
            <textarea
              type="text"
              id="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
              placeholder="Alexandria ,Egypt"
              required
            ></textarea>
          </div>
        </div>
      </div>
      <Paper personName={name}/>
     </div>
      
    </>
  );
}
