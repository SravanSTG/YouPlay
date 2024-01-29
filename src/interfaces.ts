export interface VideoCardType {
  id: string;
  contentDetails: {
    duration: string;
  }
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
