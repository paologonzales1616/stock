# React Stock Quote Application

## Overview

This React application showcases stock quote functionality, including real-time data retrieval. It features loading and error modals for a smooth user experience, utilizing Tailwind CSS for styling and Headless UI for modals.

## Features

- **Stock Quote Search**: Retrieve and display real-time stock quotes for various stock symbols.
- **Loading Modal**: Displays a spinner to indicate that data is being fetched or the application is initializing.
- **Error Modal**: Shows error messages if something goes wrong during data fetching.

## Dockerize

Create a docker image by using the docker build command

```
docker build . -t docker-react-stock-app
```

Create a docker container by running

```
docker run -p 80:80  docker-react-stock-app
```

