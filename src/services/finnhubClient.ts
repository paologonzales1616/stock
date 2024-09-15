const api_key = "cri8ns1r01qqt33rc9egcri8ns1r01qqt33rc9f0";

function finnhubFetchClient(action: string, query: object) {
  const url = `https://finnhub.io/api/v1/${action}?${new URLSearchParams({
    ...query,
    token: api_key,
  })}`;
  
  return fetch(url);
}

export default finnhubFetchClient;
