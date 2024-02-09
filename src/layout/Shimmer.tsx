import { ReactElement } from "react";
import { ShimmerThumbnail, ShimmerBadge } from "react-shimmer-effects";

const Shimmer = () => {
  const renderVideoCards = () => {
    const numberOfCards = 48;
    const videoCards: ReactElement[] = [];

    for (let i = 0; i < numberOfCards; i++) {
      videoCards.push(
        <div key={i} className="mb-8">
          <ShimmerThumbnail height={200} width={288} rounded className="mb-3" />
          <ShimmerBadge width={288} className="mb-2" />
          <ShimmerBadge width={288} className="mb-2" />
        </div>
      );
    }

    return videoCards;
  };

  return (
    <div className="col-span-11 p-6">
      <div className="flex flex-wrap justify-evenly">{renderVideoCards()}</div>
    </div>
  );
};

export default Shimmer;
