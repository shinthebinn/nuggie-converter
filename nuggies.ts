const restaurants = require('./restaurants.json');

interface chainData {
	"ppn" : number,
	"npm" : number,
	"name" : string
}

interface conversionFormat {
	(restaurant: string, quantity: number): number;
}

const nuggiesToUSD: conversionFormat = (restaurant: string, quantity: number) => {
	let restaurantData: chainData = restaurants[restaurant];
	if (!restaurantData) {
		return -1
	}
	
	return restaurantData.ppn * quantity;
} 

const USDtoNuggies: conversionFormat = (restaurant: string, money: number) => {
	let restaurantData: chainData = restaurants[restaurant];
	if (!restaurantData) {
		return -1
	}

	return money / restaurantData.ppn
}

exports.nuggiesToUSD = nuggiesToUSD;
exports.USDtoNuggies = USDtoNuggies