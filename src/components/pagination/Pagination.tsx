// @ts-ignore
import styles from "./Pagination.module.scss";
import cn from "classnames";

interface IPagination {
  page: number;
  onClick: (idx: number) => void;
}

export const Pagination = ({ page, onClick }: IPagination) => {
  return (
    <div className={styles.container}>
      {[...Array(5)].map((_, i) => (
        <div
          onClick={() => onClick(i + 1)}
          className={cn(styles.pagination, {
            [styles.pagination_active]: page === i + 1,
          })}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};
