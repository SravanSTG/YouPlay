export interface VideoCardType {
  id: string;
  contentDetails: {
    duration: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
  };
}

export interface SearchVideoCardType {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}
