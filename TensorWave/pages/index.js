import { useState, useEffect } from 'react';
import StockCard from '../components/StockCard';
import fetcher from '../lib/fetcher';

const HomePage = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const symbols = [
        'AAPL',
        'GOOGL',
        'MSFT',
        'AMZN',
        'TSLA',
        'FB',
        'BRK-B',
        'JPM',
        'JNJ',
        'V',
        'PG',
        'MA',
        'UNH',
        'NVDA',
        'HD',
      ];

      const dataPromises = symbols.map(async (symbol) => {
        const res = await fetcher(
          `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        return {
          ...res,
          symbol,
        };
      });

      const data = await Promise.all(dataPromises);

      setStockData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {stockData.map((data) => (
        <StockCard
          key={data.symbol}
          symbol={data.symbol}
          name={data.Name}
          description={data.Description}
          exchange={data.Exchange}
          sector={data.Sector}
          industry={data.Industry}
          marketCapitalization={data['Market Cap (intraday)'] || 'N/A'}
        />
      ))}
    </div>
  );
};

export default HomePage;