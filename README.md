# React movie explorer

## 💻 Application Overview

The application is pretty simple. Users can search movie.

Its using https://developer.themoviedb.org/

Demo [https://purwnt.github.io/react-movies-explorer](https://purwnt.github.io/react-movies-explorer)

Tech Stack:

- React
- Typescript
- Tanstack React Query
- Tailwind
- Heroicons
- Axios
- Vite
- Vitest
- Playwright

## Get Started

Prerequisites:

- Node 16.9+
- Yarn 1.22+

To set up the app execute the following commands.

```bash
git clone https://github.com/purwnt/react-movies-explorer.git
cd react-movies-explorer
cp .env.example .env
yarn install
```

```
yarn dev
```

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

```
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Testing

#### Unit Testing

Run unit testing using Vitest

```
yarn test:unit
```

#### End-to-End Testing

Run end to end testing using playwright and chromium browser

```
yarn test:e2e
```
