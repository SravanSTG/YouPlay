import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import SearchResultCard from "./SearchResultCard";
import { SearchVideoCardType } from "../interfaces";
import { searchVideosUrl } from "../constants";

const SearchResults = () => {
  const [searchResultsList, setSearchResultsList] = useState<SearchVideoCardType[]>([]);

  const searchQuery = useSelector((store: RootState) => store.search.searchQuery);

  const isSidebarOpen = useSelector((store: RootState) => store.sidebar.isMenuOpen);

  const style = {
    display: window.innerWidth < 640 && isSidebarOpen ? "none" : "block",
  };

  useEffect(() => {
    getSearchedVideosList();
  }, [searchQuery]);

  const getSearchedVideosList = async () => {
    const data = await fetch(
      `${searchVideosUrl}${searchQuery}&type=video&key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const json = await data.json();
    setSearchResultsList(json.items);
    // console.log(json.items);
  };

  return (
    <div className="col-span-11" style={style}>
      {searchResultsList.map((video: SearchVideoCardType) => (
        <SearchResultCard key={video.id.videoId} videoInfo={video} />
      ))}
    </div>
  );
};

export default SearchResults;
