class Storage {
    _service // store service

    constructor () {
        // setting default storage
        this._service = window.localStorage
    }

    // grab data from local storage
    getData (key) {
        let res = this._service.getItem(key)
        let data = this.deserializeData(res)
        return data
    }

    // set data to the service
    setData (key, value) {
        this._service.setItem(key, this.serializeData(value))
    }

    // remove data from the service
    removeData (key) {
        this._service.removeItem(key)
    }

    // clear data
    clearData () {
        this._service.clear()
    }

    // serialize data
    serializeData (d) {
        return JSON.stringify(d)
    }

    // deserialize data
    deserializeData (d) {
        return JSON.parse(d)
    }
}

export default Storage
