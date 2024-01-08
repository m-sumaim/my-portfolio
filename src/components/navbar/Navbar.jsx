import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
         
        </motion.span>
        <div className="social">
          <a href="https://github.com/m-sumaim">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/mohd-al-sumaim-33a216227/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://play.google.com/store/apps/dev?id=6189649614706872896&hl=en_US">
            <img src="/playstore.png" alt="" />
          </a>
          <a href="https://twitter.com/al_sumaim">
            <img src="/twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
