import { Category } from "../../category";
import { Collection } from "../../collection";
import { Pagination } from "../../pagination";
// @ts-ignore
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { ICollection } from "../../../types/ICollection";

export const Home = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  // function Collection({})

  const [collections, setCollections] = useState<ICollection[]>([]);

  useEffect(() => {
    fetch(
      `https://63f4969a3f99f5855db2e414.mockapi.io/photo_collections${
        categoryId ? `category=${categoryId}` : ""
      }`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка при получении данных");
      });
  }, [categoryId]);

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

  // const handleCategoryTabClick = (e: any) => {
  //   setCategoryId(e.target.value);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Моя коллекция фотографий</div>
      <Category
        category={categoryList}
        categoryId={categoryId}
        onClick={() => setCategoryId}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className={styles.wrapper__photos}>
        {collections
          //   фильтер коллекции по инпуту перед рендером
          .filter((obj) =>
            obj.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((obj, index) => (
            <Collection key={obj.index} name={obj.name} photos={obj.photos} />
          ))}
      </div>
      <Pagination />
    </div>
  );
};
