import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnnouncementsBanner from "@/components/AnnouncementsBanner";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <AnnouncementsBanner />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#003366] to-[#004080] text-white py-20">
        {/* Decorative elements */}
        <div className="absolute -right-20 top-0 h-full w-96 bg-[#FFD700] opacity-10 transform rotate-12"></div>
        <div className="absolute -left-32 -bottom-16 h-32 w-80 bg-[#FFD700] opacity-10 rounded-full"></div>
        <div className="absolute right-[30%] -bottom-20 h-32 w-32 bg-[#E63946] opacity-10 rounded-full"></div>
        <div className="absolute left-[20%] -top-10 h-28 w-28 bg-[#2C7BE5] opacity-10 rounded-full"></div>
        
        {/* Trophy decorations */}
        <div className="absolute right-[15%] top-8 text-[#FFD700] opacity-20">
          <i className="ri-trophy-fill text-6xl"></i>
        </div>
        <div className="absolute left-[10%] top-12 text-[#FFD700] opacity-20">
          <i className="ri-medal-line text-5xl"></i>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-[#FFD700]">Wayzata DECA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Prepare • Compete • Excel in Marketing, Finance, and Business
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/home">
                <Button 
                  size="lg"
                  className="bg-[#FFD700] text-[#003366] hover:bg-[#FFC000] font-semibold px-8 py-3 text-lg"
                >
                  <i className="ri-calendar-line mr-2"></i>
                  View Calendar & Events
                </Button>
              </Link>
              <Link href="/current-winners">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#003366] font-semibold px-8 py-3 text-lg"
                >
                  <i className="ri-trophy-fill mr-2"></i>
                  See Our Winners
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-lg mb-2">ICDC Winners</h3>
              <p className="text-blue-100 text-sm">3rd Place in Integrated Marketing</p>
              <Link href="/current-winners">
                <Button size="sm" variant="secondary" className="mt-3 bg-white text-blue-600 hover:bg-blue-50">
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-bold text-lg mb-2">Leadership Team</h3>
              <p className="text-green-100 text-sm">Meet our 2025-2026 officers</p>
              <Link href="/team">
                <Button size="sm" variant="secondary" className="mt-3 bg-white text-green-600 hover:bg-green-50">
                  Meet the Team
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="font-bold text-lg mb-2">DECA Help</h3>
              <p className="text-purple-100 text-sm">Resources & competition tips</p>
              <Link href="/deca-help">
                <Button size="sm" variant="secondary" className="mt-3 bg-white text-purple-600 hover:bg-purple-50">
                  Get Help
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="font-bold text-lg mb-2">Upcoming Events</h3>
              <p className="text-orange-100 text-sm">Competitions & meetings</p>
              <Link href="/home">
                <Button 
                  size="sm" 
                  variant="secondary" 
                  className="mt-3 bg-white text-orange-600 hover:bg-orange-50"
                >
                  View Calendar
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Latest Updates */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#003366] mb-4 flex items-center">
                <i className="ri-notification-3-line mr-2 text-[#E63946]"></i>
                Latest Updates
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#FFD700] pl-4 py-2">
                  <h4 className="font-semibold text-gray-800">ICDC 2025 Results</h4>
                  <p className="text-gray-600 text-sm">Congratulations to our 3rd place winners in Integrated Marketing!</p>
                  <span className="text-xs text-gray-500">Recently</span>
                </div>
                <div className="border-l-4 border-blue-400 pl-4 py-2">
                  <h4 className="font-semibold text-gray-800">Leadership Team Updated</h4>
                  <p className="text-gray-600 text-sm">Meet our new 2025-2026 officers and team members.</p>
                  <span className="text-xs text-gray-500">This week</span>
                </div>
                <div className="border-l-4 border-green-400 pl-4 py-2">
                  <h4 className="font-semibold text-gray-800">Competition Resources Added</h4>
                  <p className="text-gray-600 text-sm">New DECA help section with study guides and tips.</p>
                  <span className="text-xs text-gray-500">This week</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#003366] mb-4 flex items-center">
                <i className="ri-links-line mr-2 text-[#2C7BE5]"></i>
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/competitions">
                  <Button variant="outline" className="w-full justify-start h-auto py-3">
                    <i className="ri-trophy-line mr-2 text-[#E63946]"></i>
                    <span className="text-left">
                      <div className="font-medium">Competitions</div>
                      <div className="text-xs text-gray-500">Upcoming events</div>
                    </span>
                  </Button>
                </Link>
                <Link href="/deadlines">
                  <Button variant="outline" className="w-full justify-start h-auto py-3">
                    <i className="ri-alarm-line mr-2 text-[#FFD700]"></i>
                    <span className="text-left">
                      <div className="font-medium">Deadlines</div>
                      <div className="text-xs text-gray-500">Important dates</div>
                    </span>
                  </Button>
                </Link>
                <Link href="/meetings">
                  <Button variant="outline" className="w-full justify-start h-auto py-3">
                    <i className="ri-group-line mr-2 text-[#2C7BE5]"></i>
                    <span className="text-left">
                      <div className="font-medium">Meetings</div>
                      <div className="text-xs text-gray-500">Weekly schedule</div>
                    </span>
                  </Button>
                </Link>
                <Link href="/teacher-corner">
                  <Button variant="outline" className="w-full justify-start h-auto py-3">
                    <i className="ri-user-star-line mr-2 text-[#28A745]"></i>
                    <span className="text-left">
                      <div className="font-medium">Teacher Corner</div>
                      <div className="text-xs text-gray-500">Instructor resources</div>
                    </span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Section */}
        <Card className="shadow-lg bg-gradient-to-r from-[#003366] to-[#004080] text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Excel in DECA?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Join Wayzata DECA and develop your business, marketing, and leadership skills while competing at the highest levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button size="lg" className="bg-[#FFD700] text-[#003366] hover:bg-[#FFC000] font-semibold">
                  Learn About DECA
                </Button>
              </Link>
              <a href="https://www.instagram.com/wayzatadeca/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#003366] font-semibold">
                  <i className="ri-instagram-line mr-2"></i>
                  Follow Us
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Homepage;