import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPrice } from "./priceAPI";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

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

const initialHasErrorState = { error: false, message: "" };

function Price() {
  const params = useParams<IParams>();
  const [stockData, setStockData] = useState<StockQuoteData>(
    initialStockQuoteState
  );
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(initialHasErrorState);

  useEffect(() => {
    if (params.symbol) {
      setLoading(true);
      setHasError(initialHasErrorState);
      fetchPrice(params.symbol)
        .then((res) => {
          if (res.error) {
            setHasError({ error: true, message: res.error });
          }

          if (res.data.c === 0) {
            setHasError({ error: true, message: "No stock found" });
          }
          // Map response to StockQuoteData format
          const formattedData: StockQuoteData = {
            currentPrice: res.data.c,
            change: res.data.d,
            percentChange: res.data.dp,
            high: res.data.h,
            low: res.data.l,
            open: res.data.o,
            prevClose: res.data.pc,
          };
          setStockData(formattedData);
        })
        .catch(() =>
          setHasError({
            error: true,
            message: "Something went wrong. Please try again later",
          })
        )
        .finally(() => setLoading(false));
    }
  }, [params.symbol]);

  return (
    <>
      {hasError.error && (
        <div
          className="mb-4 text-sm text-red-700 bg-red-100 rounded-lg max-w-lg mx-auto shadow-md p-6 mt-2"
          role="alert"
        >
          <span className="font-medium">Error:</span> {hasError.message}.
        </div>
      )}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Stock Quote
          </h2>

          {/* Stock Symbol */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Symbol:</span>
            <span className="font-medium text-gray-900">
              {params.symbol?.toUpperCase()}
            </span>
          </div>
          <hr className="my-4" />

          {/* Current Price */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Current Price (c):</span>
            <span className="font-medium text-gray-900">
              $ {stockData.currentPrice || 0}
            </span>
          </div>
          <hr className="my-4" />

          {/* Change */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Change (d):</span>
            <span className="font-medium text-gray-900">
              $ {stockData.change || 0}
            </span>
          </div>
          <hr className="my-4" />

          {/* Percent Change */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Percent Change (dp):</span>
            <span className="font-medium text-gray-900">
              {stockData.percentChange || 0} %
            </span>
          </div>
          <hr className="my-4" />

          {/* High Price */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">High Price of the Day (h):</span>
            <span className="font-medium text-gray-900">
              $ {stockData.high || 0}
            </span>
          </div>
          <hr className="my-4" />

          {/* Low Price */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Low Price of the Day (l):</span>
            <span className="font-medium text-gray-900">$ {stockData.low || 0}</span>
          </div>
          <hr className="my-4" />

          {/* Open Price */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Open Price of the Day (o):</span>
            <span className="font-medium text-gray-900">
              $ {stockData.open || 0}
            </span>
          </div>
          <hr className="my-4" />

          {/* Previous Close Price */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Previous Close Price (pc):</span>
            <span className="font-medium text-gray-900">
              $ {stockData.prevClose || 0}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Price;
