# MERN CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and MongoDB. It demonstrates basic RESTful API operations using MongoDB as the database.

## Folder Structure

- `/config`: Contains configuration files, such as database connection.
- `/controllers`: Contains the business logic for handling CRUD operations.
- `/models`: Defines Mongoose schemas and models.
- `/routes`: Defines API routes and links them to the controller functions.
- `/middleware`: Contains middleware for error handling.
- `/utils`: Utility functions for logging and other purposes.
- `server.js`: The entry point of the application.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (Local or Cloud)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern_crud.git
   cd mern_crud
2.Install dependencies:

  npm install
3.Ensure MongoDB is running on your local machine or use a MongoDB Atlas connection string in config/db.js.

 Configuration
Update the MongoDB connection string in config/db.js if you are using a remote MongoDB instance.

js
Copy code
mongoose.connect('mongodb://localhost:27017/mern_crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
Running the Application
Start the server:

npm start
The server will be running on http://localhost:5000.

API Endpoints
POST /items - Create a new item
GET /items - Get all items
GET /items/:id - Get an item by ID
PUT /items/:id - Update an item by ID
DELETE /items/:id - Delete an item by ID

Example Requests
Create a New Item

curl -X POST http://localhost:5000/items -H "Content-Type: application/json" -d '{"name": "Item Name", "description": "Item Description"}'
Get All Items

curl http://localhost:5000/items
Get an Item by ID

curl http://localhost:5000/items/{id}
Update an Item by ID

curl -X PUT http://localhost:5000/items/{id} -H "Content-Type: application/json" -d '{"name": "Updated Name", "description": "Updated Description"}'
Delete an Item by ID

curl -X DELETE http://localhost:5000/items/{id}
Error Handling
Errors are handled using middleware defined in middleware/errorHandler.js. Customize error handling as needed.

Contributing
Feel free to open issues and submit pull requests for improvements.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Express
Mongoose
CORS
