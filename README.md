# Threads Clone (MERN Stack)

## Overview
Threads Clone is a social media platform built using the MERN stack, where users can share daily photos, thoughts, and interact with others. The platform enables users to make new friends, showcase their talents, and grow their popularity in the community.

## Features
- **User Authentication**: Secure login and signup using JWT authentication.
- **Post Creation**: Users can share daily photos, thoughts, and other content.
- **Likes & Comments**: Engage with posts by liking and commenting.
- **Follow System**: Follow other users and build a network.
- **Explore & Trending**: Discover trending content and connect with new users.
- **Profile Management**: Customize user profiles with bio, profile picture, and personal details.
- **Media Upload**: Upload images securely using Cloudinary.
- **Responsive UI**: Designed with Material UI for a seamless user experience.

## Tech Stack
- **Frontend**: React.js, Material UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Storage**: Cloudinary (for media uploads)

## Installation
### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)
- Cloudinary account (for media storage)

### Steps
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/threads-clone.git
   cd threads-clone
   ```
2. **Set Up the Backend**
   ```sh
   cd backend
   npm install
   ```
   - Create a `.env` file in the `backend` directory and add the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     CLOUDINARY_CLOUD_NAME=your_cloud_name
     CLOUDINARY_API_KEY=your_api_key
     CLOUDINARY_API_SECRET=your_api_secret
     ```
   - Start the backend server:
     ```sh
     npm start
     ```

3. **Set Up the Frontend**
   ```sh
   cd ../frontend
   npm install
   npm start
   ```

4. **Access the Application**
   - Frontend runs on `http://localhost:3000`
   - Backend runs on `http://localhost:5000`

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### User
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `GET /api/users` - Search users

### Posts
- `POST /api/posts` - Create a post
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a single post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

### Interactions
- `POST /api/posts/:id/like` - Like a post
- `POST /api/posts/:id/comment` - Comment on a post

## Contributing
Feel free to fork the repository and submit a pull request if you want to contribute.

## License
This project is open-source and available under the [MIT License](LICENSE).

