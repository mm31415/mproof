import { API_URL, API_KEY, API_HOST } from '../secret';

export const fetchData = (pageNumber, searchValue) => {
  console.log(searchValue);
  const url = `${API_URL}&pageNumber=${pageNumber}&q=${searchValue}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      "X-RapidAPI-Host": API_HOST,
      "X-RapidAPI-Key": API_KEY
    }
  });
};
