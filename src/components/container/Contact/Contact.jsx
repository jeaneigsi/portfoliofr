import React from "react";
import "./Contact.scss";
import { contacts } from "../../../Data";
import { socialIcons } from "../../../Data";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Prendre rendez vous</span>
        <h1>Me Contacter</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Hey, bienvenue !</h3>
          <p className="contact_text">
            Je suis ouvert à toutes opportunités de partenariat, contrat et
            alternance/stage au sein de votre entreprise. Collaborons en
            entamant une conversation.
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
              return <div key={index} href={socialIcon.href}>{socialIcon.icon}</div>;
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          <h3>Me Contacter</h3>
          <div className="row">
            <input type="text" placeholder="Prénom" />
            <input type="text" placeholder="Nom" />
          </div>
          <div className="row">
            <input type="text" placeholder="Telephone" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="row">
            <textarea placeholder="message"></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="btn"
          >
            <a href="#">Envoi</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
