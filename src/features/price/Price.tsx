import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPrice } from "./priceAPI";

type IParams = {
  symbol: string;
};

interface StockQuoteData {
  currentPrice: number;
  change: number;
  percentChange: number;
  high: number;
  low: number;
  open: number;
  prevClose: number;
}

const initialStockQuoteState: StockQuoteData = {
  currentPrice: 0,
  change: 0,
  percentChange: 0,
  high: 0,
  low: 0,
  open: 0,
  prevClose: 0,
};

function Price() {
  const params = useParams<IParams>();
  const [stockData, setStockData] = useState<StockQuoteData>(
    initialStockQuoteState
  );

  useEffect(() => {
    if (params.symbol) {
      fetchPrice(params.symbol)
        .then((data) => {
          // Map response to StockQuoteData format
          const formattedData: StockQuoteData = {
            currentPrice: data.c,
            change: data.d,
            percentChange: data.dp,
            high: data.h,
            low: data.l,
            open: data.o,
            prevClose: data.pc,
          };
          setStockData(formattedData);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-2">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stock Quote</h2>

      {/* Stock Symbol */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Symbol:</span>
        <span className="font-medium text-gray-900">{params.symbol}</span>
      </div>
      <hr className="my-4" />

      {/* Current Price */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Current Price (c):</span>
        <span className="font-medium text-gray-900">${stockData.currentPrice}</span>
      </div>
      <hr className="my-4" />

      {/* Change */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Change (d):</span>
        <span className="font-medium text-gray-900">${stockData.change}</span>
      </div>
      <hr className="my-4" />

      {/* Percent Change */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Percent Change (dp):</span>
        <span className="font-medium text-gray-900">{stockData.percentChange}%</span>
      </div>
      <hr className="my-4" />

      {/* High Price */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600">High Price of the Day (h):</span>
        <span className="font-medium text-gray-900">${stockData.high}</span>
      </div>
      <hr className="my-4" />

      {/* Low Price */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Low Price of the Day (l):</span>
        <span className="font-medium text-gray-900">${stockData.low}</span>
      </div>
      <hr className="my-4" />

      {/* Open Price */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Open Price of the Day (o):</span>
        <span className="font-medium text-gray-900">${stockData.open}</span>
      </div>
      <hr className="my-4" />

      {/* Previous Close Price */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Previous Close Price (pc):</span>
        <span className="font-medium text-gray-900">${stockData.prevClose}</span>
      </div>
    </div>
  );
}

export default Price;
