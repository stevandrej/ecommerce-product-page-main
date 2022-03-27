import styles from "./Quantity.module.css";
import plusIcon from "images/icon-plus.svg";
import minusIcon from "images/icon-minus.svg";

const Quantity = () => {
  return (
    <div className={styles.quantity}>
      <button>
        <img src={minusIcon} alt="minus" className={styles.minus}/>
      </button>
      <input type="number" defaultValue={0}/>
      <button>
        <img src={plusIcon} alt="plus" />
      </button>
    </div>
  );
};

export default Quantity;
