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

      {/* About DECA */}
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-[#003366] mb-4 flex items-center">
            <i className="ri-trophy-line mr-3 text-[#E63946]"></i>
            What is DECA?
          </h2>
          <div className="text-gray-700 space-y-3">
            <p>
              DECA (Distributive Education Clubs of America) is an association of marketing students 
              that prepares emerging leaders and entrepreneurs for careers in marketing, finance, 
              hospitality, and management.
            </p>
            <p>
              <strong>Our Mission:</strong> To prepare emerging leaders and entrepreneurs in marketing, 
              finance, hospitality and management in high schools and colleges around the globe.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <h3 className="font-semibold text-[#003366] mb-2">DECA Competitive Events Include:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Marketing Management</li>
                <li>Business Finance</li>
                <li>Hospitality & Tourism</li>
                <li>Entrepreneurship</li>
                <li>Business Administration</li>
                <li>Personal Financial Literacy</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About Wayzata DECA */}
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-[#003366] mb-4 flex items-center">
            <i className="ri-team-line mr-3 text-[#28A745]"></i>
            About Wayzata DECA
          </h2>
          <div className="text-gray-700 space-y-3">
            <p>
              Wayzata DECA is one of Minnesota's premier DECA chapters, consistently achieving 
              excellence at district, state, and international competitions. Our chapter is 
              dedicated to developing the next generation of business leaders.
            </p>
            <p>
              <strong>Our Achievements:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>ICDC 2025: 3rd Place in Integrated Marketing Campaign</li>
              <li>Multiple State Championship qualifiers annually</li>
              <li>District Competition winners in various categories</li>
              <li>Outstanding chapter recognition at state level</li>
            </ul>
            <p>
              <strong>Chapter Activities:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Weekly meetings and preparation sessions</li>
              <li>Business case study practice</li>
              <li>Role-play and presentation workshops</li>
              <li>Community service projects</li>
              <li>Networking events with local businesses</li>
            </ul>
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