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