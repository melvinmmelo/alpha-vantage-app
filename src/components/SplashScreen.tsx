const SplashScreen: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white z-50">
      {/* You can add loading animation or content here */}
      <div className="text-4xl font-bold">Loading...</div>
    </div>
  );
};

export default SplashScreen;