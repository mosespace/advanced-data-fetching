import { NextResponse } from "next/server";

const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_kEY,
		'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
	}
};

async function getJokes(){
    const response = await fetch(url, options);
    return response.json();
}

export async function GET(request){
    const data = await getJokes();
    return NextResponse.json(data.data.coins);
}