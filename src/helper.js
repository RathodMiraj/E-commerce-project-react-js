export const KEYS = {
    PRODUCT: "product",
    SORTED_DATA: "sortedData"
}

export const getJSON = (key) => {
    if (localStorage !== undefined && localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key))
    }
}

export const getItem = (key) => {
    if (localStorage !== undefined && localStorage.getItem(key)) {
        return localStorage.getItem(key)
    }
}

