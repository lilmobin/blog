# Simple Blog Management

A basic blog management system built with Node.js, Express, and MongoDB.

## Key Features & Benefits

-   **User Authentication:** Secure user registration and login.
-   **Blog Post Creation:** Users can create and publish blog posts.
-   **Data Persistence:** Blog posts and user data are stored in a MongoDB database.
-   **Middleware:** Includes authentication and validation middleware for security and data integrity.

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

-   Node.js (v14 or higher)
-   npm (Node Package Manager)
-   MongoDB

## Installation & Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/lilmobin/blog.git
    cd blog
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```
    MONGO_URI=<Your MongoDB Connection String>
    JWT_SECRET=<Your JWT Secret Key>
    ```

    Replace `<Your MongoDB Connection String>` with your MongoDB connection string and `<Your JWT Secret Key>` with a secure secret key.

4.  **Run the application:**

    ```bash
    npm start
    ```

    The server should now be running on port 3000 (or the port specified in your `.env` file).

## Usage Examples & API Documentation

### Authentication Endpoints

-   **`POST /api/auth/register`**: Registers a new user.

    Request Body:

    ```json
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "password123",
        "profilePicture": "url_to_image"
    }
    ```

-   **`POST /api/auth/login`**: Logs in an existing user.

    Request Body:

    ```json
    {
        "email": "john.doe@example.com",
        "password": "password123"
    }
    ```

-   **`POST /api/auth/logout`**: Logs out the current user.

### Blog Post Endpoints

-   **`POST /api/blog/posts`**: Creates a new blog post (protected route). Requires authentication.

    Request Body:

    ```json
    {
        "title": "My First Blog Post",
        "content": "This is the content of my first blog post."
    }
    ```

-   **`GET /api/blog/posts`**: Retrieves all blog posts.

## Configuration Options

-   **`MONGO_URI`**: Specifies the MongoDB connection string.  Configure this in your `.env` file.
-   **`JWT_SECRET`**: Secret key used for signing JWT tokens. Configure this in your `.env` file.
-   **Port:** The application runs on port 3000 by default. You can change this within the app.js file.

## Project Structure

```
├── .gitignore
├── app.js
├── config/
│   └── db.js
├── controllers/
│   ├── auth.js
│   └── blog.js
├── images/
│   └── default-avatar.png
├── middleware/
│   ├── auth.js
│   └── validation.js
├── models/
│   ├── blog.js
│   └── user.js
├── package-lock.json
├── package.json
└── routes/
    ├── auth.routes.js
    └── blog.routes.js
```

## Contributing Guidelines

Contributions are welcome! To contribute to this project, follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Submit a pull request to the main branch.

## License Information

This project has no specified license. Please contact the repository owner for more details.

## Acknowledgments

-   This project uses Node.js, Express, and MongoDB.
