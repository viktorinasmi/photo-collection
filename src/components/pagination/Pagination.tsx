// @ts-ignore
import styles from "./Pagination.module.scss";
import cn from "classnames";

export const Pagination = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pagination}>1</div>
      <div className={cn(styles.pagination, styles.pagination_active)}>2</div>
      <div className={styles.pagination}>3</div>
    </div>
  );
};
