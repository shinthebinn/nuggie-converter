module.exports = {
	async headers() {
		return [
			{
				source: '/api/conversion',
				headers: [
					{
						key: "Access-Control-Allow-Origin",
						value: "*"
					}
				]
			}
		]
	}
}