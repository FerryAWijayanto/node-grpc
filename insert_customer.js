const client = require('./client')
let newCustomer = {
    name: "New Name",
    age: 18,
    address: "New Address"
}

client.insert(newCustomer, (error, customer) => {
    if (!error) {
        console.log('New Customer created successfully', customer)
    } else {
        console.error(error)
    }
})