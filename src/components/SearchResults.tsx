import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import SearchResultCard from "./SearchResultCard";
import { SearchVideoCardType } from "../interfaces";

const SearchResults = () => {
  const [searchResultsList, setSearchResultsList] = useState<SearchVideoCardType[]>([]);

  const searchQuery = useSelector((store: RootState) => store.search.searchQuery);

  const isSidebarOpen = useSelector((store: RootState) => store.sidebar.isMenuOpen);

  const style = {
    display: window.innerWidth < 640 && isSidebarOpen ? "none" : "block",
  };

  useEffect(() => {
    getSearchedVideosList();
  }, []);

  const getSearchedVideosList = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&type=video&key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const json = await data.json();
    console.log(json.items);
    setSearchResultsList(json.items);
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
