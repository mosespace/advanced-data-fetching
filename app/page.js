"use client";
import { useEffect, useState } from "react";
import Coin from "./components/Coin";

export default function Page() {
  const [coins, setCoins] = useState([]);
  // console.log(coins);
  async function fetchData() {
    const response = await fetch("/api/coins");
    const coins = await response.json();
    setCoins(coins);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
   <div>
    {
      <section>
        {coins.map((coin) =>{
          return <Coin data={coin} key={coin.uuid}/>
        })}
      </section>
    }
   </div>
  );
}