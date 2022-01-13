import { useState } from 'react';
import { nuggiesToUSD, USDToNuggies } from './../functions/nuggieQuery'

export default function Home({ data }) {
		let mData = data.default;
		let restaurants: string[] = Object.entries(mData).map(([key, value]) => key)

		const [restaurant, changeRestaurant] = useState('');
		const [convertFrom, changeConvertFrom] = useState('');
		const [count, setCount] = useState();
		const [response, changeResponse] = useState('');

		async function handleSubmit(e) {
			e.preventDefault();
			changeResponse('loading...');

			let result = (convertFrom == "usd") ? USDToNuggies(restaurant, count) : nuggiesToUSD(restaurant, count)

			changeResponse((convertFrom == "usd") ? `${result} nuggies` : `\$${result}`);
		}



    return (
			<div>
				<p>{response}</p>
				<form onSubmit={handleSubmit}>
					<select onChange={(e) => changeConvertFrom(e.target.value)}>
						<option value={undefined}>select conversion:</option>
						<option value="nugs">Nuggies to USD</option>
						<option value="usd">USD to Nuggies</option>
					</select>
					<select onChange={(e) => changeRestaurant(e.target.value)}>
						<option value={undefined}>select a restaurant:</option>
						{restaurants.map((i) => <option value={i}>{i}</option>)}
					</select>
					<input type="number" step="0.01" placeholder="nuggie count/money in usd" value={count} onChange={(e) => setCount(e.target.value)}/>
					<input type="submit"/>
				</form>
			</div>
		)
}

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3000/api/manifest');
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}