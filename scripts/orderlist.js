class OrderList {
    constructor(selector) {
        if (!selector) {
            throw new Error('There is no selector')
        }
        this.$formElement = $(selector)
        if (this.$formElement.length === 0) {
            throw new Error(`There are no elements matching ${selector} selector`)
        }
    }
    addClickControl(fn) {
        this.$formElement.on('click', 'input', function (e) {
            const email = event.target.value
            this.deleteRow(email)
            fn(email)
        }.bind(this))
    }
    addRow(order) {
        this.deleteRow(order.emailAddress)
        var rowElement = new Row(order)
        this.$formElement.append(rowElement.$formElement)
    }
    deleteRow(email) {
        this.$formElement
        .find(`[value="${email}"]`)
        .closest('[data-order="checkbox"]')
        .remove()
    }
}

class Row {
    constructor(order) {
        var $div = $('<div></div>', {
            'data-order': 'checkbox',
            'class': 'checkbox'
        })
        var $label = $('<label></label>')
        var $checkbox = $('<input>', {
            'type': 'checkbox',
            'value': 'order.emailAddress'
        })
        var description = `${order.size} `
        if (order.flavour) {
            description += `${order.flavour}, `
        }
        description += `${order.coffee}, (${order.emailAddress}) [${order.coffeeStrength}x]`
        $label.append($checkbox)
        $label.append(description)
        $div.append($label)
        this.$formElement = $div
    }
}

module.exports = OrderList;
