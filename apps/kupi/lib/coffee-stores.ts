import { createApi } from 'unsplash-js';
import { getPhotos } from 'unsplash-js/dist/methods/search';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

const getUrlCoffeeStores = (lat: number, long: number, limit: number) => {
  return `https://api.foursquare.com/v3/places/search?query=coffee&ll=${lat}%2C${long}&limit=${limit}`;
};

const getListOfCoffeeStoresPhotos = async () => {
  const photos = await unsplash.search.getPhotos({
    query: 'coffee shop',
    page: 1,
    perPage: 6,
  });

  const unsplashResults = photos.response.results;

  return unsplashResults.map((result) => result.urls['small']);
};

export const fetchCoffeeStores: any = async () => {
  const photos = await getListOfCoffeeStoresPhotos();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.FORSQUARE_API_KEY,
    },
  };

  const response = await fetch(getUrlCoffeeStores(51.51, -0.13, 6), options);
  const data: any = await response.json();

  return data.results.map((result, index) => {
    return {
      id: result.fsq_id,
      name: result.name,
      address: result.location.address,
      locality: result.location.locality,
      imgUrl: photos[index],
    };
  });
};
