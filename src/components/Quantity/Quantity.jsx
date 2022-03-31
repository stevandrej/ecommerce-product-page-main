import PropTypes from "prop-types";
import styles from "./Quantity.module.css";
import plusIcon from "images/icon-plus.svg";
import minusIcon from "images/icon-minus.svg";

const Quantity = ({ quantity = 0, setQuantity = () => {} }) => {
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className={styles.quantity}>
      <button onClick={decreaseQuantity}>
        <img src={minusIcon} alt="minus" className={styles.minus} />
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(newValue) => setQuantity(newValue)}
      />
      <button onClick={increaseQuantity}>
        <img src={plusIcon} alt="plus" />
      </button>
    </div>
  );
};

export default Quantity;

Quantity.propTypes = {
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
};
