const OrderList = require('./orderlist');
const FormControl = require('./formcontrol');
const Cart = require('./cart');
const Database = require('./database');

const ORDER_LIST_SELECTOR = '[data-order="orderList"]';
const FORM_SELECTOR = '[data-order="form"]';

const orderList = new OrderList(ORDER_LIST_SELECTOR);
const myCart = new Cart('ncc-007', new Database());
orderList.addClickControl(myCart.completeOrder.bind(myCart));
const formControl = new FormControl(FORM_SELECTOR);

formControl.addSubmitControl((data) => {
    myCart.placeOrder.call(myCart, data);
    orderList.addRow.call(orderList, data);
})
console.log(formControl);