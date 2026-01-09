const instruments = new Map();

instruments.set("GOOGL", {
	symbol: "GOOGL",
	name: "Alphabet Inc.",
	exchange: "NASDAQ",
	instrumentType: "Stock",
	lastTradePrice: 2800.5,
});

instruments.set("AAPL", {
	symbol: "AAPL",
	name: "Apple Inc.",
	exchange: "NASDAQ",
	instrumentType: "Stock",
	lastTradePrice: 190.2,
});

instruments.set("MSFT", {
	symbol: "MSFT",
	name: "Microsoft Corporation",
	exchange: "NASDAQ",
	instrumentType: "Stock",
	lastTradePrice: 375.4,
});

instruments.set("AMZN", {
	symbol: "AMZN",
	name: "Amazon.com Inc.",
	exchange: "NASDAQ",
	instrumentType: "Stock",
	lastTradePrice: 155.8,
});

instruments.set("TSLA", {
	symbol: "TSLA",
	name: "Tesla Inc.",
	exchange: "NASDAQ",
	instrumentType: "Stock",
	lastTradePrice: 245.3,
});

instruments.set("META", {
	symbol: "META",
	name: "Meta Platforms Inc.",
	exchange: "NASDAQ",
	instrumentType: "Stock",
	lastTradePrice: 350.1,
});

instruments.set("NFLX", {
	symbol: "NFLX",
	name: "Netflix Inc.",
	exchange: "NASDAQ",
	instrumentType: "Stock",
	lastTradePrice: 485.6,
});

instruments.set("NVDA", {
	symbol: "NVDA",
	name: "NVIDIA Corporation",
	exchange: "NASDAQ",
	instrumentType: "Stock",
	lastTradePrice: 620.9,
});

instruments.set("IBM", {
	symbol: "IBM",
	name: "International Business Machines",
	exchange: "NYSE",
	instrumentType: "Stock",
	lastTradePrice: 165.4,
});

instruments.set("ORCL", {
	symbol: "ORCL",
	name: "Oracle Corporation",
	exchange: "NYSE",
	instrumentType: "Stock",
	lastTradePrice: 118.7,
});

instruments.set("INTC", {
	symbol: "INTC",
	name: "Intel Corporation",
	exchange: "NASDAQ",
	instrumentType: "Stock",
	lastTradePrice: 42.3,
});

instruments.set("BABA", {
	symbol: "BABA",
	name: "Alibaba Group",
	exchange: "NYSE",
	instrumentType: "Stock",
	lastTradePrice: 78.5,
});

instruments.set("BTCUSD", {
	symbol: "BTCUSD",
	name: "Bitcoin",
	exchange: "Crypto",
	instrumentType: "Crypto",
	lastTradePrice: 43500,
});

instruments.set("ETHUSD", {
	symbol: "ETHUSD",
	name: "Ethereum",
	exchange: "Crypto",
	instrumentType: "Crypto",
	lastTradePrice: 2300,
});

instruments.set("GOLD", {
	symbol: "GOLD",
	name: "Gold Futures",
	exchange: "COMEX",
	instrumentType: "Commodity",
	lastTradePrice: 2050.75,
});


export default instruments;