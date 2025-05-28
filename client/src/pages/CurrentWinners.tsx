import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CurrentWinners = () => {
  return (
    <>
      <div className="mb-8 relative">
        {/* Decorative elements */}
        <div className="absolute -right-16 top-0 h-32 w-48 bg-[#FFD700] opacity-5 transform rotate-12"></div>
        <div className="absolute -left-20 -bottom-10 h-20 w-40 bg-[#003366] opacity-5 rounded-full"></div>
        
        {/* Trophy decorations */}
        <div className="absolute right-[10%] top-5 text-[#FFD700] opacity-15">
          <i className="ri-trophy-fill text-6xl"></i>
        </div>
        <div className="absolute left-[5%] bottom-5 text-[#FFD700] opacity-10 transform rotate-12">
          <i className="ri-award-fill text-5xl"></i>
        </div>

        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
            <i className="ri-trophy-fill text-[#FFD700] mr-3"></i>
            Current Winners
          </h1>
          <p className="text-gray-600">
            Celebrating our latest achievements and competition victories
          </p>
        </div>
      </div>

      {/* ICDC Winners Section */}
      <div className="mb-10">
        <div className="bg-gradient-to-br from-[#FFD700] to-[#FFC000] rounded-xl p-8 text-center mb-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-white bg-opacity-20 rounded-full"></div>
          <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-white bg-opacity-15 rounded-full"></div>
          
          <div className="relative z-10">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-3xl font-bold text-[#003366] mb-2">
              ICDC Winners 2025
            </h2>
            <p className="text-[#003366] text-lg font-medium">
              Congrats to Wayzata DECA's newest ICDC winners!
            </p>
          </div>
        </div>

        {/* Winner Card */}
        <Card className="bg-white border-2 border-[#FFD700] shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="bg-gradient-to-r from-[#003366] to-[#004080] text-white">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <i className="ri-medal-fill text-[#FFD700] mr-2"></i>
                  Integrated Marketing - Service
                </CardTitle>
                <CardDescription className="text-gray-200 text-lg">
                  International Career Development Conference (ICDC)
                </CardDescription>
              </div>
              <Badge className="bg-[#FFD700] text-[#003366] text-lg px-4 py-2 font-bold">
                3rd Place
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Winner 1 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#FFD700] to-[#FFC000] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#003366] text-2xl font-bold">PR</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Prohitt Ram Kumar</h3>
                <p className="text-gray-600">Team Leader</p>
                <div className="mt-2">
                  <Badge variant="outline" className="border-[#FFD700] text-[#003366]">
                    Marketing Specialist
                  </Badge>
                </div>
              </div>

              {/* Winner 2 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#FFD700] to-[#FFC000] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#003366] text-2xl font-bold">AA</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Aman Agrawal</h3>
                <p className="text-gray-600">Team Member</p>
                <div className="mt-2">
                  <Badge variant="outline" className="border-[#FFD700] text-[#003366]">
                    Service Strategy
                  </Badge>
                </div>
              </div>

              {/* Winner 3 */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#FFD700] to-[#FFC000] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#003366] text-2xl font-bold">SK</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Sricharan Kanajam</h3>
                <p className="text-gray-600">Team Member</p>
                <div className="mt-2">
                  <Badge variant="outline" className="border-[#FFD700] text-[#003366]">
                    Integration Expert
                  </Badge>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">About the Event</h4>
              <p className="text-gray-600 mb-4">
                The Integrated Marketing - Service event challenges students to develop comprehensive marketing 
                strategies for service-oriented businesses. Teams must demonstrate their ability to integrate 
                various marketing channels and create cohesive campaigns that drive customer engagement and loyalty.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center">
                  <i className="ri-calendar-line text-[#003366] mr-2"></i>
                  <span>Competition Date: April 2025</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-map-pin-line text-[#003366] mr-2"></i>
                  <span>Location: Anaheim, CA</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-team-line text-[#003366] mr-2"></i>
                  <span>Team Event (2-3 members)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievement Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-[#FFD700] mb-2">3rd</div>
            <p className="text-gray-600">ICDC Placement</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-[#003366] mb-2">1st</div>
            <p className="text-gray-600">State Qualifying</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-[#E63946] mb-2">3</div>
            <p className="text-gray-600">Team Members</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-[#28A745] mb-2">2025</div>
            <p className="text-gray-600">Competition Year</p>
          </CardContent>
        </Card>
      </div>

      {/* Follow Us Section */}
      <div className="bg-gradient-to-r from-[#003366] to-[#004080] rounded-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Follow Our Journey</h3>
        <p className="text-gray-200 mb-6">
          Stay updated with our latest competitions, achievements, and events
        </p>
        <div className="flex justify-center">
          <Button 
            asChild
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-200"
          >
            <a 
              href="https://www.instagram.com/wayzatadeca/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <i className="ri-instagram-line text-2xl"></i>
              <span>@wayzatadeca</span>
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default CurrentWinners;