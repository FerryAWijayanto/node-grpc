const client = require('./client')

client.get({ id: '1' }, (error, note) => {
    if (!error) {
        console.log('Customer feched successfully', note)
    } else {
        console.error(error)
    }
})