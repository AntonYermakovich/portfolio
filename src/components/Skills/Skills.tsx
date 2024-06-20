import { Element } from "react-scroll";
import { FaAngleDown, FaServer } from "react-icons/fa6";
import { PiBracketsCurlyLight } from "react-icons/pi";
import { FaSwatchbook } from "react-icons/fa";
import SkillsContent from "./SkillsContent/SkillsContent";
import { motion } from "framer-motion";

const MUp = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, y: 100 },
};

const Skills = () => {
  return (
    <Element name="skills" className="section skills">
      <motion.h2
        variants={MUp}
        custom={0}
        viewport={{ once: true, amount: 0.8 }}
        initial="hidden"
        whileInView="visible"
        className="section__title"
      >
        Skills
      </motion.h2>
      <motion.span
        variants={MUp}
        custom={0.3}
        viewport={{ once: true, amount: 0.8 }}
        initial="hidden"
        whileInView="visible"
        className="section__subtitle"
      >
        My technical level
      </motion.span>

      <div className="skills__container container grid">
        <SkillsContent
          skills={[
            { title: "HTML", value: 95 },
            { title: "CSS", value: 90 },
            { title: "JavaScript", value: 95 },
            { title: "React", value: 90 },
          ]}
        >
          <div className="skills__header">
            <PiBracketsCurlyLight className="skills__icon" />
            <div>
              <h1 className="skills__title">Frontend developer</h1>
              <span className="skills__subtitle">More than 1 year</span>
            </div>
            <FaAngleDown className="skills__arrow" />
          </div>
        </SkillsContent>

        <SkillsContent
          skills={[
            { title: "Node.js", value: 85 },
            { title: "Postgres", value: 80 },
            { title: "MySQL", value: 75 },
            { title: "MongoDB", value: 90 },
          ]}
        >
          <div className="skills__header">
            <FaServer className="skills__icon" />

            <div>
              <h1 className="skills__title">Backend developer</h1>
              <span className="skills__subtitle">Less than 1 year</span>
            </div>

            <FaAngleDown className="skills__arrow" />
          </div>
        </SkillsContent>

        <SkillsContent
          skills={[
            { title: "Figma", value: 90 },
            { title: "Photoshop", value: 80 },
            { title: "Avocado", value: 80 },
            { title: "Sketch", value: 75 },
          ]}
        >
          <div className="skills__header">
            <FaSwatchbook className="skills__icon" />

            <div>
              <h1 className="skills__title">Desinger</h1>
              <span className="skills__subtitle">More than 5 months</span>
            </div>

            <FaAngleDown className="skills__arrow" />
          </div>
        </SkillsContent>
      </div>
    </Element>
  );
};

export default Skills;
