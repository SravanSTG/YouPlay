export interface VideoCardType {
  id: string;
  contentDetails: {
    duration: string;
  };
  snippet: {
    title: string;
    categoryId: string;
    channelId: string;
    channelTitle: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
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
    publishedAt: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

export interface CommentType {
  id: string;
  snippet: {
    topLevelComment: {
      snippet: {
        authorDisplayName: string;
        authorProfileImageUrl: string;
        likeCount: number;
        publishedAt: string;
        textOriginal: string;
      };
    };
  };
  replies: {
    comments: [
      {
        id: string;
        snippet: {
          authorDisplayName: string;
          authorProfileImageUrl: string;
          likeCount: number;
          publishedAt: string;
          textOriginal: string;
        };
      }
    ];
  };
}

export interface ChannelType {
  id: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
  statistics: {
    subscriberCount: string;
    videoCount: string;
  };
}
