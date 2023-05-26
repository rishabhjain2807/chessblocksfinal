import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { chesspieces } from '../assets';

const Hero = () => {
  return (

    <section
      className="relative flex sm:flex-row flex-col w-full h-screen mx-auto ">

      <div>
        <img
          className="absolute top-20 left-0 z-0  w-screen"
          src={chesspieces}
          alt="chesspieces"
        />
      </div>
    </section>

  );
};

export default Hero;