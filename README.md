# TaskManager

TaskManager is a task management system built with Node.js and Express, designed to help developers quickly set up a task management API server.

## Features
- User registration
- User login
- Create, read, update, and delete tasks

## Installation and Running
1. Clone the project:
    ```bash
    git clone https://github.com/fozzmarc/TaskManager.git
    cd TaskManager
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
    Create a `.env` file in the project root directory and add the following content:
    ```
    PORT=3000
    DB_NAME=taskmanager
    DB_USER=root
    DB_PASS=your_password
    DB_HOST=localhost
    JWT_SECRET=your_jwt_secret
    ```

4. Run the server:
    ```bash
    npm start
    ```

## API Documentation

### User Registration
- URL: `/api/users/register`
- Method: `POST`
- Request Body:
    ```json
    {
        "username": "your_username",
        "password": "your_password"
    }
    ```
- Response:
    ```json
    {
        "message": "User created successfully"
    }
    ```

### User Login
- URL: `/api/users/login`
- Method: `POST`
- Request Body:
    ```json
    {
        "username": "your_username",
        "password": "your_password"
    }
    ```
- Response:
    ```json
    {
        "token": "your_jwt_token"
    }
    ```

### Get Current User Information
- URL: `/api/users/me`
- Method: `GET`
- Header:
    ```json
    {
        "Authorization": "Bearer your_jwt_token"
    }
    ```
- Response:
    ```json
    {
        "id": "user_id",
        "username": "your_username",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
    }
    ```

### Create Task
- URL: `/api/tasks`
- Method: `POST`
- Header:
    ```json
    {
        "Authorization": "Bearer your_jwt_token"
    }
    ```
- Request Body:
    ```json
    {
        "title": "task_title",
        "description": "task_description"
    }
    ```
- Response:
    ```json
    {
        "id": "task_id",
        "title": "task_title",
        "description": "task_description",
        "status": "pending",
        "userId": "user_id",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
    }
    ```

### Get All Tasks
- URL: `/api/tasks`
- Method: `GET`
- Header:
    ```json
    {
        "Authorization": "Bearer your_jwt_token"
    }
    ```
- Response:
    ```json
    [
        {
            "id": "task_id",
            "title": "task_title",
            "description": "task_description",
            "status": "pending",
            "userId": "user_id",
            "createdAt": "timestamp",
            "updatedAt": "timestamp"
        },
        ...
    ]
    ```

### Update Task
- URL: `/api/tasks/:id`
- Method: `PUT`
- Header:
    ```json
    {
        "Authorization": "Bearer your_jwt_token"
    }
    ```
- Request Body:
    ```json
    {
        "title": "updated_title",
        "description": "updated_description",
        "status": "updated_status"
    }
    ```
- Response:
    ```json
    {
        "id": "task_id",
        "title": "updated_title",
        "description": "updated_description",
        "status": "updated_status",
        "userId": "user_id",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
    }
    ```

### Delete Task
- URL: `/api/tasks/:id`
- Method: `DELETE`
- Header:
    ```json
    {
        "Authorization": "Bearer your_jwt_token"
    }
    ```
- Response:
    ```json
    {}
    ```

## Contribution
Contributions of any kind are welcome! Please fork this repository and submit a pull request.

## License
MIT