import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Pahari Dictionary",
    img: "https://play-lh.googleusercontent.com/zLB55XpiNJW6wjeEJUwQlcNwf0o2Vk1BclMzU2gBpWmJZMJHXokn7f0KBt_15UX0vIk",
    desc: "The very first app dedicated to Pahari/Pothwari language of Jammu and Kashmir! An offline app empowering Pahari/Pothwari speakers and learners alike. With over 22,000 words and an ever-growing open-source database, it seamlessly translates between Pahari/Pothwari and Urdu, complete with pronunciations for clear understanding. Users can save their favorites, track their progress, and even contribute to the collective knowledge base. This project has been a joy – fostering cultural preservation, language exploration, and community connect.",
    demoUrl: "https://play.google.com/store/apps/details?id=com.sumaim.pahariDictionary&hl=en_US"
  },
  {
    id: 2,
    title: "Password Genie",
    img: "https://play-lh.googleusercontent.com/Q3TnPWrCreufzHUI5xqce4VSlF_4nQatC1Z3ugyp7zJcHx-KtkjHVNEG9fUAxVnULjQ=w480-h960",
    desc: "A comprehensive password management solution designed to alleviate the complexities of credential management. The app prioritizes the security of sensitive information, employing Advanced Encryption Standard (AES) 256-bit encryption for robust password storage. A fortified master password, complemented by Face ID and Biometric Authentication, ensures an additional layer of protection against unauthorized access. A custom password generator simplifies the process of creating strong and unique passwords tailored to your needs. Operating completely offline, Password Genie eliminates the risk of data leaks, providing a secure and organized environment for managing your credentials.",
    demoUrl: "https://play.google.com/store/apps/details?id=com.sumaim.passwordgenie&hl=en_US"
  },
  {
    id: 3,
    title: "Farm Fusion",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Farm Fusion revolutionizes agriculture by seamlessly integrating technology into farming practices. A smart crop quality detection system utilizes image analysis to empower farmers with valuable insights, facilitating transparent produce marketing and informed consumer choices. Through soil quality detection and a machine learning-based Crop and Fertilizer Recommendation System, we optimize resource allocation, reduce input costs, and ensure sustainable farming practices. The e-commerce platform streamlines transactions, allowing customers to select products based on quality parameters. Farm Fusion is dedicated to creating a transparent and efficient agricultural supply marketplace, bridging the gap between technology and farming for a sustainable future.",
    demoUrl: "https://github.com/m-sumaim/Farm-Fusion"
  },
  {
    id: 4,
    title: "Type Arena",
    img: "https://papers.co/wallpaper/papers.co-nl78-dark-red-keyboard-coding-29-wallpaper.jpg",
    desc: "Type Arena represents a significant step forward in the realm of typing speed testing. This project involved the development of a sophisticated website equipped with a JavaScript timer and accuracy metric to calculate Words Per Minute (WPM). The innovation extends beyond conventional metrics, incorporating calculations for Count Per Minute and Mistakes. This unique feature allows for real-time adjustments to typing speed, fostering increased efficiency and reduced errors. This engaging and interactive platform not only provides users with accurate metrics but also offers a visually appealing experience, making the journey of improving typing proficiency both effective and enjoyable.",
    demoUrl: "https://m-sumaim.github.io/Type-Arena/"
  },
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* Use the anchor (a) element for the button and set the href attribute */}
            <a href={item.demoUrl} target="_blank" rel="noopener noreferrer">
              <button>Visit!</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;