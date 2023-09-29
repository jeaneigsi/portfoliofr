import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin , FaPhp, FaPython,FaJava} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaDribbble />,
  <FaInstagram />,
  <FaLinkedin />,
  <BsMedium />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Nom",
    value: "Jean Olivier"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Tel",
    value: "+212 617695389"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "bjo.lompo.25@eigsica.ma"
  }
]

export const icons = [<FaPython />, <FaJava />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaPhp />, <FaFigma />]



export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Developpeur frontend Next/React.",
    company: "Digital TIC - 4 mois"
  },
  {
    id: 2,
    year: "2021",
    position: "Developpeur backend React/Symphony.",
    company: "Dream Tech - 4 mois"
  },
  {
    id: 3,
    year: "2020",
    position: "developpeur mobile et web : React native, MERN Stack.",
    company: "Moncrolio - 5 mois"
  }
]
export const finishes = [
  {
    id: 1,
    number: '+ 2',
    itemName: "Années d'expériences"
  },
  {
    id: 2,
    number: "+ 15",
    itemName: "Clients satisfaits"
  },
  {
    id: 3,
    number: "+ 20",
    itemName: "Projets réalisés"
  },
  {
    id: 4,
    number: "+ 4",
    itemName: "Années d'ingénieurs SI"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design"
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Route de l'oasis, Casablanca"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "bjo.lompo.25@eigsica.ma"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+212 617695389"
  }
]
