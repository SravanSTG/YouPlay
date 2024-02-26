import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CategoryType } from "../interfaces";
import { allVideoCategoriesUrl, categoryVideosUrl } from "../constants";

const Category = () => {
  const [videoCategoriesList, setVideoCategoriesList] = useState<CategoryType[]>([]);
  const [categoryId, setCategoryId] = useState<string>("we");
  
  const { category } = useParams();
  // console.log(category, categoryId);
  
  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    getCategoryId();
  }, [category, videoCategoriesList]);

  useEffect(() => {
    getVideosFromCategory();
  }, [categoryId]);

  const getAllCategories = async () => {
    const data = await fetch(allVideoCategoriesUrl + import.meta.env.VITE_API_KEY);
    const json = await data.json();
    setVideoCategoriesList(json.items);
  };

  const getCategoryId = () => {
    videoCategoriesList.map((categoryItem) => {
      if (categoryItem.snippet.title.toLowerCase().includes(category!)) {
        setCategoryId(categoryItem.id);
      }
    });
  };

  const getVideosFromCategory = async () => {
    const data = await fetch(`${categoryVideosUrl}${categoryId}&key=${import.meta.env.VITE_API_KEY}`);
    const json = await data.json();
    console.log(json);
  }

  return <div className="col-span-11">Category</div>;
};

export default Category;
