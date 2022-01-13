import { useState } from 'react';
import DropdownMenu from '../components/DropdownMenu';
import { nuggiesToUSD, USDToNuggies, dataQuery } from './../functions/nuggieQuery'

export default function Home({ data }) {
	let mData = data.default;
	let restaurants: string[] = Object.entries(mData).map(([key, value]) => key)
	let temp: any;

	const [chain, changeChain] = useState('');
	const [convertFrom, changeConvertFrom] = useState('');
	const [count, setCount] = useState(temp);
	const [response, changeResponse] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		changeResponse('loading...');

		let result = (convertFrom == "usd") ? USDToNuggies(chain, count) : nuggiesToUSD(chain, count)

		changeResponse((convertFrom == "usd") ? `${result} nuggies` : `\$${result}`);
	}

	let conversionItems = [["nugs", "Nuggies to USD"], ["usd", "USD to Nuggies"]];
	let restaurantItems = restaurants.map((i) => [i, i])

	//<select onChange={(e) => changeChain(e.target.value)}>
	//	<option value={undefined}>select a chain:</option>
	//	{restaurants.map((i) => <option value={i}>{i}</option>)}
	//</select>

    return (
		<div>
			<p>{response}</p>
			<form onSubmit={handleSubmit}>
				<DropdownMenu items={conversionItems} onChange={(val) => changeConvertFrom(val)} undefinedString='conversion'/>
				<DropdownMenu items={restaurantItems} onChange={(val) => changeChain(val)} undefinedString='a restaurant'/>
				<input type="number" step="0.01" placeholder="nuggie count/money in usd" value={count} onChange={(e) => setCount(e.target.value)}/>
				<input type="submit"/>
			</form>
		</div>
	)
}

export async function getServerSideProps(context) {
    const data = await dataQuery();

    return {
        props: {
            data
        }
    }
}