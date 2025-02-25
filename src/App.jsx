
import { Scanner } from '@yudiel/react-qr-scanner';

const App = () => {
  const handleScan = (codes) => {
    if (codes.length > 0) {
      codes.forEach((code) => {
        alert(`Detected: ${code.rawValue} (Format: ${code.format})`);
      });
    }
  };

  const handleError = (error) => {
    console.error('Scanner Error:', error);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 text-center text-white">
          <h1 className="text-xl font-bold">Micro QR Code Scanner</h1>
          <p className="text-sm">Scan a Micro QR Code using your camera</p>
        </div>

        <div className="p-4">
          <div className="rounded-lg border-2 border-dashed border-gray-300">
            <Scanner
              onScan={handleScan}
              onError={handleError}
              formats={['micro_qr_code']}
              className="w-full h-64 rounded-lg"
            />
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Allow camera access for scanning. Ensure good lighting for best results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
