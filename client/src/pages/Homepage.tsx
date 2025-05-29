import { Card, CardContent } from "@/components/ui/card";

const Homepage = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#003366] to-[#004080] text-white p-8 rounded-lg">
        <div className="flex items-center mb-4">
          <i className="ri-home-4-line text-4xl text-[#FFD700] mr-4"></i>
          <h1 className="text-3xl font-bold">Welcome to Wayzata DECA</h1>
        </div>
        <p className="text-blue-100 text-lg">
          Your gateway to business excellence, leadership development, and competitive success.
        </p>
      </div>

      {/* About Wayzata High School */}
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-[#003366] mb-4 flex items-center">
            <i className="ri-school-line mr-3 text-[#2C7BE5]"></i>
            About Wayzata High School
          </h2>
          <div className="text-gray-700 space-y-3">
            <p>
              Wayzata High School is located in Plymouth, Minnesota, and serves the Wayzata School District. 
              Known for academic excellence and outstanding extracurricular programs, Wayzata High School 
              has been consistently ranked among the top high schools in Minnesota.
            </p>
            <p>
              Our school is home to over 3,000 students and offers a comprehensive curriculum with 
              Advanced Placement courses, International Baccalaureate programs, and numerous 
              career-focused pathways including business and entrepreneurship.
            </p>
            <p>
              <strong>Address:</strong> 4955 Peony Lane N, Plymouth, MN 55446<br />
              <strong>Established:</strong> 1997<br />
              <strong>Mascot:</strong> Trojans<br />
              <strong>Colors:</strong> Navy Blue and Gold
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Membership & Participation Details */}
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-[#003366] mb-4 flex items-center">
            <i className="ri-user-add-line mr-3 text-[#2C7BE5]"></i>
            Membership & Participation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#003366] mb-2">Eligibility Requirements</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Enrollment in a business department class for the year of participation</li>
                  <li>• Meet Wayzata Public Schools Extra-Curricular Eligibility Requirements</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#003366] mb-2">Season & Meetings</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Season:</strong> School year (September-May)</li>
                  <li>• <strong>Meetings:</strong> Once a month on Wednesday evenings or Thursday mornings</li>
                  <li>• <strong>Locations:</strong> Forum Rooms, A143, A148, or Culinary Express</li>
                  <li>• Additional meetings before competitions</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#003366] mb-2">Participation Costs</h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>Base Fee: $175</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>$55 School fee</li>
                    <li>$35 DECA fee</li>
                    <li>$85 District fee</li>
                  </ul>
                  <p className="text-xs text-gray-600">
                    Additional fees for conferences (FLC, CRLC, SCDC, ICDC) as applicable
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#003366] mb-2">Chapter Size</h3>
                <p className="text-2xl font-bold text-[#003366]">~180 Members</p>
                <p className="text-sm text-gray-600">Average number of active DECA members</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Competition Schedule & Recognition */}
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-[#003366] mb-4 flex items-center">
            <i className="ri-trophy-line mr-3 text-[#E63946]"></i>
            Competitions & Recognition
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[#003366] mb-3">Competition Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</div>
                  <div>
                    <p className="font-medium">District Competition</p>
                    <p className="text-sm text-gray-600">January at Wayzata High School</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</div>
                  <div>
                    <p className="font-medium">State Competition</p>
                    <p className="text-sm text-gray-600">March in Minneapolis</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</div>
                  <div>
                    <p className="font-medium">International Competition</p>
                    <p className="text-sm text-gray-600">April (locations vary)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#003366] mb-3">Lettering Criteria</h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">Students can letter in DECA by achieving <strong>any</strong> of the following:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Complete all volunteering requirements by District competition</li>
                  <li>• Compete at District and qualify for State</li>
                  <li>• Score 80+ on District competition test</li>
                  <li>• Qualify for International competition</li>
                </ul>
              </div>
              
              <div className="mt-4 bg-gradient-to-r from-[#FFD700] to-yellow-400 p-4 rounded-lg text-center">
                <h4 className="font-bold text-[#003366] mb-2">DECA Sashes</h4>
                <p className="text-sm text-[#003366]">Awarded for leadership, dedication, and perseverance:</p>
                <ul className="text-xs text-[#003366] mt-2 space-y-1">
                  <li>• 4-year competing member</li>
                  <li>• ICDC competitor</li>
                  <li>• Wayzata DECA Officer</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>



      {/* Website Information */}
      <Card className="shadow-lg bg-gradient-to-r from-gray-50 to-blue-50">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-[#003366] mb-4 flex items-center">
            <i className="ri-code-line mr-3 text-[#6366F1]"></i>
            About This Website
          </h2>
          <div className="text-gray-700 space-y-3">
            <p>
              This website was created to serve as a comprehensive platform for the Wayzata DECA chapter, 
              providing members, advisors, and the community with easy access to important information, 
              resources, and updates.
            </p>
            <div className="bg-white p-4 rounded-lg border-l-4 border-[#6366F1]">
              <h3 className="font-semibold text-[#003366] mb-2">Website Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Interactive event calendar with competition dates and deadlines</li>
                <li>Team information and leadership profiles</li>
                <li>DECA resources and study materials</li>
                <li>Meeting schedules and important announcements</li>
                <li>Current winners and achievement showcase</li>
                <li>Teacher corner with instructor resources</li>
              </ul>
            </div>
            <div className="bg-[#003366] text-white p-4 rounded-lg text-center">
              <p className="text-lg font-semibold mb-2">
                <i className="ri-user-star-line mr-2"></i>
                Website Created By
              </p>
              <p className="text-[#FFD700] text-xl font-bold">Ansh Kesharwani</p>
              <p className="text-blue-200 text-sm">
                Wayzata DECA Member & Web Developer
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-[#003366] mb-4 flex items-center">
            <i className="ri-contacts-line mr-3 text-[#E63946]"></i>
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-[#003366] mb-2">Wayzata DECA Chapter</h3>
              <p className="text-gray-700 text-sm space-y-1">
                <span className="block">📍 Wayzata High School</span>
                <span className="block">📧 Contact through school advisors</span>
                <span className="block">📱 Follow us on Instagram: @wayzatadeca</span>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#003366] mb-2">Meeting Times</h3>
              <p className="text-gray-700 text-sm space-y-1">
                <span className="block">🗓️ Weekly meetings</span>
                <span className="block">⏰ Check calendar for specific times</span>
                <span className="block">📍 Room assignments posted in announcements</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Homepage;