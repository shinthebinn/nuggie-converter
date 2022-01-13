import * as nugData from '../data/restaurants.json'

interface chainData {
    "price": {
        "individual": number,
        "meal": number
    },
    "count": number,
    "name": string
}

interface queryFormat {
    (restaurant?: string, quantity?: number, money?: number): any
}

export const nuggiesToUSD: queryFormat = (restaurant, quantity) => {
    let restaurantData: chainData = nugData[restaurant];

    if (!restaurantData) return -1;

    return restaurantData.price.individual * quantity
}

export const USDToNuggies: queryFormat = (restaurant, money) => {
    let restaurantData: chainData = nugData[restaurant];

    if (!restaurantData) return -1;

    return money / restaurantData.price.individual
}

export const chainQuery: queryFormat = (restaurant) => {
    let restaurantData: chainData = nugData[restaurant];

    return restaurantData;
}

export const dataQuery = () => {
    return nugData;
}