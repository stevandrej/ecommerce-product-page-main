import styles from './ButtonCart.module.css';

const ButtonCart = (props) => {
  return <button className={styles.btn}>{props.children}</button>;
};

export default ButtonCart;
