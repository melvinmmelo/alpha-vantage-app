const ErrorView: React.FC = () => {
  return (
    <div className="p-4">
      <p className="text-red-500 text-lg font-semibold">
        Error: API URL or API Key not provided.
      </p>
    </div>
  );
};

export default ErrorView;