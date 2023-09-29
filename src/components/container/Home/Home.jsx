import React from 'react'
import portfolio from "../../../assets/portfolio.jpg"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Hey ! Je suis <span>Jean Olivier</span> </h3>
        <span className='job'>Developpeur Web et Mobile depuis 3 ans.</span>
        <span className='text'>Je construis<br /> des applications Web<br /> et Mobile pour les entreprises.</span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Me Contacter</motion.a>
        <motion.div
          className="web"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"

        >
          Developpeur fullstack
        </motion.div>
        <motion.div
          className="ui"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
           Data analyste
  
        </motion.div>
        <motion.div
          className="freelance"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
         Ingenieur industriel
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home