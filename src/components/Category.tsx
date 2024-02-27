import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CategoryType, SearchVideoCardType } from "../interfaces";
import { allVideoCategoriesUrl, categoryVideosUrl } from "../constants";
import SearchResultCard from "./SearchResultCard";

const Category = () => {
  const [videoCategoriesList, setVideoCategoriesList] = useState<CategoryType[]>([]);
  const [categoryId, setCategoryId] = useState<string>("");
  const [categoryVideos, setCategoryVideos] = useState<SearchVideoCardType[]>([]);

  const { category } = useParams();

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    getCategoryId();
  }, [category, videoCategoriesList]);

  useEffect(() => {
    if (categoryId) {
      getVideosFromCategory();
    }
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
    setCategoryVideos(json.items);
  };

  return (
    <div className="col-span-11">
      {categoryVideos &&
        categoryVideos.map((video) => (
          <SearchResultCard key={video.id.videoId} videoInfo={video} />
        ))}
    </div>
  );
};

export default Category;
