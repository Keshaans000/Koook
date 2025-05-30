export default function LockerRoom() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#003366] mb-4">Locker Room</h1>
        <p className="text-gray-600 text-lg">
          Your exclusive access to member resources, study materials, and team collaboration tools.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center mb-4">
            <i className="ri-shield-user-line text-2xl text-blue-600 mr-3"></i>
            <h2 className="text-xl font-semibold text-[#003366]">Member Portal</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="text-blue-600 hover:underline">Member Directory</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Leadership Dashboard</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Personal Progress Tracker</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Certification Records</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Achievement Badges</a></li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center mb-4">
            <i className="ri-file-text-line text-2xl text-green-600 mr-3"></i>
            <h2 className="text-xl font-semibold text-[#003366]">Study Resources</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="text-blue-600 hover:underline">Exam Prep Materials</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Practice Tests</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Study Group Calendar</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Video Tutorials</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Flash Cards</a></li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center mb-4">
            <i className="ri-team-line text-2xl text-purple-600 mr-3"></i>
            <h2 className="text-xl font-semibold text-[#003366]">Team Collaboration</h2>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="text-blue-600 hover:underline">Team Chat Rooms</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Project Workspace</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">File Sharing Hub</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Meeting Notes</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Task Management</a></li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-[#003366] mb-4">Competition Prep Center</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <i className="ri-presentation-line text-blue-600 mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Presentation Practice</h3>
                <p className="text-sm text-gray-600">Record and review your presentations with peer feedback</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-timer-line text-blue-600 mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Mock Competitions</h3>
                <p className="text-sm text-gray-600">Simulate real competition environments and timing</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-feedback-line text-blue-600 mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Mentor Feedback</h3>
                <p className="text-sm text-gray-600">Get guidance from experienced DECA alumni and coaches</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-[#003366] mb-4">Member Benefits</h2>
          <div className="space-y-3">
            <div className="flex items-start">
              <i className="ri-vip-crown-line text-green-600 mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Exclusive Content</h3>
                <p className="text-sm text-gray-600">Access to premium study materials and resources</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-notification-badge-line text-green-600 mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Priority Updates</h3>
                <p className="text-sm text-gray-600">First to know about competitions and opportunities</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-award-line text-green-600 mt-1 mr-3"></i>
              <div>
                <h3 className="font-medium text-gray-800">Recognition Program</h3>
                <p className="text-sm text-gray-600">Earn points and rewards for participation and achievements</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-[#003366] mb-6">Trojan Merchandise Store</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <i className="ri-t-shirt-line text-4xl text-gray-400"></i>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Wayzata DECA T-Shirt</h3>
              <p className="text-sm text-gray-600 mb-2">Premium cotton blend with DECA logo</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#003366]">$18.99</span>
                <button className="bg-[#003366] text-white px-3 py-1 rounded text-sm hover:bg-[#004080]">
                  Order
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <i className="ri-shirt-line text-4xl text-gray-400"></i>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Polo Shirt</h3>
              <p className="text-sm text-gray-600 mb-2">Professional polo with embroidered logo</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#003366]">$32.50</span>
                <button className="bg-[#003366] text-white px-3 py-1 rounded text-sm hover:bg-[#004080]">
                  Order
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <i className="ri-hoodie-line text-4xl text-gray-400"></i>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Hooded Sweatshirt</h3>
              <p className="text-sm text-gray-600 mb-2">Warm fleece with Trojan pride</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#003366]">$45.00</span>
                <button className="bg-[#003366] text-white px-3 py-1 rounded text-sm hover:bg-[#004080]">
                  Order
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <i className="ri-cup-line text-4xl text-gray-400"></i>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Water Bottle</h3>
              <p className="text-sm text-gray-600 mb-2">Stainless steel with school colors</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#003366]">$22.95</span>
                <button className="bg-[#003366] text-white px-3 py-1 rounded text-sm hover:bg-[#004080]">
                  Order
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <i className="ri-briefcase-line text-4xl text-gray-400"></i>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Portfolio Folder</h3>
              <p className="text-sm text-gray-600 mb-2">Professional presentation folder</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#003366]">$15.50</span>
                <button className="bg-[#003366] text-white px-3 py-1 rounded text-sm hover:bg-[#004080]">
                  Order
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <i className="ri-pen-nib-line text-4xl text-gray-400"></i>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">DECA Pen Set</h3>
              <p className="text-sm text-gray-600 mb-2">Professional writing set</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#003366]">$12.99</span>
                <button className="bg-[#003366] text-white px-3 py-1 rounded text-sm hover:bg-[#004080]">
                  Order
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <i className="ri-medal-line text-4xl text-yellow-500"></i>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">DECA Pin</h3>
              <p className="text-sm text-gray-600 mb-2">Official DECA lapel pin</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#003366]">$8.50</span>
                <button className="bg-[#003366] text-white px-3 py-1 rounded text-sm hover:bg-[#004080]">
                  Order
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              <i className="ri-hat-line text-4xl text-gray-400"></i>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Baseball Cap</h3>
              <p className="text-sm text-gray-600 mb-2">Adjustable cap with embroidered logo</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#003366]">$19.75</span>
                <button className="bg-[#003366] text-white px-3 py-1 rounded text-sm hover:bg-[#004080]">
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">All merchandise orders are processed through our official school store</p>
          <a 
            href="https://sideline.bsnsports.com/schools/minnesota/plymouth/wayzata-high-school" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FFD700] text-[#003366] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFC000] transition-colors inline-block"
          >
            Visit Official Store
          </a>
        </div>
      </div>

      <div className="bg-[#003366] text-white rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Member Login Required</h2>
          <p className="mb-6 opacity-90">
            The Locker Room is an exclusive area for verified Wayzata DECA members. 
            Please log in with your member credentials to access all features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FFD700] text-[#003366] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFC000] transition-colors">
              Member Login
            </button>
            <button className="border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Request Access
            </button>
          </div>
          <div className="mt-4 text-sm opacity-75">
            <p>Contact your advisor for login credentials if you're a new member</p>
          </div>
        </div>
      </div>
    </div>
  );
}