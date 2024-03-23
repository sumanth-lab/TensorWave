import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import fetcher from '../../lib/fetcher';

const StockDetails = () => {
  const router = useRouter();
  const { stockSymbol } = router.query;

  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    if (stockSymbol) {
      const fetchData = async () => {
        const overview = await fetcher(
          `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockSymbol}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
        );