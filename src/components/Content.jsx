import { useState } from "react";
import Paper from "./Paper";

export default function Content() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Abrar Hosny",
    phone: "+01002531133",
    email: "abrarhosny19@gmail.com",
    location: "Alexandria,Egypt",
    github: "https://github.com/Abrar-Hosny",
    linkedin: "in/abrar-mohamed-4a45932b1",
    website: "https://abrarhosny.vercel.app/",
    education: [{
      school: "Pharos University",
      degree: "Bachelor Degree",
      startDate: "2021-09-01",
      endDate: "2025-05-01",
      location: "Alexandria,Egypt"
    }],
    projects: [{
      name: "MembersOnly",
      technology: "NextJS, NextUI, Aceternity, TypeScript, TailwindCSS, Socket.IO, ExpressJs, MongoDB",
      link: "https://github.com/Abrar-Hosny/MembersOnly",
      description: "Developed MembersOnly, a real-time web application, with session-based authentication leveraging Passport.js, which utilizes cookies to manage user sessions. it enables users to create new posts, fostering community interaction and content generation within the platform."
    }],
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "TailwindCSS"]
  });

  const handleEducationChange = (index, field, value) => {
    setPersonalInfo(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const handleProjectChange = (index, field, value) => {
    setPersonalInfo(prev => ({
      ...prev,
      projects: prev.projects.map((proj, i) => 
        i === index ? { ...proj, [field]: value } : proj
      )
    }));
  };

  const addEducation = () => {
    setPersonalInfo(prev => ({
      ...prev,
      education: [...prev.education, {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: ""
      }]
    }));
  };

  const removeEducation = (index) => {
    setPersonalInfo(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const addProject = () => {
    setPersonalInfo(prev => ({
      ...prev,
      projects: [...prev.projects, {
        name: "",
        technology: "",
        link: "",
        description: ""
      }]
    }));
  };

  const removeProject = (index) => {
    setPersonalInfo(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 p-4 gap-4">
      <div className="bg-white p-6 border rounded-xl w-full lg:w-1/2 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h1 className="font-bold text-xl mb-4 text-gray-800">Personal Details</h1>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={personalInfo.name}
                    onChange={(event) => {
                      setPersonalInfo(prev => ({
                        ...prev,
                        name: event.target.value
                      }));
                    }}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Abrar Hosny"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="location"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={personalInfo.location}
                    onChange={(event) => {
                      setPersonalInfo(prev => ({
                        ...prev,
                        location: event.target.value
                      }));
                    }}
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Alexandria, Egypt"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="+01002531133"
                    value={personalInfo.phone}
                    required
                    onChange={(event) => {
                      setPersonalInfo(prev => ({
                        ...prev,
                        phone: event.target.value
                      }));
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="abrarhosny@gmil.com"
                    value={personalInfo.email}
                    required
                    onChange={(event) => {
                      setPersonalInfo(prev => ({
                        ...prev,
                        email: event.target.value
                      }));
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="linkedin"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    LinkedIn Profile
                  </label>
                  <input
                    type="text"
                    id="linkedin"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={personalInfo.linkedin}
                    required
                    onChange={(event) => {
                      setPersonalInfo(prev => ({
                        ...prev,
                        linkedin: event.target.value
                      }));
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="github"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    GitHub Profile
                  </label>
                  <input
                    type="text"
                    id="github"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    value={personalInfo.github}
                    onChange={(event) => {
                      setPersonalInfo(prev => ({
                        ...prev,
                        github: event.target.value
                      }));
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Website
                  </label>
                  <input
                    type="text"
                    id="website"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                    value={personalInfo.website}
                    onChange={(event) => {
                      setPersonalInfo(prev => ({
                        ...prev,
                        website: event.target.value
                      }));
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h1 className="font-bold text-xl text-gray-800 mb-4">Education</h1>
              <div className="space-y-4">
                {personalInfo.education.map((edu, index) => (
                  <div key={index} className="bg-white border rounded-lg p-4 relative shadow-sm">
                    <button
                      onClick={() => removeEducation(index)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-lg font-bold"
                    >
                      ×
                    </button>
                    <div className="space-y-3">
                      <div>
                        <label
                          htmlFor={`school-${index}`}
                          className="block mb-1 text-sm font-medium text-gray-700"
                        >
                          School
                        </label>
                        <input
                          type="text"
                          id={`school-${index}`}
                          value={edu.school}
                          onChange={(event) => handleEducationChange(index, 'school', event.target.value)}
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Pharos University"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`degree-${index}`}
                          className="block mb-1 text-sm font-medium text-gray-700"
                        >
                          Degree
                        </label>
                        <input
                          type="text"
                          id={`degree-${index}`}
                          value={edu.degree}
                          onChange={(event) => handleEducationChange(index, 'degree', event.target.value)}
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Bachelor Degree"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label
                            htmlFor={`startDate-${index}`}
                            className="block mb-1 text-sm font-medium text-gray-700"
                          >
                            Start Date
                          </label>
                          <input
                            type="date"
                            id={`startDate-${index}`}
                            value={edu.startDate}
                            onChange={(event) => handleEducationChange(index, 'startDate', event.target.value)}
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor={`endDate-${index}`}
                            className="block mb-1 text-sm font-medium text-gray-700"
                          >
                            End Date
                          </label>
                          <input
                            type="date"
                            id={`endDate-${index}`}
                            value={edu.endDate}
                            onChange={(event) => handleEducationChange(index, 'endDate', event.target.value)}
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor={`eduLocation-${index}`}
                          className="block mb-1 text-sm font-medium text-gray-700"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          id={`eduLocation-${index}`}
                          value={edu.location}
                          onChange={(event) => handleEducationChange(index, 'location', event.target.value)}
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Alexandria, Egypt"
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={addEducation}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium transition-colors"
                >
                  Add Education
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h1 className="font-bold text-xl text-gray-800 mb-4">Projects</h1>
              <div className="space-y-4">
                {personalInfo.projects.map((project, index) => (
                  <div key={index} className="bg-white border rounded-lg p-4 relative shadow-sm">
                    <button
                      onClick={() => removeProject(index)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-lg font-bold"
                    >
                      ×
                    </button>
                    <div className="space-y-3">
                      <div>
                        <label
                          htmlFor={`projectName-${index}`}
                          className="block mb-1 text-sm font-medium text-gray-700"
                        >
                          Project Name
                        </label>
                        <input
                          type="text"
                          id={`projectName-${index}`}
                          value={project.name}
                          onChange={(event) => handleProjectChange(index, 'name', event.target.value)}
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="MembersOnly"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`technology-${index}`}
                          className="block mb-1 text-sm font-medium text-gray-700"
                        >
                          Technology
                        </label>
                        <input
                          type="text"
                          id={`technology-${index}`}
                          value={project.technology}
                          onChange={(event) => handleProjectChange(index, 'technology', event.target.value)}
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="NextJS, NextUI, Aceternity, TypeScript, TailwindCSS, Socket.IO, ExpressJs, MongoDB"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`projectLink-${index}`}
                          className="block mb-1 text-sm font-medium text-gray-700"
                        >
                          Project Link
                        </label>
                        <input
                          type="text"
                          id={`projectLink-${index}`}
                          value={project.link}
                          onChange={(event) => handleProjectChange(index, 'link', event.target.value)}
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="https://github.com/Abrar-Hosny/MembersOnly"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`description-${index}`}
                          className="block mb-1 text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <textarea
                          id={`description-${index}`}
                          value={project.description}
                          onChange={(event) => handleProjectChange(index, 'description', event.target.value)}
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          rows="4"
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={addProject}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium transition-colors"
                >
                  Add Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Paper personInfo={personalInfo} />
      </div>
    </div>
  );
}
