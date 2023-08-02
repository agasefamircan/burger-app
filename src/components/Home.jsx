import { Link } from "react-router-dom";
import styles from "../assets/home.module.css";
const Home = () => {
  return (
    <div
      className={styles.mainPage}
      
    >
      <div className={styles.order}>
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
