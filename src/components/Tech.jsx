import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>

        <h2 className={styles.sectionHeadTextLight}>Creators</h2>
      </motion.div >

      <div className="flex flex-wrap justify-left gap-10 mt-14">
        {technologies.map((technology) => (
          <div>

            <a href={technology.link} ><img src={technology.icon} alt={technology.name} className="w-40 h-100 rounded-[20px]" /></a>
            <h3 className="text-taupe text-[20px] font-bold text-center py-5">
              {technology.name}
            </h3>
          </div>
        ))}
      </div >
    </>
  );
};

export default SectionWrapper(Tech, 'creators');
