import { motion } from "framer-motion";
import { useState } from "react";
import { TSkillsContent } from "../../../types";

const MUp = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, y: 100 },
};

const SkillsContent = ({ children, skills }: TSkillsContent) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <motion.div
      variants={MUp}
      custom={0.5}
      viewport={{ once: true, amount: 0.8 }}
      initial="hidden"
      whileInView="visible"
      onClick={() => setOpen((prev) => !prev)}
      className={`skills__content ${open ? "skills__open" : "skills__close"}`}
    >
      {children}

      <div className="skills__list grid">
        {skills.map((skill, index) => (
          <div key={index} className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">{skill.title}</h3>
              <span className="skills__number">{skill.value}%</span>
            </div>
            <div className="skills__bar">
              <div
                className={`skills__percentage`}
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsContent;
