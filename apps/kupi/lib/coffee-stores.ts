const getUrlCoffeeStores = (lat: number, long: number, limit: number) => {
  return `https://api.foursquare.com/v3/places/search?query=coffee&ll=${lat}%2C${long}&limit=${limit}`;
};

export const fetchCoffeeStores: any = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.FORSQUARE_API_KEY,
    },
  };

  const response = await fetch(getUrlCoffeeStores(51.51, -0.13, 6), options);
  const data: any = await response.json();

  return data.results;
};
