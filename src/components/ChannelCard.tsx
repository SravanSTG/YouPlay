import { useDispatch } from "react-redux";
import { ChannelType } from "../interfaces";
import useRoundNum from "../utils/useRoundNum";
import { IoClose } from "react-icons/io5";
import { removeChannel } from "../redux/subscribeSlice";

type ChannelCardPropsType = {
  channel: ChannelType;
};

const ChannelCard: React.FC<ChannelCardPropsType> = ({ channel }) => {
  const { id, snippet, statistics } = channel;

  const { title, thumbnails } = snippet;
  const { subscriberCount } = statistics;

  const dispatch = useDispatch();

  const handleRemoveButtonClick = () => {
    dispatch(removeChannel(id));
  };

  return (
    <div
      id="subscriber-card"
      className="flex flex-col justify-center items-center md:w-40 lg:w-52 text-center p-3 m-5 relative hover:bg-gray-100"
    >
      <div>
        <img
          src={thumbnails.medium.url}
          alt="channel-logo"
          className="h-32 w-32 md:h-40 md:w-40 rounded-full"
        />
      </div>
      <div className="mt-2">
        <h2 className="font-semibold text-base md:text-lg">{title}</h2>
        <p className="text-gray-500 text-sm">
          {useRoundNum(subscriberCount)} subscribers
        </p>
      </div>
      <div id="subscriber-card-close-btn" className="absolute top-1 right-1">
        <p className="text-xs md:text-base">
          <IoClose onClick={() => handleRemoveButtonClick()} />
        </p>
      </div>
    </div>
  );
};

export default ChannelCard;
