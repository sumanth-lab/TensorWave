import { useRouter } from 'next/router';

const StockCard = ({ symbol, name, description, exchange, sector, industry, marketCapitalization }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/stock-details/${symbol}`);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 cursor-pointer" onClick={handleClick}>
      <h2 className="text-xl font-bold mb-2">{symbol}</h2>
      <h3 className="text-lg mb-2">{name}</h3>
      <p className="text-gray-500">{description}</p>
      <div className="mt-4">
        <p className="text-sm">Exchange: {exchange}</p>
        <p className="text-sm">Sector: {sector}</p>
        <p className="text-sm">Industry: {industry}</p>
        <p className="text-sm">Market Capitalization: {marketCapitalization}</p>
      </div>
    </div>
  );};

export default StockCard;