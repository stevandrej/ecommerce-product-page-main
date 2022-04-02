import styles from "./Product.module.css";
import ButtonCart from "components/ButtonCart/ButtonCart";
import Quantity from "components/Quantity/Quantity";
import Gallery from "components/Gallery/Gallery";
import { useContext, useState } from "react";
import { CartContext } from "store/cart";

const Product = () => {
  const currentProduct = {
    id: "sneakers_01",
    name: "Fall Limited Edition Sneakers",
    brand: "SNEAKER COMPANY",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 250.0,
    sale: 125.0,
    discount_percent: "50%",
  };

  const cartContext = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0)
      cartContext.addToCart({
        product: currentProduct,
        quantity: quantity,
      });
  };

  console.log(cartContext.cart);

  return (
    <div className={`page ${styles["product-page"]}`}>
      <div className={styles.gallery}>
        <Gallery />
      </div>

      <main className={styles.content}>
        <div className={`text-caption ${styles.caption}`}>
          {currentProduct.brand}
        </div>
        <h1>{currentProduct.name}</h1>

        <p className={`${styles["content-text"]} text-body-2`}>
          {currentProduct.description}
        </p>

        <div>
          <div className={styles["current-price"]}>
            {currentProduct.sale && (
              <div className={styles.price}>${currentProduct.sale}</div>
            )}
            {currentProduct.discount_percent && (
              <div className={styles["price-discount"]}>50%</div>
            )}
          </div>

          <div className={styles["price-old"]}>${currentProduct.price}</div>
        </div>

        <div className={styles.order}>
          <div className={styles.quantity}>
            <Quantity quantity={quantity} setQuantity={setQuantity} />
          </div>
          <div className={styles["btn-cart"]}>
            <ButtonCart click={handleAddToCart}>
              <svg
                className={styles["cart-icon"]}
                width="22"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fillRule="nonzero"
                />
              </svg>
              Add to cart
            </ButtonCart>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
