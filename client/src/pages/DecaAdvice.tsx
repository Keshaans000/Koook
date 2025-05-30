import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const DecaAdvice = () => {
  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -right-16 top-0 h-32 w-48 bg-[#FFD700] opacity-5 transform rotate-12"></div>
      <div className="absolute -left-20 -bottom-10 h-20 w-40 bg-[#003366] opacity-5 rounded-full"></div>
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 relative z-10">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
            <i className="ri-lightbulb-line text-[#FFD700] mr-3"></i>
            DECA Advice
          </h1>
          <p className="text-gray-600">
            Essential tips, study guides, and resources to help you succeed in DECA competitions
          </p>
        </div>
        <Link href="/">
          <Button variant="outline" className="flex items-center space-x-2 mt-4 md:mt-0 border-[#003366] text-[#003366] hover:bg-[#003366] hover:bg-opacity-5">
            <i className="ri-arrow-left-line"></i>
            <span>Back to Home</span>
          </Button>
        </Link>
      </div>

      {/* Main Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
        {/* Competition Study Guide */}
        <Card className="bg-white border-2 border-[#003366] hover:shadow-xl transition-all duration-300 hover:border-[#FFD700]">
          <CardHeader className="bg-gradient-to-r from-[#003366] to-[#004080] text-white">
            <div className="flex items-center">
              <i className="ri-book-open-line text-[#FFD700] text-2xl mr-3"></i>
              <div>
                <CardTitle className="text-xl font-bold">Competition Study Guide</CardTitle>
                <CardDescription className="text-gray-200">
                  Comprehensive preparation materials for DECA events
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-600">
                Access detailed study materials, event guidelines, and preparation strategies to excel in your DECA competitions.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">What's Included:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Event-specific study guides
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Competition formats and rules
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Performance indicators and rubrics
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Sample scenarios and case studies
                  </li>
                </ul>
              </div>
              
              <Button 
                asChild
                className="w-full bg-[#003366] hover:bg-[#004080] text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                <a 
                  href="https://docs.google.com/document/d/161dzglhqf8F7JI_trBPV1xp9QbYQ1xaSvKKiLL-Y4p8/edit?tab=t.0#heading=h.5s9lbfdi56ii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <i className="ri-external-link-line"></i>
                  <span>Access Study Guide</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* DECA Test Terms Flashcards */}
        <Card className="bg-white border-2 border-[#E63946] hover:shadow-xl transition-all duration-300 hover:border-[#FFD700]">
          <CardHeader className="bg-gradient-to-r from-[#E63946] to-[#D62B39] text-white">
            <div className="flex items-center">
              <i className="ri-stack-line text-[#FFD700] text-2xl mr-3"></i>
              <div>
                <CardTitle className="text-xl font-bold">DECA Test Terms</CardTitle>
                <CardDescription className="text-gray-200">
                  Interactive flashcards for key business terminology
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-600">
                Master essential business terms and concepts with interactive flashcards designed specifically for DECA competitions.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Study Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Interactive flashcard format
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Key business terminology
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Mobile-friendly study tools
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Progress tracking and testing
                  </li>
                </ul>
              </div>
              
              <Button 
                asChild
                className="w-full bg-[#E63946] hover:bg-[#D62B39] text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                <a 
                  href="https://quizlet.com/35464058/deca-test-terms-flash-cards/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <i className="ri-external-link-line"></i>
                  <span>Study Flashcards</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Official DECA Competition Resources */}
        <Card className="bg-white border-2 border-[#2C7BE5] hover:shadow-xl transition-all duration-300 hover:border-[#FFD700]">
          <CardHeader className="bg-gradient-to-r from-[#2C7BE5] to-[#1A68D1] text-white">
            <div className="flex items-center">
              <i className="ri-trophy-line text-[#FFD700] text-2xl mr-3"></i>
              <div>
                <CardTitle className="text-xl font-bold">Official DECA Resources</CardTitle>
                <CardDescription className="text-gray-200">
                  Official competition guidelines and resources
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-600">
                Access the official DECA competition portal with event guidelines, performance indicators, and official resources.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Official Resources:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Event performance indicators
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Competition guidelines
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Sample test questions
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Presentation formats
                  </li>
                </ul>
              </div>
              
              <Button 
                asChild
                className="w-full bg-[#2C7BE5] hover:bg-[#1A68D1] text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                <a 
                  href="https://www.deca.org/compete" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <i className="ri-external-link-line"></i>
                  <span>Visit DECA.org</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* DECA Competition Files */}
        <Card className="bg-white border-2 border-[#28A745] hover:shadow-xl transition-all duration-300 hover:border-[#FFD700]">
          <CardHeader className="bg-gradient-to-r from-[#28A745] to-[#1E7E34] text-white">
            <div className="flex items-center">
              <i className="ri-folder-line text-[#FFD700] text-2xl mr-3"></i>
              <div>
                <CardTitle className="text-xl font-bold">Competition Files</CardTitle>
                <CardDescription className="text-gray-200">
                  Shared drive with competition materials
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="space-y-4">
              <p className="text-gray-600">
                Access our shared Google Drive folder containing additional competition resources and study materials.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Drive Contents:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Additional study materials
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Practice presentations
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Event-specific resources
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#28A745] mr-2"></i>
                    Team collaboration files
                  </li>
                </ul>
              </div>
              
              <Button 
                asChild
                className="w-full bg-[#28A745] hover:bg-[#1E7E34] text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                <a 
                  href="https://drive.google.com/drive/folders/1at86IOjF4C_embRBdqarenryK9RtNBQd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <i className="ri-external-link-line"></i>
                  <span>Access Drive</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Competition Events Poster */}
      <Card className="mb-8 bg-gradient-to-r from-[#8E44AD] to-[#7D3C98] text-white">
        <CardContent className="p-8 text-center">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="text-6xl">📊</div>
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold mb-2">Competitive Events Poster</h3>
              <p className="text-purple-100 mb-4">
                Visual guide to all DECA competitive events with descriptions and categories. Perfect for selecting your competition events.
              </p>
              <Button 
                asChild
                className="bg-white text-[#8E44AD] hover:bg-gray-100 font-semibold"
              >
                <a 
                  href="https://alabamadeca.com/wp-content/uploads/2022/07/Competitive-Events-Poster.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <i className="ri-download-line"></i>
                  <span>Download Events Poster</span>
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Study Tips Section */}
      <Card className="mb-8 bg-gradient-to-r from-[#FFD700] to-[#FFC000] border-none">
        <CardContent className="p-8 text-center">
          <div className="relative z-10">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-bold text-[#003366] mb-4">Pro Study Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#003366]">
              <div className="bg-white bg-opacity-80 p-4 rounded-lg">
                <i className="ri-time-line text-2xl mb-2"></i>
                <h4 className="font-semibold mb-2">Start Early</h4>
                <p className="text-sm">Begin studying at least 2-3 weeks before your competition for optimal preparation.</p>
              </div>
              <div className="bg-white bg-opacity-80 p-4 rounded-lg">
                <i className="ri-team-line text-2xl mb-2"></i>
                <h4 className="font-semibold mb-2">Practice with Partners</h4>
                <p className="text-sm">Work with teammates to practice presentations and role-playing scenarios.</p>
              </div>
              <div className="bg-white bg-opacity-80 p-4 rounded-lg">
                <i className="ri-repeat-line text-2xl mb-2"></i>
                <h4 className="font-semibold mb-2">Review Regularly</h4>
                <p className="text-sm">Use spaced repetition to reinforce key concepts and terminology.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Help Section */}
      <Card className="bg-gradient-to-r from-[#003366] to-[#004080] text-white">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need More Help?</h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Connect with our experienced DECA officers and advisors for personalized guidance and support.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/team">
              <Button className="bg-[#FFD700] text-[#003366] hover:bg-[#FFC000] font-semibold">
                <i className="ri-team-line mr-2"></i>
                Contact Officers
              </Button>
            </Link>
            <Link href="/teacher-corner">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#003366]">
                <i className="ri-user-line mr-2"></i>
                Teacher Resources
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DecaAdvice;