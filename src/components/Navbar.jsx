import {Link} from "react-router-dom"
import styles from "../assets/navbar.module.css"
import Logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}><img src={Logo}/></div>
      <div className="menu">
        <ul className={styles.list}>
         <Link to="/"><li>Menu</li></Link>
         <Link to="/about"><li>About Us</li></Link>
         <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
