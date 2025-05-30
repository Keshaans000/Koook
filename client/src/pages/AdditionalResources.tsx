export default function AdditionalResources() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#003366] mb-4">Additional Resources</h1>
        <p className="text-gray-600 text-lg">
          Comprehensive resources to help you succeed in DECA competitions and develop your business skills.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center mb-4">
            <i className="ri-book-line text-2xl text-blue-600 mr-3"></i>
            <h2 className="text-xl font-semibold text-[#003366]">Study Materials</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="text-blue-600 hover:underline">DECA Guidelines & Rubrics</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Sample Test Questions</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Business Case Studies</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Performance Indicators</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Study Guides by Event</a></li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center mb-4">
            <i className="ri-presentation-line text-2xl text-green-600 mr-3"></i>
            <h2 className="text-xl font-semibold text-[#003366]">Presentation Tools</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="text-blue-600 hover:underline">PowerPoint Templates</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Presentation Best Practices</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Public Speaking Tips</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Visual Design Guidelines</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Time Management Strategies</a></li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center mb-4">
            <i className="ri-global-line text-2xl text-purple-600 mr-3"></i>
            <h2 className="text-xl font-semibold text-[#003366]">External Links</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li><a href="https://www.deca.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DECA Inc. Official Site</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Minnesota DECA</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Business News & Trends</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Industry Reports</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Career Resources</a></li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-[#003366] mb-4">Competition Preparation</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <i className="ri-calendar-check-line text-blue-600 mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Timeline Planning</h3>
                <p className="text-sm text-gray-600">Create a study schedule leading up to competitions</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-team-line text-blue-600 mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Practice Sessions</h3>
                <p className="text-sm text-gray-600">Regular practice with peers and mentors</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-award-line text-blue-600 mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Mock Competitions</h3>
                <p className="text-sm text-gray-600">Simulate real competition environments</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-[#003366] mb-4">Skill Development</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <i className="ri-brain-line text-green-600 mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Critical Thinking</h3>
                <p className="text-sm text-gray-600">Analyze business scenarios and make decisions</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-message-3-line text-green-600 mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Communication</h3>
                <p className="text-sm text-gray-600">Professional presentation and interpersonal skills</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-lightbulb-line text-green-600 mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Innovation</h3>
                <p className="text-sm text-gray-600">Creative problem-solving and entrepreneurial thinking</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#003366] text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Our Officers</h3>
            <p className="mb-4 opacity-90">
              Reach out to our experienced DECA officers for personalized guidance and mentorship.
            </p>
            <div className="flex items-center">
              <i className="ri-mail-line mr-2"></i>
              <span>wayzatadeca@isd284.org</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Study Groups</h3>
            <p className="mb-4 opacity-90">
              Join or form study groups with fellow DECA members to prepare together and share knowledge.
            </p>
            <div className="flex items-center">
              <i className="ri-group-line mr-2"></i>
              <span>Check our calendar for scheduled study sessions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}