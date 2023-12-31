import React, { useState } from 'react'
import "./Competences.scss";
import { icons } from '../../../Data';
import { experiences } from '../../../Data';
import { finishes } from '../../../Data';
import { motion } from 'framer-motion';
const Competences = () => {
  const [active, setActive] = useState(1)
  return (
    <div className="container" id="Competences">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}  
        className="title"
      >
        <span style={{color:"#D65182"}}>Savoir faire & être ?</span>
        <h1>Compétences et Expériences</h1>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="select"
      >
        <button
          onClick={() => setActive(1)}
          className={active === 1 ? "active" : ""}>Compétences</button>
        <button
          onClick={() => setActive(2)}
          className={active === 2 ? "active" : ""}
        >Expériences</button>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="Competences"
      >
        {active === 1 && icons.map((icon, index) => {
          return (
            <div key={index} className="tools" >
              {icon}
            </div>
          )
        })}
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="experiencs"
      >
        {active === 2 && experiences.map(experience => {
          return (
            <div className="experience" key={experience.id}>
              <span>{experience.year}</span>
              <div className="position">
                <h3>{experience.position}</h3>
                <p>{experience.company}</p>
              </div>
            </div>
          )
        })}
        </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="finishes_container"
      >
        {finishes.map(finish => {
        return (
          <div className='finishes' key={finish.id}>
            <div className='number'>{finish.number}</div>
            <h4 className='item_name'>{finish.itemName }</h4>
          </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Competences