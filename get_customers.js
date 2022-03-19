const client = require('./client')

client.getAll({}, (error, notes) => {
    if (!error) {
        console.log('successfully fetch List customers')
        console.log(notes)
    }
})