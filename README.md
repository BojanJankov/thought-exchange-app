# Thought exchange app

Thought exchange app is a simple web blog application that allows users to view and manage posts. It provides features for adding new posts, viewing details of posts, leave comments and like or dislike others posts. Also they can't do all of this if they don't have an account and are not loged in.

## Technologies Used

- Frontend: Angular
- Backend: Express with TypeScript
- Database: MondgoDB/Firebase for authentication 

## How to start it

### Prerequisites

- Node.js 
- MongoDB
- Firebase

### Installation

1. First clone the repository
2. Install dependencies for the frontend:
cd /client , and then npm install
3. Install dependencies for the backend:
cd /api , and then npm install
4. Create a MondgoDB and Firebase databases named `thought-exchange-app` and setup .env file for MondgoDB connection, also setup firebase.config.ts file in const for Firebase connection.


### Usage 

1. Start the backend server: npm run build and then npm start
2. Start the frontend server: npm start
3. Open your web browser and visit front-end url to access Thought exchange app.

## Features

- View a list of posts of all users
- View a details for every post and also thier inforomations and comments
- Leave comments on every post and like or dislike post
- Edditing post infromations for every your post
- Fully functional authentication and registration
- Comment and post panel for viewing all your comments or posts, also delete option for them
  
