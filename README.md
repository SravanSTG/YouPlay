# YouPlay

A YouTube clone built using React, Redux Toolkit, TypeScript and Tailwind CSS. Users can explore a dynamic homepage, utilize a robust search feature with debouncing, browse and watch videos, view comments, manage subscriptions, personalize liked videos and watch later lists.

This project was created using [Vite](https://vitejs.dev/guide/).

Live URL: [YouPlay](https://youplay-v1.netlify.app/)

<br />

![Annotation 2024-03-08 132621](https://github.com/SravanSTG/YouPlay/assets/53626426/fd6130d0-91f7-4dc1-bfc6-5d894183dd40)

<br />

## Getting Started
### Prerequisites
This application loads information using the [Youtube Data API v3](https://developers.google.com/youtube/v3/docs/). <br />
To use it, you need to set up a Youtube Data API key.

### Set up Youtube Data API key
- Go to [Google Cloud Platform(GCP) Console](https://console.cloud.google.com/).
- Create a new project.
- In the GCP console, navigate to API & Services dashboard.
- Click on "Enabled APIs and Services".
- Search for "YouTube Data API v3" and enable it for your project.
- Once the API is enabled, navigate to the "Credentials" section.
- Click on "Create Credentials" and select "API Key."
- A new API key will be generated.
- Copy the API key.

### Provide the API key to the application using Environment Variables
Create a `.env` file in the root of the project. <br/>
Then define the `VITE_API_KEY` environment variable with your Youtube API key. <br />
```
VITE_API_KEY=AIxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Install dependencies
To install the dependencies, run:
```
npm install
```

### Run the application locally
To run the application locally, run:
```
npm start
```

## Features

- Home feed with most Popular videos
- Search vidoes with debouncing effect
- Browse and watch videos
- Get video details (title, channel name, views, likes, channel subscriptions, video description)
- View comments and replies for a video
- Subscribe/Unsubscribe from channels
- Watch later list
- Liked videos list
- Dynamic routing
- Shimmer effect
- Toast messages

## Built With

- React
- Redux Toolkit
- TypeScript
- Tailwind CSS
- React Router
- React Toastify
- React Icons
- Custom Hooks

## Note
If the application does not load anything, or if the search function does not work, most likely the daily Youtube API quota has been exceeded. Please wait for sometime and try again.
