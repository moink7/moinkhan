"use client";
import { experiences } from "@/data";
import Image from "next/image";
import React, { Fragment } from "react";
import { AnimatedBeam } from "./ui/AnimatedBeam";

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800" id="experience">
      <div className="max-w-6xl mx-auto h-40 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-8xl font-bold py-6 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-3">
        <div className="items-center justify-center flex flex-col pt-10">
          <div className="relative w-[100vw] max-w-4xl h-[60vh] flex items-center justify-center">
            <Image
              src="/hackathon.jpeg"
              alt="hackathon"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="pt-5 flex flex-col items-center justify-center text-center px-2">
          <h2 className="pt-5 text-2xl md:text-4xl font-bold">Manipal Hackathon Winner</h2>
          <h3 className="pt-3 text-base md:text-lg font-medium">#1 out of 868 teams</h3>
          <p className="pt-4 text-gray-500 max-w-full md:max-w-[50vw] text-center text-sm md:text-base">
            Won Rank #1 at the M# Hackathon, MIT Manipal, emerging from 868 competing teams with a two-person team. Built and delivered a complete solution within 36 hours, overcoming initial workflow mismatches through rapid collaboration and adaptability. This win reinforced my ability to perform under pressure and deliver results at a national-scale competitive event.
          </p>
        </div>
        

        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-28 px-2">
          {/* Experience card */}
          {experiences.map((exp, idx) => (
            <Fragment key={idx}>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
                img={exp.img}
              />
              {idx === experiences.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center">
                  <div className="w-full h-24 rounded-full relative overflow-hidden">
                    <AnimatedBeam />
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  companyLink,
  idx,
  img
}: any) => {
  return (
    <div
      className="relative border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4 hover:translate-x-2 transition duration-200"
      key={idx}
    >
      <h1 className="absolute -top-10 md:-left-10 md:-top-11 text-4xl text-gray-200 font-bold dark:text-gray-700">
        {year}
      </h1>
      
      <div className="flex gap-4 flex-row ">
        <Image
          width={100}
          height={100}
          src={img}
          alt={title}
          className="h-14 w-14 rounded-lg object-cover object-top"
        />
        <div>
          <h1 className="font-semibold text-xl">{title}</h1>
          <a href={companyLink} className="text-gray-500">
            {company}
          </a>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};
