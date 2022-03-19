const client = require('./client')

client.remove({ id: '1' }, (error, _) => {
    if (!error) {
        console.log('Customer Has been successfully deleted')
    } else {
        console.error(error)
    }
})