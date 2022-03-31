import styles from "./ButtonCart.module.css";
import PropTypes from "prop-types";

const ButtonCart = ({ click = () => {}, ...props }) => {
  return (
    <button className={styles.btn} onClick={click}>
      {props.children}
    </button>
  );
};

export default ButtonCart;

ButtonCart.propTypes = {
  click: PropTypes.func,
};
