import React from "react";
import portfolio from "../../../assets/portfolio.jpg";
import profile from "../../../assets/profile.png";
import "./Accueil.scss";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Accueil = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  const [text] = useTypewriter({
    words: ["Mobile", "Web"],
    loop: {},
  });

  return (
    <motion.div
      className="container "
      id="Accueil"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className="profile">
        <img src={profile} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hey ! Je suis <span>Jean Olivier</span>{" "}
        </h3>
        <span className="job">Developpeur Web et Mobile depuis 3 ans.</span>
        <span className="text">
          Créateur
          <br /> d'app {text}
          <span style={{ color: "red" }}>
            <Cursor />
          </span>
          <br />
          pour les entreprises.
        </span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Me Contacter
        </motion.a>
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
  );
};

export default Accueil;
