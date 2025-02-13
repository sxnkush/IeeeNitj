"use client";
import React from "react";
import { Michroma } from "next/font/google";

const michroma = Michroma({ weight: ["400"], subsets: ["latin"] });
const textStyling = {
  color: "#1F41BB",
};

const Aboutsection = () => {
  return (
    <div className="flex justify-center">
      <div className="h-[100%] rounded-[20px] md:rounded-[40px] text-black grid-rows-4 p-7 w-[90%]">
        <div className="relative top-5 w-[90%] rounded-full flex justify-center shadow-xl h-[120px] items-center row-span-2 mx-auto">
          <h2
            className={`text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${michroma.className}`}
          >
            ABOUT US
          </h2>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 row-span-1 mt-10">
          <div className="col-span-1 mt-3">
            <div>
              <h2
                className={`text-black text-xl sm:text-2xl mb-4 ${michroma.className}`}
                style={{
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
                }}
              >
                ABOUT IEEE
              </h2>
              <p className="text-black text-base">
                The IEEE Student Chapter at NIT Jalandhar is a dynamic community
                of tech enthusiasts, innovators, and leaders committed to
                fostering professional growth, technical excellence, and
                impactful contributions to society.
              </p>
            </div>
            <div
              style={{
                position: "relative",
                width: "510px",
                height: "312px",
                top: "10px",
                backgroundImage: "url('/nitj.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                borderRadius: "40px",
              }}
              className="max-w-full h-auto"
            ></div>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-black p-4 font-bold rounded-xl bg-[#BDD6FB33]">
                Over <span style={textStyling}>460,000</span> members in more
                than <span style={textStyling}>190</span> countries.
              </div>
              <div className="border-2 border-black p-4 font-bold rounded-xl bg-[#BDD6FB33]">
                IEEE was formed in <span style={textStyling}>1963</span>
              </div>
              <div className="border-2 border-black p-4 font-bold rounded-xl bg-[#BDD6FB33]">
                <span style={textStyling}>300</span> conferences each year
              </div>
              <div className="border-2 border-black p-4 font-bold rounded-xl bg-[#BDD6FB33]">
                <span style={textStyling}>344 </span> sections,{" "}
                <span style={textStyling}>2,709 </span> chapters,{" "}
                <span style={textStyling}>3,635 </span> student branches
              </div>
            </div>

            <div className="mt-10">
              <h2
                className={`text-black text-xl sm:text-2xl mb-4 ${michroma.className}`}
                style={{
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)",
                }}
              >
                ABOUT NITJ
              </h2>
              <p className="text-black text-base">
                Dr B R Ambedkar National Institute of Technology was established
                in 1987 as Regional Engineering College and was given the status
                of National Institute of Technology (Deemed University) by the
                Government of India on October 17, 2002 under the aegis of the
                Ministry of Education (Shiksha Mantralaya), New Delhi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
