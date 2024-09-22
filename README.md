npx create-react-app client

mkdir server
cd server
npm init -y
npm install express dotenv
npm install -g nodemon

Create .env and insert 
    MONGO_URI = <uri>

nodemon server.js