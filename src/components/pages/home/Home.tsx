import { Category } from "../../category";
import { Collection } from "../../collection";
import { Pagination } from "../../pagination";
// @ts-ignore
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { ICollection } from "../../../types/ICollection";

export const Home = () => {
  const [categoryTabValue, setCategoryTabValue] = useState("Все");
  // function Collection({})

  const [collections, setCollections] = useState<ICollection[]>([]);

  useEffect(() => {
    fetch("https://63f4969a3f99f5855db2e414.mockapi.io/photo_collections")
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка при получении данных");
      });
  }, []);

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
      <div className={styles.wrapper__photos}>
        {collections.map((obj, category) => (
          <Collection key={obj.category} name={obj.name} photos={obj.photos} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};
