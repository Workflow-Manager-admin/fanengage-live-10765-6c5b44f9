# Football Engagement React Frontend

This project is the user interface for "FanEngage Live" — a real-time football match engagement platform.

## Features

- Streams embedded YouTube football matches.
- Displays interactive yes/no pop-up questions over the video in real time.
- Accepts and sends user responses to a backend REST API.
- Shows analytics and live results based on fans' answers.
- Responsive, minimal, modern UI.

## Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in this folder with contents:

   ```
   REACT_APP_BACKEND_API=http://localhost:5000/api
   ```

   Adjust the URL to match your Flask backend location.

3. Start the app:

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## UI Structure

- **Navigation bar** with branding at the top
- **YouTube stream** at the top center
- **Pop-up question** overlays on the video when available
- **Analytics panel** below the video (or on the side on large screens)
- **Theme**: Modern, football-inspired, light/dark toggle

## Backend API Integration

- Polls the `/next_question` endpoint for new questions to display.
- Posts user answers to `/answer`.
- Fetches analytics from `/analytics`.

Configure the `REACT_APP_BACKEND_API` env variable to point to your Flask backend.

## Learn More

See [React documentation](https://reactjs.org/) for framework details.

