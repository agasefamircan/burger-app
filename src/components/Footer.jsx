import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "../assets/footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
      <Link to="https://www.linkedin.com/in/agasefamircan/" target="_blank">  <LinkedInIcon/></Link>
        <FacebookIcon />
        <InstagramIcon />
      </div>
      <p>&copy; 2019</p>
    </div>
  );
};

export default Footer;
