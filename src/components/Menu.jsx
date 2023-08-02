import MenuItem from "./MenuItem";
import {Data} from "../api/data";
import styles from "../assets/menu.module.css";
const Menu = () => {
  return (
    <div>
      <div className={styles.menu}>
        <h1 className={styles.menuTitle}>Burger</h1>
        <div className={styles.menuList}>
          {Data.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                content={menuItem.content}
                price={menuItem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
