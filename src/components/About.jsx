import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[300px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-1 px-1 min-h-[200px] min-w-[200px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-150 h-150 object-contain  rounded-[20px]" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]  ">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[20px] max-w-10xl leading-[30px]">
        As an avid chess player with 12+ years of experience, I am thrilled to co create ChessBlocks with Daïm and Chaorld. Drawing from my deep appreciation for the game and my passion for creativity, each piece in this collection is a labor of love, meticulously crafted to reflect my years of experience on the chessboard. The chess pieces in this collection are not only a reflection of the game of chess, but also carry symbolic representations of people. Each piece embodies unique characteristics and traits that can be seen as metaphors for human personalities, behaviors, and emotions. The unique clothing designs, expressions, and traits of each piece further add depth and nuance to their representations of people, reflecting the diversity and complexity of human nature. They add a touch of personality to each piece, making them truly unique and individual. I've infused these traits with strategic symbolism, creating a chess set that is not only visually stunning but also intellectually engaging. Whether you're a chess player, an art collector, or simply someone who appreciates the beauty of creativity, this collection is a celebration of my chess journey and a tribute to the game that has enriched my life for over a decade. Welcome to a world where chess and art converge, and prepare to be captivated by the artistry and intricacies of this truly unique collection.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');