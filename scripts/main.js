((window) => {
    'use strict'
    const FORM_SELECTOR = '[data-order="form"]'
    const ORDER_LIST_SELECTOR = '[data-order="orderList"]'
    const App = window.App
    const Cart = App.Cart
    const Database = App.Database
    const FormControl = App.FormControl;
    const OrderList = App.OrderList;
    const myCart = new Cart('ncc-007', new Database())
    window.myCart = myCart
    const formControl = new FormControl(FORM_SELECTOR)
    const orderList = new OrderList(ORDER_LIST_SELECTOR)
    orderList.addClickControl(myCart.completeOrder.bind(myCart))
    formControl.addSubmitControl((data) => {
        myCart.placeOrder.call(myCart, data)
        orderList.addRow.call(orderList, data)
    })
    console.log(formControl)
})(window)