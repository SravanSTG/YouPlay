import { ReactElement } from "react";

const Shimmer = () => {
  const renderVideoCards = () => {
    const numberOfCards = 48;
    const videoCards: ReactElement[] = [];

    for (let i = 0; i < numberOfCards; i++) {
      videoCards.push(
        <div key={i} className="mb-8">
          <div className="h-40 w-72 rounded-lg bg-gray-100"></div>
          <p className="mt-3 bg-gray-100 h-5 rounded-full"></p>
          <p className="mt-3 bg-gray-100 h-5 rounded-full"></p>
          <p className="mt-3 bg-gray-100 h-5 rounded-full"></p>
        </div>
      );
    }

    return videoCards;
  };

  return (
    <div className="col-span-11 p-6">
      <div className="flex flex-wrap gap-x-5 justify-evenly">{renderVideoCards()}</div>
    </div>
  );
};

export default Shimmer;
