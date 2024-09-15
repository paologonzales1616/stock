function Welcome() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome</h1>
        <p className="text-gray-600 mb-6">
          Search for stock prices in real-time.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
