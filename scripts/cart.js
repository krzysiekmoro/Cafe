class Cart {
    constructor(id, database) {
        this.id = id;
        this.database = database;
    }
    placeOrder(order) {
        console.log(`Order placed by ${order.emailAddress}`);
        this.database.set(order.email, order);
    }
    completeOrder(id) {
        console.log(`Order for ${id} has been completed`);
        this.database.delete(id);
    }
    printOrders() {
        let clientsArray = Object.keys(this.database.getAll());
        console.log(`Cart nr ${this.id} has uncompleted orders:`);
        clientsArray.forEach(function (id) {
            console.log(this.database.get(id));
        }.bind(this));
    }
}

//module.exports = Cart;
export default Cart;
