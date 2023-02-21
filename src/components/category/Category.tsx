// @ts-ignore
import styles from "./Category.module.scss";
import cn from "classnames";

type ITypeItem = {
  label: string;
};

interface ICategory {
  category: ITypeItem[];
  categoryTab: string;
  onClick: (label: string) => void;
}

export const Category = ({ category, categoryTab, onClick }: ICategory) => {
  return (
    <div className={styles.container}>
      <>
        {category.map((item) => {
          return (
            <div
              key={item.label}
              className={cn(styles.wrapper, {
                [styles.wrapper_active]: item.label === categoryTab,
              })}
              onClick={() => onClick(item.label)}
            >
              {item.label}
            </div>
          );
        })}
      </>
      <input className={styles.input} placeholder="Поиск по названию" />
    </div>
  );
};
