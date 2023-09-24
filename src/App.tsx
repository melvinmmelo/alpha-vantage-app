// src/App.tsx
import React from 'react';
import StockData from './components/StockData';

function App() {
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-semibold mb-4">Stock Data</h1>
      <StockData />
    </div>
  );
}

export default App;