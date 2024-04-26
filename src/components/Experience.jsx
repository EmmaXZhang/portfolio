import React from "react";

const Experience = () => {
  return (
    <>
      <h1 className="font-bold text-2xl mb-12 m-auto">EXPERIENCE</h1>
      {/* experience list */}
      {/* list item */}
      <div className="flex justify-between h-48">
        {/* left */}
        <div className="w-1/3">
          {/* job title */}
          <div className=" p-3 font-semibold w-fit">
            Junior Software developer
          </div>
          {/* job descriptin */}
          <div className="p-3 text-sm italic">
            Create several full stack projects
          </div>
          {/* job date */}
          <div className="p-3 text-red-400 text-sm font-semibold">
            Feb 2024 - May 2024
          </div>
          {/* company name */}
          <div className="p-1 rounded text-sm font-semibold w-fit">
            General Assembly
          </div>
        </div>
        {/* center */}
        <div className="w-1/6">
          {/* line */}
          <div className="w-1 h-full bg-gray-600 rounded relative">
            {/* circle */}
            <div className="absolute w-5 h-5 rounded-full bg-white ring-4 ring-red-400  -left-2"></div>
          </div>
        </div>
        {/* right */}
        <div className="w-1/3"></div>
      </div>

      {/* experience list */}
      {/* list item */}
      <div className="flex justify-between h-48">
        {/* left */}
        <div className="w-1/3"></div>
        {/* center */}
        <div className="w-1/6">
          {/* line */}
          <div className="w-1 h-full bg-gray-600 rounded relative">
            {/* circle */}
            <div className="absolute w-5 h-5 rounded-full bg-white ring-4 ring-red-400  -left-2"></div>
          </div>
        </div>
        {/* right */}
        <div className="w-1/3">
          {" "}
          {/* job title */}
          <div className=" p-3 font-semibold w-fit">
            Junior Software developer
          </div>
          {/* job descriptin */}
          <div className="p-3 text-sm italic">
            Create several full stack projects
          </div>
          {/* job date */}
          <div className="p-3 text-red-400 text-sm font-semibold">
            Feb 2024 - May 2024
          </div>
          {/* company name */}
          <div className="p-1 rounded  text-sm font-semibold w-fit">
            General Assembly
          </div>
        </div>
      </div>

      {/* experience list */}
      {/* list item */}
      <div className="flex justify-between h-48">
        {/* left */}
        <div className="w-1/3">
          {/* job title */}
          <div className="p-3 font-semibold w-fit">
            Junior Software developer
          </div>
          {/* job descriptin */}
          <div className="p-3 text-sm italic">
            Create several full stack projects
          </div>
          {/* job date */}
          <div className="p-3 text-red-400 text-sm font-semibold">
            Feb 2024 - May 2024
          </div>
          {/* company name */}
          <div className="p-3 rounded text-sm font-semibold w-fit">
            General Assembly
          </div>
        </div>
        {/* center */}
        <div className="w-1/6">
          {/* line */}
          <div className="w-1 h-full bg-gray-600 rounded relative">
            {/* circle */}
            <div className="absolute w-5 h-5 rounded-full bg-white ring-4 ring-red-400 -left-2"></div>
          </div>
        </div>
        {/* right */}
        <div className="w-1/3"></div>
      </div>
    </>
  );
};

export default Experience;
