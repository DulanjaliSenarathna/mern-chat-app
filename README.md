# Chat App (MERN Stack)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [Contact](#contact)

## Introduction
This is a full-stack chat application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to create accounts, log in, and engage in real-time messaging with other users.

## Features
- User authentication and authorization
- Real-time messaging using Socket.io
- Private and group chats
- Message notifications

## Technologies Used
- **Frontend:** React.js, React Context API, React Router
- **Backend:** Node.js, Express.js
- **Real-time Communication:** Socket.io
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** CSS

## Installation
### Prerequisites
- Node.js
- MongoDB

### Clone the Repository
```sh
git clone https://github.com/DulanjaliSenarathna/mern-chat-app.git
cd mern-chat-app
```

## Backend Setup
Navigate to the backend directory:

```sh
cd backend

```
Install dependencies:

```sh
npm install
```

Create a .env file in the backend directory and add the following:

```sh
PORT=5000
MONGO_URI='mongodb+srv://dulanjalisenarathna93:Y4PZjgjl0ZUM8Lfw@cluster0.y4flykh.mongodb.net/?retryWrites=true&w=majority'
JWT_SECRET=dulanjali
NODE_ENV=production
```

Start the backend server:

```sh
npm start run
```
## Frontend Setup
Navigate to the frontend directory:

```sh

cd frontend
```

Install dependencies:
```sh

npm install
```

Start the frontend server:
```sh

npm start run
```

## Usage
Access the customer-facing app at http://localhost:3000.
Register as a new user or log in with existing credentials.
Create or join a chat group.
Pay using dummy visa card
Start chatting with other users in real-time.

## Screenshots
![mc1](https://github.com/user-attachments/assets/73d0dd97-18eb-42b1-b88b-87ecc0be62ba)
![mc2](https://github.com/user-attachments/assets/efb6c9a6-eda3-4fc0-8141-b430c89c8aab)
![mc3](https://github.com/user-attachments/assets/f9181f73-4990-461c-aa87-18b04cf49f4b)
![mc4](https://github.com/user-attachments/assets/d8b53964-9bb6-4bab-a72b-abdfd116ff7f)
![mc5](https://github.com/user-attachments/assets/7cdd511a-8819-48c0-8b26-75575ad946a6)
![mc6](https://github.com/user-attachments/assets/c3b0ee5f-3aff-4e01-b1fc-aac403ade44b)
![mc7](https://github.com/user-attachments/assets/12edcdda-3149-47c7-88ad-c96a309bb2bb)
![mc8](https://github.com/user-attachments/assets/026dcd0d-3852-42c7-b9ec-cf2546b919af)
![mc9](https://github.com/user-attachments/assets/bc6ecb93-4c38-4f8f-a553-d7edcf16f151)

## API Documentation
The API endpoints for the backend can be documented using tools like Postman or Swagger. Include endpoints for user authentication, menu items, orders, and more.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and include relevant tests.

## Contact
For any questions or suggestions, feel free to contact me.

Happy coding!

Feel free to customize this template according to your specific project details and requirements.




