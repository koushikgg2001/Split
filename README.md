npx create-react-app client
git pull
npm install
npm start

cd server
mkdir models
mkdir config
npm init -y
npm install
npm install -g nodemon

Create .env and insert your mongodb uri
    MONGO_URI = <uri>

nodemon server.js



Folder structure

SPLIT/
├── Split/
│   ├── client/         ← React Frontend
│   │   └── src/
│   │       └── ...
│   ├── server/         ← Node.js + Express Backend
│   │   ├── models/     ← Mongoose schemas (like Expense.js, User.js)
│   │   ├── routes/     ← API routes (like expenseRoutes.js, userRoutes.js)
│   │   ├── server.js   ← Main Express app
│   │   └── .env        ← Environment variables (Mongo URI etc.)
