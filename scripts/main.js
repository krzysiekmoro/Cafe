((window) => {
    'use strict'
    let App = window.App
    let Cart = App.Cart
    let Database = App.Database
    let myCart = new Cart('ncc-007', new Database())
    window.myCart = myCart
})(window)