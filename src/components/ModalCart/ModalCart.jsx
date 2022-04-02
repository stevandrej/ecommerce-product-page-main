import styles from "./ModalCart.module.css";
import productThumbnail from "images/image-product-1-thumbnail.jpg";
import trashIcon from "images/icon-delete.svg";
import { useContext } from "react";
import { CartContext } from "store/cart";

const ModalCart = ({ open, onClose = () => {} }) => {
  const cartContext = useContext(CartContext);

  return open ? (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles["cart-modal"]}>
        <div className={`${styles.heading} text-emphasize`}>Cart</div>
        <div className={styles.content}>
          <ul className={styles["cart-list"]}>
            {cartContext.cart.length > 0 ? (
              cartContext.cart.map((item, index) => {
                return (
                  <CartItem
                    key={`${item.product.id}_${index}`}
                    name={item.product.name}
                    price={
                      item.product.sale ? item.product.sale : item.product.price
                    }
                    quantity={item.quantity}
                  />
                );
              })
            ) : (
              <p>Your cart is empty!</p>
            )}
          </ul>
          <button className={styles["btn-checkout"]}>Checkout</button>
        </div>
      </div>
    </>
  ) : null;
};

const CartItem = ({ name = "", price = 0, quantity = 0 }) => {
  return (
    <li className={styles["list-item"]}>
      <img
        src={productThumbnail}
        alt="product thumb"
        width={48}
        height={48}
        className={styles["product-thumbnail"]}
      />
      <div className="text-body-2">
        <div>{name}</div>
        <div>
          ${price} x {quantity}
          <span className="text-emphasize">
            &nbsp; ${parseFloat(price) * parseFloat(quantity)}
          </span>
        </div>
      </div>
      <div className={styles.delete}>
        <img src={trashIcon} alt="delete" />
      </div>
    </li>
  );
};

export default ModalCart;
