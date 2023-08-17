
# Courses App Backend

This repository contains the backend code for a RESTful API built using Express.js to manage courses. This API allows you to perform CRUD operations (Create, Read, Update, Delete) on courses, providing a simple way to interact with course data.

Technology Used- ExpressJs, RestAPI

## Features
```
- Create new courses with relevant information.
- Retrieve a list of all courses or specific course details.
- Update course information.
- Delete courses from the database.
```
## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vickytilotia/ExpressJs-RestAPI-Courses-Backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ExpressJs-RestAPI-Courses-Backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The API will be accessible at `http://localhost:3000`.

## API Endpoints
```
- `GET /api/courses`: Get a list of all courses.
- `GET /api/courses/:id`: Get details of a specific course by ID.
- `POST /api/courses`: Create a new course.
- `PUT /api/courses/:id`: Update details of a specific course by ID.
- `DELETE /api/courses/:id`: Delete a course by ID.
```
## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to create a pull request.

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -am 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.
