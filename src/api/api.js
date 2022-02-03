const getData = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchFxPrices = () => getData('https://financialmodelingprep.com/api/v3/fx?apikey=c19c2edabcb9d5df88a5dbcfcc5d29a4');

export const fetchCryptos = (symbol) => getData(`https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=c19c2edabcb9d5df88a5dbcfcc5d29a4`);

export const fetchStocks = () => getData('https://financialmodelingprep.com/api/v3/available-traded/list?apikey=c19c2edabcb9d5df88a5dbcfcc5d29a4');

export const fetchEFTs = () => getData('https://financialmodelingprep.com/api/v3/etf/list?apikey=c19c2edabcb9d5df88a5dbcfcc5d29a4');
