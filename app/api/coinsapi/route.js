import { NextResponse } from "next/server";

const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31645005f8msh7fbb8b5c99d4e27p196c23jsnfd21028b6e50',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

async function fetchcoins() {
  const response =  await fetch(url, options);
  return await response.json();
}

export async function GET(requests){
    const data = await fetchcoins();
    return NextResponse.json(data.data.coins)
}