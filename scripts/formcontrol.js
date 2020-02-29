class FormControl {
    constructor(selector) {
        if (!selector) {
            throw new Error('There is no selector')
        }
        this.$formElement = $(selector)
        if (this.$formElement.length === 0) {
            throw new Error(`There are no elements matching ${selector} selector`)
        }
    }
    addSubmitControl(fn) {
        console.log(`Submition control added`);
        this.$formElement.on('submit', function (e) {
            e.preventDefault();
            let data = {};
            $(this).serializeArray().forEach(function (element) {
                data[element.name] = element.value;
                console.log(`Element ${element.name} has value ${element.value}`);
            })
            console.log(data)
            fn(data);
            this.reset();
            this.elements[0].focus();
        })
    }
}

module.exports = FormControl;