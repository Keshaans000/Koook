import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import image1 from "@assets/image_1748641905529.png";
import image2 from "@assets/image_1748641924221.png";
import image3 from "@assets/image_1748641954170.png";
import image4 from "@assets/image_1748641994054.png";
import image5 from "@assets/image_1748642234960.png";
import image6 from "@assets/image_1748643084004.png";
import image7 from "@assets/image_1748643122791.png";
import image8 from "@assets/image_1748646682074.png";
import image9 from "@assets/image_1748646993320.png";

const Homepage = () => {
  const [showSupportOptions, setShowSupportOptions] = useState(false);
  const { toast } = useToast();

  const [showSupportPopup, setShowSupportPopup] = useState(false);

  const handleSupportClick = () => {
    setShowSupportPopup(true);
  };

  return (
    <div className="space-y-6">
      {/* Header Section with Background Images */}
      <div className="relative bg-gradient-to-r from-[#003366] via-[#004080] to-[#2C7BE5] text-white p-8 rounded-xl shadow-2xl overflow-hidden min-h-[600px]">
        {/* Background Images */}
        <div className="absolute inset-0 opacity-40">
          <div className="grid grid-cols-5 h-full">
            <div className="relative overflow-hidden">
              <img src={image3} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden">
              <img src={image6} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden">
              <img src={image1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden">
              <img src={image7} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden">
              <img src={image9} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/40 via-[#004080]/30 to-[#2C7BE5]/40"></div>
        
        {/* Trophy decorations */}
        <div className="absolute top-4 right-8 text-[#FFD700] opacity-20 z-10">
          <i className="ri-trophy-fill text-5xl"></i>
        </div>
        <div className="absolute bottom-4 left-8 text-[#FFD700] opacity-20 z-10">
          <i className="ri-medal-line text-4xl"></i>
        </div>
        
        <div className="relative z-20 text-center flex flex-col justify-center min-h-[550px]">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-[#FFD700] bg-opacity-20 p-4 rounded-full mb-4">
              <i className="ri-home-4-line text-5xl text-[#FFD700]"></i>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
                Welcome to 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFC000]">
                  Wayzata DECA
                </span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFC000] rounded-full mx-auto"></div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto leading-relaxed">
            🚀 Your gateway to <span className="text-[#FFD700] font-semibold">business excellence</span>, 
            <span className="text-[#FFD700] font-semibold"> leadership development</span>, and 
            <span className="text-[#FFD700] font-semibold"> competitive success</span> 🏆
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mb-6">
            <a 
              href="https://www.instagram.com/wayzatadeca/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Follow us on Instagram"
            >
              <i className="ri-instagram-line text-2xl text-white"></i>
            </a>
            <a 
              href="https://www.facebook.com/wayzata.deca.16/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Follow us on Facebook"
            >
              <i className="ri-facebook-line text-2xl text-white"></i>
            </a>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <div className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm font-medium">
              🎯 350 Active Members
            </div>
            <div className="bg-white bg-opacity-10 px-6 py-3 rounded-full text-lg font-bold">
              🏆 250 State Qualifiers
            </div>
            <div className="bg-white bg-opacity-10 px-6 py-3 rounded-full text-lg font-bold">
              🥇 58 ICDC Qualifiers
            </div>
            <div className="bg-white bg-opacity-10 px-4 py-2 rounded-full text-sm font-medium">
              📈 Premier Minnesota Chapter
            </div>
          </div>
        </div>
        
      </div>

      {/* Support DECA Button */}
      <div className="text-center">
        <Button 
          onClick={handleSupportClick}
          className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFC000] hover:to-[#FF8C00] text-black font-bold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <i className="ri-heart-line mr-2"></i>
          Support DECA
          <i className="ri-heart-line ml-2"></i>
        </Button>
        

      </div>

      {/* DECA Moments */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#003366] mb-6 text-center">DECA Moments</h2>
        
        {/* Large group photo */}
        <div className="relative group mb-6">
          <img 
            src={image5} 
            alt="Our ICDC Competitors This Year" 
            className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 rounded-lg flex items-center justify-center">
            <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h3 className="font-bold text-3xl mb-3">Our ICDC Competitors 2025</h3>
              <p className="text-xl">58 Students Who Competed at Nationals</p>
            </div>
          </div>
        </div>

        {/* Individual photos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative group">
            <img 
              src={image6} 
              alt="Mr. Kimbler and Ms. Jacklitch our advisors at Orlando" 
              className="w-full h-48 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 rounded-lg flex items-center justify-center">
              <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h3 className="font-bold text-lg mb-2">Mr. Kimbler & Ms. Jacklitch</h3>
                <p className="text-sm">Our Advisors at Orlando</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img 
              src={image4} 
              alt="Our President Sajana Guruprasad" 
              className="w-full h-48 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 rounded-lg flex items-center justify-center">
              <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h3 className="font-bold text-lg">Sajana Guruprasad</h3>
                <p className="text-sm">Our President</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img 
              src={image8} 
              alt="ICDC Winners with Glass Trophy" 
              className="w-full h-48 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 rounded-lg flex items-center justify-center">
              <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h3 className="font-bold text-lg mb-2">ICDC Winners</h3>
                <p className="text-sm">Glass Trophy Champions</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img 
              src={image2} 
              alt="Mr. Kimbler our advisor" 
              className="w-full h-48 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 rounded-lg flex items-center justify-center">
              <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h3 className="font-bold text-lg">Mr. Kimbler</h3>
                <p className="text-sm">Our Advisor</p>
              </div>
            </div>
          </div>
        </div>
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



      {/* Quick Info Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-lg border-l-4 border-l-[#2C7BE5]">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#2C7BE5] bg-opacity-10 p-3 rounded-full">
                <i className="ri-phone-line text-2xl text-[#2C7BE5]"></i>
              </div>
              <div>
                <h3 className="font-semibold text-[#003366] mb-2">Contact Information</h3>
                <p className="text-gray-700 text-sm space-y-1">
                  <span className="block">📧 wayzatadeca@isd284.org</span>
                  <span className="block">📞 (952) 745-5000</span>
                  <span className="block">💻 Technology Support: Ansh Kesharwani</span>
                  <span className="block">📱 Keshaans000@isd284.com | 651-382-5377</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-l-4 border-l-[#FFD700]">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#FFD700] bg-opacity-10 p-3 rounded-full">
                <i className="ri-calendar-line text-2xl text-[#FFA500]"></i>
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

      {/* Support DECA Popup */}
      {showSupportPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4 relative">
            <div className="text-center">
              {/* Decorative elements */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center">
                <i className="ri-heart-line text-3xl text-white"></i>
              </div>
              
              {/* Hearts decoration */}
              <div className="flex justify-center space-x-2 mb-4">
                <i className="ri-heart-fill text-red-400 text-lg animate-pulse"></i>
                <i className="ri-heart-fill text-pink-400 text-sm animate-pulse" style={{animationDelay: '0.2s'}}></i>
                <i className="ri-heart-fill text-red-400 text-lg animate-pulse" style={{animationDelay: '0.4s'}}></i>
              </div>

              <h3 className="text-2xl font-bold text-[#003366] mb-4">Support DECA</h3>
              
              <div className="bg-gradient-to-r from-blue-50 to-yellow-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700 mb-3">
                  Looking to support our DECA chapter? 
                </p>
                <p className="text-lg font-semibold text-[#003366]">
                  📍 Please check the sidebar and click "Support DECA"
                </p>
              </div>

              <div className="text-sm text-gray-600 mb-6 space-y-1">
                <p>✨ Sponsorship opportunities available</p>
                <p>💝 Grants & donations welcome</p>
                <p>🏆 Help students achieve their goals</p>
              </div>

              <button
                onClick={() => setShowSupportPopup(false)}
                className="bg-gradient-to-r from-[#003366] to-[#2C7BE5] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Got it! 
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Homepage;