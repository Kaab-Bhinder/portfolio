import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 10, delay: 0.5 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
      id="about"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Intoduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex  align-items: flex-start justify-start w-full flex-col lg:flex-row  gap-20 my-20 "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-20 w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          ></Image>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            I’m <strong>Muhammad Kaab Bhinder</strong>, doing{" "}
            <strong>Bachelor of Computer Science (BSCS)</strong>. . Currently, I
            am focused on refining my expertise in <strong>React</strong> and{" "}
            <strong>Next.js</strong> by working on various projects aimed at
            creating scalable and practical solutions. My passion extends to
            experimenting with <strong>GSAP</strong> animations, where I
            specialize in bringing 3D effects to life and enhancing the
            interactivity of websites. In addition to my front-end development
            skills, I have a strong foundation in <strong>WordPress</strong>{" "}
            development, where I enjoy crafting user-friendly, dynamic websites.
            I am also expanding my knowledge in backend development with{" "}
            <strong>MongoDB</strong> and <strong>MySQL</strong>, further
            strengthening my understanding of database management systems. I am
            proficient in multiple programming languages, including{" "}
            <strong>JavaScript</strong>, <strong>C++</strong>, and{" "}
            <strong>Java</strong>, which allow me to solve complex problems and
            build efficient, optimized solutions. I believe in the power of
            continuous learning, staying curious, and constantly evolving as a
            developer to contribute meaningfully to the web development field.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => {
              return (
                <motion.li
                  whileInView={{ scale: 1.05 }}
                  key={index}
                  className="border-[0.5px] border-gray-400 p-6 rounded-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                >
                  <Image
                    className="w-7 mt-3"
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white/50">
                    {description}
                  </p>
                </motion.li>
              );
            })}
          </motion.ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, ind) => {
              return (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
                  key={ind}
                >
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
