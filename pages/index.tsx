import { useState } from 'react';

export default function Home({ data }) {
		let mData = data.default;
		let restaurants: string[] = Object.entries(mData).map(([key, value]) => key)

		const [dropdownVal, changeDropdownVal] = useState('');
		const [count, setCount] = useState();
		const [response, changeResponse] = useState('');

		async function handleSubmit(e) {
			e.preventDefault();
			changeResponse('loading...');

			let requestURL = `http://localhost:3000/api/conversion?from=nugs&chain=${dropdownVal}&count=${count}`;
			//changeResponse(requestURL);
			let res = await fetch(requestURL);
			let data = await res.json();

			changeResponse(data.price);
		}



    return (
			<div>
				<p>{response}</p>
				<form onSubmit={handleSubmit}>
					<select onChange={(e) => changeDropdownVal(e.target.value)}>
						<option value={undefined}>select an option:</option>
						{restaurants.map((i) => <option value={i}>{i}</option>)}
					</select>
					<input type="number" placeholder="nuggie count" value={count} onChange={(e) => setCount(e.target.value)}/>
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