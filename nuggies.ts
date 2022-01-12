const restaurants = require('./restaurants.json');

interface chainData {
	"ppn" : number,
	"npm" : number,
	"name" : string
}

interface conversionFormat {
	(restaurant: string, quantity: number): number;
}

export const nuggiesToUSD: conversionFormat = (restaurant: string, quantity: number) => {
	let restaurantData: chainData = restaurants[restaurant];
	if (!restaurantData) {
		return -1
	}
	
	return restaurantData.ppn * quantity;
} 

export const USDToNuggies: conversionFormat = (restaurant: string, money: number) => {
	let restaurantData: chainData = restaurants[restaurant];
	if (!restaurantData) {
		return -1
	}

	return money / restaurantData.ppn
}