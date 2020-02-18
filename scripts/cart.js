((window) => {
    'use strict'
    var App = window.App || {}

    function Cart(id, database){
        this.id = id;
        this.database = database;
    }

    Cart.prototype.placeOrder = function(order){
        console.log(`Order placed by ${order.email}`)
        this.database.set(order.email, order)
    }

    Cart.prototype.completeOrder = function(id){
        console.log(`Order for ${id} has been completed`)
        this.database.delete(id);
    }

    Cart.prototype.printOrders = function(){
        let clientsArray = Object.keys(this.database.getAll())
        console.log(`Cart nr ${this.id} has uncompleted orders:`)
        clientsArray.forEach(function(id){
            console.log(this.database.get(id))
        }.bind(this))
    }

    App.Cart = Cart;
    window.App = App;
})(window)