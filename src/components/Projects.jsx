import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';


const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>What is chessblocks?</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Symbolism</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[20px] max-w-10xl leading-[30px] ">
          ChessBlocks include 4 major categories <br></br>
          <div className=''>
            <div>1. Chess Piece</div>
            <div>2. Team</div>
            <div>3. Mood</div>
            <div>4. Accessories</div>
          </div>
          <br></br>

          <span className='text-[22px] font-bold'>Chess Pieces</span>
          <div>There are 6 chess pieces in the drop<br></br>
            <div className=''>
              <div>1. King</div>
              <div>2. Queen </div>
              <div>3. Bishop</div>
              <div>4. Knight</div>
              <div>5. Rook</div>
              <div>6. Pawn</div>
            </div>
          </div>

          <br></br>
          <div>A collector can get any of the above with rarities based on how valuable a piece is on chess board. The more valuable it is the rarer chances of getting it.
            The intention of doing it was to make the experience of collecting the drop similar to that of playing a match. It takes more efforts to get a high value piece.
          </div>
          <br></br>


          <span className='text-[22px] font-bold'>Team</span>
          <div>There are two ways in which teams function. One on chessboard - White and Black pieces and another outside chess board based on the team you are representing (for eg. your country or your uni)
            <br></br>
            On chess board- the pieces are divided in 4 colors. The usual Black & White plus additional rare ones called ‘Divine’ and ‘Zombie’
            <br></br>
            Off chess board- The teams are divided based on their outfits, like in sports event. There are 11 outfits with different rarities to create your team in.
            You can have an experience of collecting all the pieces of one team and create your army.
            An army of Royal pieces or maybe an army of ninja pieces. Upto you which one connects with you more
            You are the captain so you decide the team you want to create
          </div>
          <br></br>

          <span className='text-[22px] font-bold'>Mood</span>
          <div>
            Chess is a game of intense emotions. And with this project I wanted to showcase the range of it. Those emotions also belong to each piece on board (if they could express it in some world) for eg, If a piece is at a strong position, they must be smiling, or maybe if they are about to be sacrificed they are sad. Every piece has an experience from when they start from move 1 till the time game ends.
            <br></br>
            Not only that, but the base of each piece also has ‘Battle’ category where it tells what kind of game it is part of. Is it Tactical, positional or Double edged.
          </div>
          <br></br>
          <span className='text-[22px] font-bold'>Accessories</span>
          <div>There are many traits added to give more character and story to the chess pieces. For example traits like ‘Trapped’ and ‘Pinned’ (a concept in chess where an attacking piece appears to attack a less valuable piece, but is actually exerting pressure on a more valuable piece behind it, which cannot move without exposing the less valuable piece to capture).
            The pieces also interact with the mouse, symbolising the importance of vision in a game. A great player doesn’t overlook any side of the board 🙂
          </div>
        </motion.p>
      </div >


    </div >
  );
};

export default SectionWrapper(Projects, 'symbolism');
