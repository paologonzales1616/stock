import finnhubClient from "../../services/finnhubClient";

export const fetchPrice = async (symbol: string) => {
  try {
   const request = await finnhubClient("quote", {
      symbol,
    });

    if (request.ok) {
      return await request.json();
    }
    
  } catch (error) {
    return { error }
  }
};
