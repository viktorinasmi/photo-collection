import { Category } from "../../category";
import { Collection } from "../../collection";
import { Pagination } from "../../pagination";
// @ts-ignore
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import { ICollection } from "../../../types/ICollection";

export const Home = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  // function Collection({})

  const [collections, setCollections] = useState<ICollection[]>([]);
  console.log(collections);

  useEffect(() => {
    const category = categoryId ? `category=${categoryId}` : "";

    setIsLoading(true);
    fetch(
      `https://63f4969a3f99f5855db2e414.mockapi.io/photo_collections?page=${page}&limit=3${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка при получении данных");
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

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
        onClick={setCategoryId}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className={styles.wrapper__photos}>
        {isLoading ? (
          <h2>Идёт загрузка ....</h2>
        ) : (
          collections
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => (
              <Collection key={obj.index} name={obj.name} photos={obj.photos} />
            ))
        )}
      </div>
      <Pagination onClick={setPage} page={page} />
    </div>
  );
};
