import { Element } from "react-scroll";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { useForm, SubmitHandler } from "react-hook-form";
import { TInputs } from "../../types";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";

const TG_BOT_TOKEN: string = "7236986266:AAGOApaeNBVR9kx3U_ZpdKobPyNQAtsvaos";
const TG_CHAT_ID: string = "@AY_FRONT";
const API: string = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;

const MUp = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, y: 100 },
};

const Contacts = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInputs>();

  const submitFormHandler: SubmitHandler<TInputs> = async (data) => {
    const text = `Заявка от: ${data.name}\nEmail: ${data.email}\nНазвание проекта: ${data.project}\nСообщение: ${data.message}`;

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text,
        }),
      });

      if (response.ok) {
        setShowModal((prev) => !prev);
        reset();
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
      console.log("Упс...Что-то пошло не так. Попробуйте позже.");
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");
    showModal
      ? body?.classList.add("body_hidden")
      : body?.classList.remove("body_hidden");
  }, [showModal]);
  return (
    <Element name="contacts" className="section contact">
      <motion.h2
        variants={MUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        custom={0.3}
        className="section__title"
      >
        Contact Me
      </motion.h2>
      <motion.span
        variants={MUp}
        initial="hidden"
        whileInView="visible"
        custom={0.6}
        viewport={{ once: true, amount: 0.8 }}
        className="section__subtitle"
      >
        Get in touch
      </motion.span>

      <div className="contact__container container grid">
        <div>
          <motion.div
            variants={MUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            custom={0.3}
            className="contact__information"
          >
            <IoPhonePortraitOutline className="contact__icon" />

            <div>
              <h3 className="contact__title">Call me</h3>
              <a href="tel:+375333757900" className="contact__subtitle">
                +375 (33) 375 79 00
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={MUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            custom={0.6}
            className="contact__information"
          >
            <IoMdMail className="contact__icon" />

            <div>
              <h3 className="contact__title">Email</h3>
              <a
                href="mailto:antonyermakovich@gmail.com"
                className="contact__subtitle"
              >
                antonyermakovich@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={MUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            custom={0.9}
            className="contact__information"
          >
            <FaLocationDot className="contact__icon" />

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Belarus - Minsk</span>
            </div>
          </motion.div>
        </div>

        <form
          className="contact__form grid"
          onSubmit={handleSubmit(submitFormHandler)}
        >
          <div className="contact__inputs grid">
            <motion.div
              variants={MUp}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              viewport={{ once: true, amount: 0.8 }}
              className="contact__content"
            >
              <label
                htmlFor="name"
                className={`contact__label ${
                  errors.name?.message ? "contact__label_error" : ""
                }`}
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="contact__input"
                {...register("name", { required: "This field is requred" })}
              />
            </motion.div>
            <motion.div
              variants={MUp}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              viewport={{ once: true, amount: 0.8 }}
              className="contact__content"
            >
              <label
                htmlFor="email"
                className={`contact__label ${
                  errors.email?.message ? "contact__label_error" : ""
                }`}
              >
                Email
              </label>
              <input
                id="email"
                className="contact__input"
                {...register("email", {
                  required: "This field is requred",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Incorrect email",
                  },
                })}
              />
            </motion.div>
          </div>
          <motion.div
            variants={MUp}
            initial="hidden"
            whileInView="visible"
            custom={0.6}
            viewport={{ once: true, amount: 0.8 }}
            className="contact__content"
          >
            <label
              htmlFor="projectInput"
              className={`contact__label ${
                errors.project?.message ? "contact__label_error" : ""
              }`}
            >
              Project
            </label>
            <input
              id="projectInput"
              type="text"
              className="contact__input"
              {...register("project", { required: "This field is requred" })}
            />
          </motion.div>
          <motion.div
            variants={MUp}
            initial="hidden"
            whileInView="visible"
            custom={0.9}
            viewport={{ once: true, amount: 0.8 }}
            className="contact__content"
          >
            <label
              htmlFor="message"
              className={`contact__label ${
                errors.message?.message ? "contact__label_error" : ""
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              cols={0}
              rows={7}
              className="contact__input"
              {...register("message", { required: "This field is requred" })}
            ></textarea>
          </motion.div>

          <motion.div
            variants={MUp}
            initial="hidden"
            whileInView="visible"
            custom={1.2}
            viewport={{ once: true, amount: 0.8 }}
          >
            <button className="button button--flex">
              Send Message
              <HiOutlinePaperAirplane className="button__icon" />
            </button>
          </motion.div>
        </form>
      </div>

      <Modal show={showModal} setShow={setShowModal}>
        <div className="modal__content">
          <h3>Thank you for your message.</h3>
          <p>I will contact you soon.</p>
          <button
            onClick={() => setShowModal((prev) => !prev)}
            className="button button--flex"
          >
            Close
          </button>
        </div>
      </Modal>
    </Element>
  );
};

export default Contacts;
