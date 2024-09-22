npx create-react-app client

cd server
mkdir models
mkdir config
npm init -y
npm install mongoose express dotenv
npm install -g nodemon

Create .env and insert your mongodb uri
    MONGO_URI = <uri>

nodemon server.js