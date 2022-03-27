import styles from "./Gallery.module.css";
import image1 from "images/image-product-1.jpg";
import image1Thumbnail from "images/image-product-1-thumbnail.jpg";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <img
        className={styles["image-main"]}
        src={image1}
        alt="main gallery"
      />
      <ul className={styles["images-list"]}>
        <li><img src={image1Thumbnail} alt="1 thumbnail"/></li>
        <li><img src={image1Thumbnail} alt="2 thumbnail"/></li>
        <li><img src={image1Thumbnail} alt="3 thumbnail"/></li>
        <li><img src={image1Thumbnail} alt="4 thumbnail"/></li>
      </ul>
    </div>
  );
};

export default Gallery;
