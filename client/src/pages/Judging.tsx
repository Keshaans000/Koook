export default function Judging() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#003366] mb-4">Judging Opportunities</h1>
        <p className="text-gray-600 text-lg">
          Join our community of business professionals who help evaluate student presentations and competitions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-[#003366] mb-4">Why Judge DECA Events?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <i className="ri-lightbulb-line text-yellow-600 mt-1 mr-2"></i>
              Mentor the next generation of business leaders
            </li>
            <li className="flex items-start">
              <i className="ri-network-line text-yellow-600 mt-1 mr-2"></i>
              Network with other business professionals
            </li>
            <li className="flex items-start">
              <i className="ri-eye-line text-yellow-600 mt-1 mr-2"></i>
              See innovative student solutions to real business challenges
            </li>
            <li className="flex items-start">
              <i className="ri-heart-line text-yellow-600 mt-1 mr-2"></i>
              Give back to your community
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-[#003366] mb-4">Judge Requirements</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <i className="ri-briefcase-line text-[#003366] mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Business Experience</h3>
                <p className="text-sm text-gray-600">Professional experience in business, marketing, finance, or related fields</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-time-line text-[#003366] mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Time Commitment</h3>
                <p className="text-sm text-gray-600">4-6 hours on competition day, plus brief orientation</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-shield-check-line text-[#003366] mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Background Check</h3>
                <p className="text-sm text-gray-600">Required for all volunteers working with students</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-[#003366] mb-6">Competition Events We Need Judges For</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">Business Management</h3>
            <p className="text-sm text-gray-600">Strategic planning and operations</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">Marketing</h3>
            <p className="text-sm text-gray-600">Digital and traditional marketing strategies</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">Finance</h3>
            <p className="text-sm text-gray-600">Financial analysis and planning</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">Hospitality & Tourism</h3>
            <p className="text-sm text-gray-600">Service industry management</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">Entrepreneurship</h3>
            <p className="text-sm text-gray-600">Startup and innovation concepts</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">Personal Finance</h3>
            <p className="text-sm text-gray-600">Individual financial literacy</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-[#003366] mb-6">Competition Day Schedule</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#003366] mb-4 flex items-center">
              <i className="ri-sun-line text-yellow-600 mr-2"></i>
              AM Events
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <i className="ri-time-line text-blue-600 mt-1 mr-2"></i>
                <div>
                  <strong>8:00 AM</strong> - Judge Check In (B204 - 2nd Floor Forum Room)
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-time-line text-blue-600 mt-1 mr-2"></i>
                <div>
                  <strong>8:15 AM</strong> - Judge Orientation
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-time-line text-blue-600 mt-1 mr-2"></i>
                <div>
                  <strong>8:30 AM</strong> - Judges to booths (gyms)
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-time-line text-blue-600 mt-1 mr-2"></i>
                <div>
                  <strong>9:00 AM</strong> - Presentations Start
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-blue-200">
              <h4 className="font-medium text-gray-800 mb-2">Event Categories:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Individual Series (Sports & Entertainment Only)</li>
                <li>• Team Decision Making (Buying & Merch, Entre, Finance, Hospitality, Marketing Mgmt, Sports, Travel)</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#003366] mb-4 flex items-center">
              <i className="ri-sun-fill text-orange-600 mr-2"></i>
              PM Events
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start">
                <i className="ri-time-line text-orange-600 mt-1 mr-2"></i>
                <div>
                  <strong>12:30 PM</strong> - Judge Check In (B204 - 2nd Floor Forum Room)
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-time-line text-orange-600 mt-1 mr-2"></i>
                <div>
                  <strong>1:00 PM</strong> - Judges to booths (gyms)
                </div>
              </div>
              <div className="flex items-start">
                <i className="ri-time-line text-orange-600 mt-1 mr-2"></i>
                <div>
                  <strong>1:30 PM</strong> - Presentations Start
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-orange-200">
              <h4 className="font-medium text-gray-800 mb-2">Event Categories:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• International Business Plan</li>
                <li>• Professional Selling</li>
                <li>• Integrated Marketing Plan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#003366] mb-4 flex items-center">
            <i className="ri-shield-user-line text-green-600 mr-2"></i>
            Chaperone Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Morning Shift</h4>
              <p className="text-gray-700">7:45 AM - 12:00 PM (Report to C122)</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Afternoon Shift</h4>
              <p className="text-gray-700">12:00 PM - 4:30 PM (Report to C122)</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-[#003366] mb-4 flex items-center">
            <i className="ri-lightbulb-line text-yellow-600 mr-2"></i>
            Judge Tips
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
              <span>Sample role plays are provided for practice (from previous years - not current competition materials)</span>
            </li>
            <li className="flex items-start">
              <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
              <span>Arrive 15 minutes early for check-in and orientation</span>
            </li>
            <li className="flex items-start">
              <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
              <span>Bring business attire and comfortable shoes for moving between booths</span>
            </li>
            <li className="flex items-start">
              <i className="ri-check-line text-green-600 mt-1 mr-2"></i>
              <span>Check-in location: B204 - 2nd Floor Forum Room for all sessions</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#003366] text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Become a Judge</h2>
        <p className="mb-6">
          Ready to make a difference in students' lives? Contact us to learn about upcoming judging opportunities and how to get involved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center">
            <i className="ri-mail-line mr-2"></i>
            <span>wayzatadeca@isd284.org</span>
          </div>
          <div className="flex items-center">
            <i className="ri-phone-line mr-2"></i>
            <span>(952) 745-5000</span>
          </div>
        </div>
        <div className="mt-4 text-sm opacity-90">
          <p>Typical judging dates: District Competition (January), State Competition (March)</p>
        </div>
      </div>
    </div>
  );
}