
import { Scanner } from '@yudiel/react-qr-scanner';

const App = () => {
  const handleScan = (codes) => {
    if (codes.length > 0) {
      codes.forEach((code) => {
        const text = code.rawValue.toLowerCase(); // Convert to lowercase for case-insensitivity
        if (text === 'feedback') {
          window.location.href = 'https://www.scales.uxlivinglab.online/voc/scale/?workspace_id=66c3a354c0c8c6fbadd5fed4&username=VOCABC&scale_id=66c9d21e9090b1529d108a63&scale_type=likert&channel=channel_1&instance_name=instance_5&channel_display_name=VOCABC_CHANNEL_1&instance_display_name=Stand'; // Redirect to feedback form
        } else {
          window.location.href = 'https://dowellresearch.sg/'
        }
      });
    }
  };

  const handleError = (error) => {
    console.error('Scanner Error:', error);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Header with logo and product name */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-center text-white relative">
          <div className="absolute top-4 left-4">
            {/* Placeholder for DOWell logo */}
            <div className="flex items-center justify-center bg-white rounded-full w-10 h-10 overflow-hidden">
              <img src="https://dowellfileuploader.uxlivinglab.online/hr/logo-2-min-min.png" alt="DOWell Logo" className="w-8 h-8" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-1">DOWell Scanner</h1>
          <p className="text-sm opacity-90">Advanced Micro QR Code Recognition</p>
        </div>

        {/* Scanner container with improved styling */}
        <div className="p-6">
          <div className="mb-4">
            <p className="text-sm text-gray-700 mb-2 font-medium">Scan a Micro QR Code:</p>
            <div className="rounded-lg border-2 border-dashed border-indigo-200 bg-indigo-50 p-1 transition-all hover:border-indigo-300">
              <Scanner
                onScan={handleScan}
                onError={handleError}
                formats={['micro_qr_code']}
                className="w-full h-72 rounded-lg"
              />
            </div>
          </div>

          {/* Status indicator */}
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-100 text-green-800 rounded-full px-4 py-1 text-sm flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Scanner active
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <h3 className="font-medium text-gray-800 mb-2">Instructions</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Position the Micro QR code within the frame</li>
              <li>• Hold steady for best results</li>
              <li>• Ensure adequate lighting</li>
              <li>• Allow camera access when prompted</li>
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500">
              ©DoWell UX Living Lab | <a href="https://dowellresearch.sg/" className="text-blue-600 hover:underline">Visit our website</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;