# Movie Search App

A React movie browsing app that fetches popular movies from The Movie Database (TMDB) API. You can search movies in real time and open a details page for any movie.

**Live Demo:** [add your deployed link here]

## Preview

<!-- Add a screenshot of the app: ![Movie Search App preview](./screenshot.png) -->

## Features

- Popular movies fetched from the TMDB REST API using async/await, with error handling
- Real-time search filtering using a controlled input and derived state
- Reusable movie card components styled with Bootstrap
- Dynamic movie details page built with React Router, using dynamic routes and `useParams` to fetch a single movie by ID
- Data managed with the `useState` and `useEffect` hooks

## Tech Stack

- React (Vite)
- React Router
- Bootstrap
- TMDB REST API
- JavaScript (ES6)

## Getting Started

Make sure Node.js and npm are installed, then run:

```bash
git clone https://github.com/Delfin22072001/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

Open the local address shown in the terminal to view the app.

## TMDB API Key

This app needs a free API key from [The Movie Database](https://www.themoviedb.org/). Create an account, request a key in your account's API settings, and add it where the project reads it (for example, a `.env` file in the project root). Do not commit your key to GitHub.

## What I Learned

- Fetching and handling data from a REST API with async/await
- Managing state and side effects with React hooks
- Filtering data in real time with controlled inputs
- Building dynamic routes with React Router

## Acknowledgement

This product uses the TMDB API but is not endorsed or certified by TMDB.

## Author

**Delfin D** — Full Stack Developer

- LinkedIn: [linkedin.com/in/delfin-d-839876227](https://www.linkedin.com/in/delfin-d-839876227/)
- GitHub: [github.com/Delfin22072001](https://github.com/Delfin22072001)
- Email: delfin22072002@gmail.com
