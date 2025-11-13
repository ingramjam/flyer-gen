export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Flyer Templates
        </h1>
        <p className="text-gray-600 mb-8">
          Choose from our collection of healthcare referral flyer templates
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Template cards would go here */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="aspect-[8.5/11] bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-blue-500 text-sm">Template Preview</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Basic Health Referral</h3>
            <p className="text-sm text-gray-600 mb-4">Simple and clean design for healthcare referrals</p>
            <a
              href="/editor"
              className="inline-block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Use Template
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="aspect-[8.5/11] bg-gradient-to-br from-green-50 to-green-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-green-500 text-sm">Template Preview</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Kick It California</h3>
            <p className="text-sm text-gray-600 mb-4">Branded template with California health initiative styling</p>
            <a
              href="/editor"
              className="inline-block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Use Template
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="aspect-[8.5/11] bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-purple-500 text-sm">Template Preview</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Community Outreach</h3>
            <p className="text-sm text-gray-600 mb-4">Perfect for community health events and programs</p>
            <a
              href="/editor"
              className="inline-block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Use Template
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="/editor"
            className="inline-block bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-900"
          >
            Start with Blank Canvas
          </a>
        </div>
      </div>
    </div>
  );
}