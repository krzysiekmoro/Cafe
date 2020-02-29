class Database {
    constructor() {
        console.log('Database invoked');
        this.data = {};
    }
    set(key, value) {
        this.data[key] = value;
    }
    get(key) {
        return this.data[key];
    }
    getAll() {
        return this.data;
    }
    delete(key) {
        delete this.data[key];
    }
}
//module.exports = Database;
export default Database;