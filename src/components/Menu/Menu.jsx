import styles from "./Menu.module.css";
import logo from "images/logo.svg";
import cartIcon from "images/icon-cart.svg";
import userIcon from "images/image-avatar.png";
import { useContext } from "react";
import { CartContext } from "store/cart";

const Menu = () => {
  const menu = [
    {
      name: "Collections",
      id: "menu-collections-1",
    },
    {
      name: "Men",
      id: "menu-men-1",
    },
    {
      name: "Women",
      id: "menu-women-1",
    },
    {
      name: "About",
      id: "menu-about-1",
    },
    {
      name: "Contact",
      id: "menu-contact-1",
    },
  ];

  const cartContext = useContext(CartContext);

  const calculateCartQuantity = () => {
    let q = 0;
    cartContext.cart.forEach((item) => {
      console.log(item.quantity)
      q = q + item.quantity;
    });
    return q;
  };

  return (
    <nav className={styles.navbar}>
      <img
        src={logo}
        alt="logo"
        className={styles.logo}
        width="auto"
        height={24}
      />
      <ul className={styles.menu}>
        {menu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={styles["user-menu"]}>
        <button className={`${styles["button-clean"]} ${styles.cart}`}>
          <img src={cartIcon} alt="cart icon" />
          {cartContext.cart?.length > 0 ? (
            <span className={styles.badge}>{calculateCartQuantity()}</span>
          ) : null}
        </button>

        <button className={`${styles["button-clean"]} ${styles.user}`}>
          <img src={userIcon} alt="user" />
        </button>
      </div>
    </nav>
  );
};

export default Menu;
