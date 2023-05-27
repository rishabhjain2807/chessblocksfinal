import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { chesspieces } from '../assets';

const Hero = () => {
  return (


    <div >
      <img
        className="relative flex sm:flex-row flex-col w-full mx-auto absolute top-10 left-0 z-0 w-screen"
        src={chesspieces}
        alt="chesspieces"

      />
    </div>


  );
};

export default Hero;