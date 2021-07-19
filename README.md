## Backend
### Change directory into the backend
```bash
cd blog-backend
```

### Install backend dependencies

```bash
npm install
```

### MongoDB
Ensure that you have mongoDB installed on your machine before running the application. I have this fully setup on my mac already.

Start mongoDB:

```bash
sudo mongod
```

### Run the application
Open another terminal and still within the `blog-backend` project directory run the application with:

```bash
npm run start:dev
```

This will start the backend application on port `3000`.

## Frontend
Open another terminal from the `nest-vue-project` and navigate to the `blog-frontend` folder to setup the frontend

### Frontend dependencies
```bash
cd blog-frontend
npm install
```

### Run the frontend app

```bash
npm run serve
```

### Test the application
Finally open your browser and view the application on http://localhost:8080

## Prerequisites
 [Node.js](https://nodejs.org/en/), [Npm](https://www.npmjs.com/), [MongoDB](https://docs.mongodb.com/v3.2/installation/)

## Built With
[Nest.js](https://nestjs.com/)
[Vue.js](https://vuejs.org/)
[MongoDB]() 
