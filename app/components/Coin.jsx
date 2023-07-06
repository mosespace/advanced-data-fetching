import Image from "next/image";
import Link from "next/link";

const Coin = ({ data }) => {
  const { uuid, iconUrl, name, symbol, tier } = data;
  return (
    <Link href={`/coins/${uuid}`} className="coinS">
      <Image src={iconUrl} alt={name} width={30} height={30} />
      <div className="details">
        <h4>Name: {name}</h4>
        <h4>{symbol}</h4>
        <p>Tier: {tier}</p>
      </div>
    </Link>
  );
};

export default Coin;