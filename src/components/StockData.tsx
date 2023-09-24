import { useEffect, useState } from 'react';
import { fetchStockData } from '../api';
import SplashScreen from './SplashScreen';
import ErrorView from './ErrorView';

const StockData: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStockData()
      .then((response) => {
        setData(response);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false on error
      });
  }, []);

   if (!process.env.REACT_APP_API_URL || !process.env.REACT_APP_API_KEY) {
    return <ErrorView />;
  }

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <div className="p-4">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default StockData;