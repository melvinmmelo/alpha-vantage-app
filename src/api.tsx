import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchStockData = async () => {
  try {
    const response = await axios.get(`${API_URL}?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
};