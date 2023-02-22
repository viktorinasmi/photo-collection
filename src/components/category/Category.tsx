// @ts-ignore
import styles from "./Category.module.scss";
import cn from "classnames";

type ITypeItem = {
  label: string;
};

interface ICategory {
  category: ITypeItem[];
  categoryId: number;
  onClick: () => void;
  value: string;
  onChange: (e: any) => void;
}

export const Category = ({
  category,
  categoryId,
  onClick,
  value,
  onChange,
}: ICategory) => {
  return (
    <div className={styles.container}>
      <>
        {category.map((item, i) => {
          return (
            <div
              key={item.label}
              className={cn(styles.wrapper, {
                [styles.wrapper_active]: categoryId === i,
              })}
              onClick={() => onClick(i)}
            >
              {item.label}
            </div>
          );
        })}
      </>
      <input
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder="Поиск по названию"
      />
    </div>
  );
};
