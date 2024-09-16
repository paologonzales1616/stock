import finnhubClient from "../../services/finnhubClient";

export const fetchPrice = async (symbol: string) => {
  try {
    const request = await finnhubClient("quote", {
      symbol,
    });

    if (request.ok) {
      return {
        data: await request.json(),
      };
    }
    return {
      error: "Failed fetching price",
    };
  } catch (error) {
    return {
      error: "Failed fetching price",
    };
  }
};
