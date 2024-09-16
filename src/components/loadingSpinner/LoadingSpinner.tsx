function LoadingSpinner() {
  return (
    <div className="relative max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-2">
      <div className="flex flex-col items-center">
        <div className="loader"></div>
        <style>{`
        .loader {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          border-top: 4px solid #3498db;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        <p className="mt-4 text-gray-600">Loading, please wait...</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
