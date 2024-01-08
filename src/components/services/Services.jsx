import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Sparking</motion.b> Creativity
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Forging</motion.b> Code.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Android Development</h2>
          <p>
          Design and build high-performance, scalable Android applications to deliver exceptional 
          user experiences and robust functionality.
          </p>
          <button>Kotlin, Android SDK, Jetpack</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
          Crafting dynamic and engaging web applications to meet diverse client 
          requirements and ensure seamless online experiences.
          </p>
          <button>HTML, CSS, JS, React</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>DevOps</h2>
          <p>
          Implement and manage efficient, secure software delivery pipelines to automate tasks, 
          optimize workflows, and ensure accelerated development cycles.
          </p>
          <button>AWS, Docker, Jenkins, Linux </button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Problem Solving</h2>
          <p>
          Untangle intricate problems, architecting elegant 
          algorithms and illuminating insights from hidden data. 
          </p>
          <button>C++, Python, SQL</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
