"use client";
import Image from 'next/image'
import { fetchcoins } from './api/coins/route';

export default async function Page() {
  // const [coins, setCoins] = useState([])
  //  console.log(coins);

  // async function getCoins (){
  //   const response = await fetch('/api/coins')
  //   const coins = await response.json();

  //   setCoins(coins);
  // }

  // const coins = await getCoins();
  // console.log(coins);

    // useEffect(()=>{
    //   getCoins();
    // },[])
  return (
    <div>page</div>
  )
}
