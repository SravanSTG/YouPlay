import { ChannelType } from "../interfaces";
import useRoundNum from "../utils/useRoundNum";

type ChannelCardPropsType = {
  channel: ChannelType;
};

const ChannelCard: React.FC<ChannelCardPropsType> = ({ channel }) => {
  const { snippet, statistics } = channel;

  const { title, thumbnails } = snippet;
  const { subscriberCount } = statistics;

  return (
    <div className="flex flex-col justify-center items-center md:w-40 lg:w-52 text-center m-5">
      <div>
        <img
          src={thumbnails.medium.url}
          alt="channel-logo"
          className="h-32 w-32 md:h-40 md:w-40 rounded-full"
        />
      </div>
      <div className="mt-2">
        <h2 className="font-semibold text-base md:text-lg">{title}</h2>
        <p className="text-gray-500 text-sm">{useRoundNum(subscriberCount)} subscribers</p>
      </div>
    </div>
  );
};

export default ChannelCard;
