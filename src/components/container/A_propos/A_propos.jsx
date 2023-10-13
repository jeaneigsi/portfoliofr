import React from "react";
import profile from "../../../assets/profile.png"
import "./A_propos.scss";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
import portfolio from "../../../assets/portfolio.jpg";
const A_propos = () => {
  return (
    <div className="container " id="A_propos">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span style={{color:"#D65182"}}>Qui suis je ?</span>
        <h1>A_propos</h1>
      </motion.div>

      <div className="A_propos_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="A_propos_left"
        >
          <motion.img
            src={profile}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="A_propos_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            Je suis un développeur Full Stack spécialisé en MERN Stack. Mon
            objectif : créer des solutions web performantes et innovantes pour
            répondre aux besoins concrets de mes clients.
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            href="cv.pdf"
            download="cv.pdf"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Telecharger le CV 
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default A_propos;
