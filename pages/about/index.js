import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaEthereum,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiPolygon,
  SiSolidity,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaBootstrap/>,
          <SiTailwindcss/>
        
      
        ],
      },
      {
        title: "Backend & DB",
        icons: [  <FaNodeJs/>,
          <SiExpress/>,
          <SiMongodb/>,
        <SiMysql className="text-3xl" /> ],
      },
      {
        title: "Web3",
        icons: [<SiSolidity />, <FaEthereum />, ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "SIH HackHeritage Winner",
        stage: "2024",
      },
     
    ],
  },
  
  {
    title: "credentials",
    info: [
      {
        title: "B.Tech , IT - Heritage Insititute of Technology",
        stage: "2023 - 2027",
      },
      {
        title: "Schooling - Welkin National School , CISCE",
        stage: "2023",
      },
      
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import { fadeIn } from "../../variants";
const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Circles />
      {/*AVATAR IM G*/}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[58px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/*text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Where <span className="text-accent">Complex Code</span> Captivating <span className="text-accent">WebDesign</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Hi I am Sourjya a Full Stack Developer, I specialize in building
            dynamic web applications and seamless user experiences. Currently, I
            am expanding my expertise into Web3 & Blockchain technologies.
            Passionate about leveraging new technologies to create innovative
            solutions.
          </motion.p>
          {/*counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/*experience */}
              <div className="relative xl:w-[120px] after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs  uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/*experience */}
              <div className="relative xl:w-[120px]   after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs  uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Project
                </div>
              </div>
              {/*experience */}
              <div className="relative xl:w-[120px]   ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} />
                </div>
                <div className="text-xs  uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div  variants={fadeIn('left' ,0.4)}
    initial='hidden'
    animate='show'
    exit='hidden' className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index == itemIndex &&
                    "text-accent after:w-[100%] after:bg-red-600 after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/*title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/*icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
