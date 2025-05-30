export default function GrantsDonations() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#003366] mb-4">Grants & Donations</h1>
        <p className="text-gray-600 text-lg">
          Support Wayzata DECA through grants and donations to enhance student opportunities and program excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-[#003366] mb-4">How Donations Help</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <i className="ri-graduation-cap-line text-blue-600 mt-1 mr-2"></i>
              Fund competition travel and registration fees
            </li>
            <li className="flex items-start">
              <i className="ri-book-line text-blue-600 mt-1 mr-2"></i>
              Purchase educational materials and resources
            </li>
            <li className="flex items-start">
              <i className="ri-trophy-line text-blue-600 mt-1 mr-2"></i>
              Support state and international competition participation
            </li>
            <li className="flex items-start">
              <i className="ri-group-line text-blue-600 mt-1 mr-2"></i>
              Provide scholarships for students in need
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-[#003366] mb-4">Grant Opportunities</h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Educational Foundation Grants</h3>
              <p className="text-sm text-gray-600">Supporting innovative business education programs</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Community Partnership Grants</h3>
              <p className="text-sm text-gray-600">Local business and community organization funding</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">DECA Inc. Scholarships</h3>
              <p className="text-sm text-gray-600">National DECA scholarship opportunities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#003366] to-[#0056b3] text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>
        <p className="mb-6">
          Your contribution directly impacts student success and helps build the next generation of business leaders.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold mb-1">$25</div>
            <div className="text-sm">Student Materials</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold mb-1">$100</div>
            <div className="text-sm">Competition Entry</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold mb-1">$500</div>
            <div className="text-sm">Travel Support</div>
          </div>
        </div>
        <div className="text-center">
          <p className="mb-4">Contact us to learn more about donation opportunities:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center">
              <i className="ri-mail-line mr-2"></i>
              <span>wayzatadeca@isd284.org</span>
            </div>
            <div className="flex items-center justify-center">
              <i className="ri-phone-line mr-2"></i>
              <span>(952) 745-5000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}