import { Category } from "../../category";
import { Collection } from "../../collection";
import { Pagination } from "../../pagination";
// @ts-ignore
import styles from "./Home.module.scss";
import { useState } from "react";

export const Home = () => {
  const [categoryTabValue, setCategoryTabValue] = useState("Все");
  // function Collection({})

  const categoryList = [
    {
      label: "Все",
    },
    {
      label: "Горы",
    },
    {
      label: "Море",
    },
    {
      label: "Архитектура",
    },
    {
      label: "Города",
    },
  ];

  const handleCategoryTabClick = (label: any) => {
    setCategoryTabValue(label);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Моя коллекция фотографий</div>
      <Category
        category={categoryList}
        categoryTab={categoryTabValue}
        onClick={handleCategoryTabClick}
      />
      <Collection />
      <Pagination />
    </div>
  );
};
