const mongoose = require('mongoose')

// const dbUri = 'mongodb+srv://admin:1234@cluster0.akzacmt.mongodb.net/employee_db?retryWrites=true&w=majority'
const dbUri = 'mongodb+srv://koushikgg:root@split.mdvqng4.mongodb.net/'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}