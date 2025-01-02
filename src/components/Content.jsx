import React, { useState } from "react";
import Paper from "./Paper";

export default function Content() {
  const [name, setName] = useState("Abrar Hosny");
  const [phone, setPhone] = useState("+01002531133");
  const [email, setEmail] = useState("abrarhosny19@gmail.com");
  const [location, setLocation] = useState("Alexandria,Egypt");
  const [github, setGithub] = useState("https://github.com/Abrar-Hosny");
  const [linkedin, setLinkedin] = useState("in/abrar-mohamed-4a45932b1");
  const [website, setWebsite] = useState("https://abrarhosny.vercel.app/");
  const [personalInfo, setPersonalInfo] = useState({
    name: "Abrar Hosny",
    phone: "+01002531133",
    email: "abrarhosny19@gmail.com",
    location: "Alexandria,Egypt",
    github: "https://github.com/Abrar-Hosny",
    linkedin: "in/abrar-mohamed-4a45932b1",
    website: "https://abrarhosny.vercel.app/",
  });

  return (
    <>
      <div className="flex bg-gray-50">
        <div className="bg-white mt-3 ml-4 p-4 border rounded-xl ">
          <div className="flex">
            <div className="w-60 p-2">
              <h1 className="font-bold text-xl mb-2 ">Personal Details</h1>
              <div className="mb-2">
                <label
                  for="name"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    personalInfo.name = name;
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                  placeholder="Abrar Hosny"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  for="location"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(event) => {
                    setLocation(event.target.value);
                    personalInfo.location = location;
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                  placeholder="Alexandria, Egypt"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  for="phone"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                  placeholder="+01002531133"
                  value={phone}
                  required
                  onChange={(event) => {
                    setPhone(event.target.value);
                    personalInfo.phone = phone;
                  }}
                />
              </div>
              <div className="mb-2">
                <label
                  for="email"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                  placeholder="abrarhosny@gmil.com"
                  value={email}
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                    personalInfo.email = email;
                  }}
                />
              </div>
              <div className="mb-2">
                <label
                  for="linkedin"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Link Your Linkedin
                </label>
                <input
                  type="text"
                  id="linkedin"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                  value={linkedin}
                  required
                  onChange={(event) => {
                    setLinkedin(event.target.value);
                    personalInfo.linkedin = linkedin;
                  }}
                />
              </div>

              <div class="mb-2">
                <label
                  for="github"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Link Your Github
                </label>
                <input
                  type="text"
                  id="github"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                  required
                  value={github}
                  onChange={(event) => {
                    setGithub(event.target.value);
                    personalInfo.github = github;
                  }}
                />
              </div>

              <div class="mb-2">
                <label
                  for="website"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Link Your Website
                </label>
                <input
                  type="text"
                  id="website"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                  required
                  value={website}
                  onChange={(event) => {
                    setWebsite(event.target.value);
                    personalInfo.website = website;
                  }}
                />
              </div>
            </div>

            <div className="w-60 p-2">
              <h1 className="font-bold text-xl mb-2 ">Education</h1>
              <div className="mb-2">
                <label
                  for="email"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  School
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                  placeholder="Pharos University"
                  required
                />
              </div>
              <div class="mb-2">
                <label
                  for="phone"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Degree
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                  placeholder="Bachelor Degree"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  for="email"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                  placeholder="abrarhosny@gmil.com"
                  required
                />
              </div>
              <div className="mb-2">
                <label
                  for="text"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  for="text"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Location
                </label>
                <input
                  type="text"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
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
                className="block mb-1 text-sm font-medium text-gray-900 "
              >
                Company Name
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                placeholder="Ex: Route"
                required
              />
            </div>
            <div class="mb-2">
              <label
                for="phone"
                className="block mb-1 text-sm font-medium text-gray-900 "
              >
                Position Title
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                placeholder="Bachelor Degree"
                required
              />
            </div>
            <div class="mb-2">
              <label
                for="email"
                className="block mb-1 text-sm font-medium text-gray-900 "
              >
                Start Date
              </label>
              <input
                type="date"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                placeholder="abrarhosny@gmil.com"
                required
              />
            </div>
            <div class="mb-2">
              <label
                for="text"
                className="block mb-1 text-sm font-medium text-gray-900 "
              >
                End Date
              </label>
              <input
                type="date"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                required
              />
            </div>

            <div class="mb-2">
              <label
                for="text"
                className="block mb-1 text-sm font-medium text-gray-900 "
              >
                Location
              </label>
              <input
                type="text"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                placeholder="Alexandria ,Egypt"
                required
              />
            </div>

            <div class="mb-2">
              <label
                for="text"
                className="block mb-1 text-sm font-medium text-gray-900 "
              >
                Description
              </label>
              <textarea
                type="text"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2"
                placeholder="Alexandria ,Egypt"
                required
              ></textarea>
            </div>
          </div>
        </div>
        {console.log(personalInfo)}
        <Paper personInfo={personalInfo} />
      </div>
    </>
  );
}
