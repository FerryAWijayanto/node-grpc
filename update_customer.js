const client = require('./client')

const updateCustomer = {
    id: "1",
    name: "New Name",
    age: 18,
    address: "New Address"
}

client.update(updateCustomer, (error, customer) => {
    if (!error) {
        console.log('Note has been updated successfully', customer)
    } else {
        console.error(error)
    }
})