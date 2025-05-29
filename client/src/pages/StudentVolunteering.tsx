import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StudentVolunteering = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-64 bg-gradient-to-br from-green-50 to-white rounded-br-3xl opacity-70"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-[#003366] to-blue-100 rounded-full opacity-20"></div>
      <div className="absolute top-40 left-20 w-32 h-32 bg-gradient-to-br from-[#FFD700] to-yellow-100 rounded-full opacity-10"></div>
      
      {/* Decorative icons */}
      <div className="absolute top-6 left-10 text-[#28A745] opacity-20 transform -rotate-12">
        <i className="ri-hand-heart-line text-5xl"></i>
      </div>
      <div className="absolute top-40 right-10 text-[#003366] opacity-15">
        <i className="ri-team-line text-4xl"></i>
      </div>
      <div className="absolute bottom-20 left-1/4 text-[#FFD700] opacity-10">
        <i className="ri-community-line text-3xl"></i>
      </div>
      
      <div className="relative z-10 space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Student Volunteering
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make a difference in your community while building leadership skills and earning service hours
          </p>
        </div>

        {/* Chapter Service Volunteering */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-[#003366] mb-4 flex items-center">
              <i className="ri-trophy-line mr-3 text-[#E63946]"></i>
              Chapter Service Volunteering
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Athletic Events */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#003366] border-b border-gray-200 pb-2">
                  Athletic Events Volunteering
                </h3>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Football Games Volunteering</h4>
                  <p className="text-gray-600 text-sm mb-3">Support our Trojans at home football games</p>
                  <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#003366] hover:bg-[#004080]">
                      Sign Up
                    </Button>
                  </a>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Boys' Basketball Games Volunteering</h4>
                  <p className="text-gray-600 text-sm mb-3">Help with concessions and game day activities</p>
                  <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#E63946] hover:bg-[#D32F2F]">
                      Sign Up
                    </Button>
                  </a>
                </div>

                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Girls' Basketball Games Volunteering</h4>
                  <p className="text-gray-600 text-sm mb-3">Support our Lady Trojans basketball team</p>
                  <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#E91E63] hover:bg-[#C2185B]">
                      Sign Up
                    </Button>
                  </a>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Girls' Volleyball Games Volunteering</h4>
                  <p className="text-gray-600 text-sm mb-3">Assist with volleyball game operations</p>
                  <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#9C27B0] hover:bg-[#7B1FA2]">
                      Sign Up
                    </Button>
                  </a>
                </div>
              </div>

              {/* School Events */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#003366] border-b border-gray-200 pb-2">
                  School & DECA Events
                </h3>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Back-2-Business Days</h4>
                  <p className="text-gray-600 text-sm mb-3">August orientation events for new students</p>
                  <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#FFC107] text-gray-800 hover:bg-[#FFB300]">
                      Sign Up
                    </Button>
                  </a>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">District Conference Set-Up & Tear Down</h4>
                  <p className="text-gray-600 text-sm mb-3">January 25th & 26th - Help with conference logistics</p>
                  <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#009688] hover:bg-[#00796B]">
                      Sign Up
                    </Button>
                  </a>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Fall Social</h4>
                  <p className="text-gray-600 text-sm mb-3">September 26th - Help organize chapter social event</p>
                  <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#3F51B5] hover:bg-[#303F9F]">
                      Sign Up
                    </Button>
                  </a>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Homecoming Block Party</h4>
                  <p className="text-gray-600 text-sm mb-3">September 20th - Support homecoming activities</p>
                  <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#F44336] hover:bg-[#D32F2F]">
                      Sign Up
                    </Button>
                  </a>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Parent Open House</h4>
                  <p className="text-gray-600 text-sm mb-3">September 11th - Assist with parent information night</p>
                  <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#4CAF50] hover:bg-[#388E3C]">
                      Sign Up
                    </Button>
                  </a>
                </div>

                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Registration Night</h4>
                  <p className="text-gray-600 text-sm mb-3">February 5th - Help with DECA registration</p>
                  <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-[#00BCD4] hover:bg-[#0097A7]">
                      Sign Up
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community Service Volunteering */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-[#003366] mb-4 flex items-center">
              <i className="ri-heart-line mr-3 text-[#28A745]"></i>
              Community Service Volunteering
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Feed My Starving Children */}
              <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <i className="ri-restaurant-line text-4xl text-orange-600 mb-2"></i>
                    <h3 className="text-lg font-bold text-gray-800">Feed My Starving Children</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      <strong>Date:</strong> Monday, November 18th, 2024
                    </p>
                    <p className="text-sm text-gray-600">
                      Will open after first Mandatory Meeting
                    </p>
                    <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        Sign Up for FMSC
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Trick or Treat for Cans */}
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <i className="ri-gift-line text-4xl text-yellow-600 mb-2"></i>
                    <h3 className="text-lg font-bold text-gray-800">Trick or Treat for Cans</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Minimum of 30 non-perishable items dropped off at specified location
                    </p>
                    <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                        Sign Up for Trick or Treat
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Winter Walk */}
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <i className="ri-footprint-line text-4xl text-blue-600 mb-2"></i>
                    <h3 className="text-lg font-bold text-gray-800">Winter Walk</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Support our community through winter charity walks
                    </p>
                    <div className="space-y-2">
                      <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                          Sign Up for Winter Walk
                        </Button>
                      </a>
                      <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                          Instructions & Permission Slip
                        </Button>
                      </a>
                      <a href="https://www.deca.org/high-school-programs/international-career-development-conference/" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                          Donation Form
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <Card className="shadow-lg bg-gradient-to-r from-[#003366] to-[#004080] text-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Why Volunteer with Wayzata DECA?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <i className="ri-award-line text-4xl text-[#FFD700] mb-3"></i>
                <h3 className="font-semibold mb-2">Build Leadership Skills</h3>
                <p className="text-blue-100 text-sm">
                  Develop real-world leadership and organizational abilities
                </p>
              </div>
              <div className="text-center">
                <i className="ri-team-line text-4xl text-[#FFD700] mb-3"></i>
                <h3 className="font-semibold mb-2">Community Impact</h3>
                <p className="text-blue-100 text-sm">
                  Make a meaningful difference in your local community
                </p>
              </div>
              <div className="text-center">
                <i className="ri-time-line text-4xl text-[#FFD700] mb-3"></i>
                <h3 className="font-semibold mb-2">Service Hours</h3>
                <p className="text-blue-100 text-sm">
                  Earn valuable service hours for college applications
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentVolunteering;