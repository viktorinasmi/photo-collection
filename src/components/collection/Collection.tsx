// @ts-ignore
import styles from "./Collection.module.scss";
import { ICollection } from "../../types/ICollection";

export const Collection = ({ name, photos, category }: ICollection) => {
  return (
    <div className={styles.container}>
      <img className={styles.collection__big} src={photos[0]} alt="Item" />
      <div className={styles.collection__bottom}>
        <img className={styles.collection__mini} src={photos[1]} alt="Item" />
        <img className={styles.collection__mini} src={photos[2]} alt="Item" />
        <img className={styles.collection__mini} src={photos[3]} alt="Item" />
      </div>
      <div className={styles.title}>{name}</div>
    </div>
  );
};
