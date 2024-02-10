import { useEffect, useState } from "react";
import { channelInfoUrl } from "../constants";
import { ChannelType } from "../interfaces";

type ChannelPropsType = {
  channelId: string;
};

const Channel: React.FC<ChannelPropsType> = ({ channelId }) => {
  const [channelDetails, setChannelDetails] = useState<ChannelType | undefined>();

  const { snippet, statistics } = channelDetails || {};

  const { title, thumbnails } = snippet || {};
  const { subscriberCount } = statistics || {};

  useEffect(() => {
    getChannelDetails();
  }, []);

  const getChannelDetails = async () => {
    const data = await fetch(
      `${channelInfoUrl}${channelId}&key=${import.meta.env.VITE_API_KEY}`
    );
    const json = await data.json();
    setChannelDetails(json.items[0]);
  };

  return (
    <div className="flex items-center">
      <div>
        <img
          src={thumbnails?.default?.url}
          alt="channel-logo"
          className="h-10 w-10 rounded-full mr-3"
        />
      </div>
      <div className="mr-6">
        <h3 className="font-bold">{title}</h3>
        <p className="text-xs font-semibold text-gray-500">
          {subscriberCount} subscribers
        </p>
      </div>
      <div>
        <button className="bg-blue-600 rounded-full px-3 py-2 text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Channel;
