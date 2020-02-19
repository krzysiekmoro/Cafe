((window) => {
    'use strict'
    let App = window.App || {}

    class Database {
        constructor() {
            console.log('Database invoked')
            this.data = {}
        }
        set(key, value) {
            this.data[key] = value
        }
        get(key) {
            return this.data[key]
        }
        getAll() {
            return this.data
        }
        delete(key) {
            delete this.data[key]
        }
    }





    App.Database = Database;
    window.App = App;
})(window)