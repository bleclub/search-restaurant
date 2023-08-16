# Restaurant Finding

Assignment: To create this for simple web application to show the list Restaurant using Google map API which users can enter a keyword to search location to get the list of Restaurant on that location.

## Preview

![preview](https://raw.githubusercontent.com/bleclub/search-restaurant/main/assets/preview.jpg?token=GHSAT0AAAAAACFSYYFR7GW6C6XBXXMRECHUZG4TNHQ)

## System Architecture Diagram

![diagram](https://raw.githubusercontent.com/bleclub/search-restaurant/main/assets/diagram.jpg?token=GHSAT0AAAAAACFSYYFQUFKVEUU7V7FK6RRIZG4TL3A)

## Installation

Step instructions to get the project up and running.

```bash
1. Clone the repository: `git clone https://github.com/bleclub/search-restaurant.git`
2. Navigate to the project directory: `cd search-restaurant`
3. Install dependencies: `npm install`
4. Start the application via docker compose: `docker-compose up`
5. Preview the project at: `http:localhost:8000`

* Note: Please provide for the Google map API key and fill in .env file as prepare on .env.example

```

## Running Tests

To run tests, run the following command

```bash
To test client side
  cd client
  npm run test:uint

To test server side
  cd server
  npm run test:watch

```
