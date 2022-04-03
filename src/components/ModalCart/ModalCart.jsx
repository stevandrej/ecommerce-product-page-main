import styles from "./ModalCart.module.css";
import productThumbnail from "images/image-product-1-thumbnail.jpg";
import trashIcon from "images/icon-delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "redux/actions";

const ModalCart = ({ open, onClose = () => {} }) => {
  const cart = useSelector((state) => state.cartReducer.cart);

  return open ? (
    <>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles["cart-modal"]}>
        <div className={`${styles.heading} text-emphasize`}>Cart</div>
        <div className={styles.content}>
          <ul className={styles["cart-list"]}>
            {cart.length > 0 ? (
              cart.map((item, index) => {
                return (
                  <CartItem
                    key={`${item.product.id}_${index}`}
                    name={item.product.name}
                    price={
                      item.product.sale ? item.product.sale : item.product.price
                    }
                    quantity={item.quantity}
                    id={item.product.id}
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

const CartItem = ({ name = "", price = 0, quantity = 0, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteFromCart(id));
  };

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
      <div
        className={styles.delete}
        onClick={() => {
          handleDelete(id);
        }}
      >
        <img src={trashIcon} alt="delete" />
      </div>
    </li>
  );
};

export default ModalCart;
