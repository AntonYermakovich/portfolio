import { Link } from "react-scroll";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Anton</h1>
            <span className="footer__subtitle">Junior frontend Developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                className="footer__link"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                className="footer__link"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="footer__link"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/anton-yermakovich-372715192/"
              target="_blank"
              className="footer__social"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/antonyermakovich/"
              target="_blank"
              className="footer__social"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/AntonYermakovich"
              target="_blank"
              className="footer__social"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <p className="footer__copy">&#169; All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
