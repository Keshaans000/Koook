import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { 
  FaTrophy, FaMedal, FaUserTie, FaChalkboardTeacher, 
  FaCheckCircle, FaShieldAlt, FaLightbulb, FaUserCheck, 
  FaChartLine, FaCalendarCheck, FaEnvelopeOpenText
} from "react-icons/fa";
import { 
  IoMdArrowDropright, IoMdDownload, IoMdLock, IoMdOpen  
} from "react-icons/io";
import {
  BsFileEarmarkExcel, BsFileEarmarkWord, BsFileEarmarkPdf, BsFileEarmarkText,
  BsBookHalf
} from "react-icons/bs";

const TeachersCorner = () => {
  const [showCode, setShowCode] = useState(false);
  const accessCode = "WHS-DECA-2025";
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [tempPassword, setTempPassword] = useState('');
  const { toast } = useToast();
  const [expand, setExpand] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [toolsUnlocked, setToolsUnlocked] = useState(false);
  const [downloadCounter, setDownloadCounter] = useState(0);
  
  const handleLogin = () => {
    if (tempPassword === "teacher2025") {
      setToolsUnlocked(true);
      setShowLoginModal(false);
      toast({
        title: "Access Granted",
        description: "You now have access to premium DECA advisor tools.",
        variant: "default",
      });
    } else {
      toast({
        title: "Invalid Password",
        description: "Please try again. Hint: teacher2025",
        variant: "destructive",
      });
    }
  };

  const handleExpand = () => {
    setExpand(!expand);
    toast({
      title: expand ? "Collapsed View" : "Expanded View",
      description: expand ? "Showing compact version" : "Showing detailed teacher tools",
      variant: "default",
    });
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    toast({
      title: `Switched to ${value.charAt(0).toUpperCase() + value.slice(1)}`,
      description: `Viewing ${value} section for DECA advisors`,
      variant: "default",
    });
  };

  const handleDownload = (templateName: string) => {
    setDownloadCounter(prev => prev + 1);
    toast({
      title: "Download Started",
      description: `${templateName} is being downloaded to your device.`,
      variant: "default",
    });
  };

  const handleRequestAccess = () => {
    if (!toolsUnlocked) {
      setShowLoginModal(true);
    } else {
      toast({
        title: "You Already Have Access",
        description: "You're logged in as a DECA advisor",
        variant: "default",
      });
    }
  };
  
  return (
    <div className="mt-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 right-20 w-40 h-40 bg-gradient-to-br from-[#E63946] to-transparent rounded-full opacity-10"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-[#003366] to-transparent rounded-full opacity-10"></div>
      
      {/* DECA Trophy */}
      <div className="absolute top-6 right-6 text-[#FFD700] opacity-20 z-10 transform rotate-12">
        <FaTrophy size={36} />
      </div>
      <div className="absolute bottom-10 left-10 text-[#003366] opacity-15 z-10">
        <FaMedal size={28} />
      </div>
      
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-[#003366] mb-4">Teacher Login</h3>
            <p className="text-gray-600 mb-4">Enter your password to access DECA advisor tools</p>
            <input 
              type="password" 
              value={tempPassword}
              onChange={(e) => setTempPassword(e.target.value)}
              placeholder="Password" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
            />
            <p className="text-xs text-gray-500 mb-4">For demo purposes, use: "teacher2025"</p>
            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setShowLoginModal(false)}>
                Cancel
              </Button>
              <Button onClick={handleLogin} className="bg-[#003366]">
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <Card className={`border-2 border-[#003366] transition-all duration-300 ${expand ? 'transform translate-y-0' : ''}`}>
        <CardHeader className="bg-gradient-to-r from-[#003366] to-[#004d99] text-white">
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center text-xl">
              <FaChalkboardTeacher className="mr-2 text-2xl" />
              Teacher's Corner
            </CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="h-8 w-8 p-0 text-white rounded-full"
                    onClick={handleExpand}
                  >
                    {expand ? '-' : '+'}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{expand ? 'Collapse' : 'Expand'} view</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <CardDescription className="text-blue-100">
            Special tools and resources exclusively for DECA advisors
          </CardDescription>
        </CardHeader>
        
        <Tabs defaultValue="overview" className="w-full" value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="grid grid-cols-3 m-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tools">Advisor Tools</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="p-2">
            <CardContent>
              <div className="bg-[#003366] bg-opacity-5 p-4 rounded-lg mb-4 border border-[#003366] border-opacity-20">
                <h3 className="text-lg font-semibold text-[#003366] mb-2">Welcome, DECA Advisors!</h3>
                <p className="text-gray-700">
                  This special Teacher's Corner provides exclusive tools designed to help you manage your DECA chapter more effectively,
                  track student progress, and access resources that will enhance your role as a DECA advisor.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer" onClick={() => setActiveTab('tools')}>
                  <div className="flex items-center text-[#E63946] mb-2">
                    <FaCheckCircle className="mr-2" />
                    <h4 className="font-medium">Why This Tool Matters</h4>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <IoMdArrowDropright className="text-[#E63946] mr-1 mt-1 flex-shrink-0" />
                      <span>Streamline communications with your DECA chapter</span>
                    </li>
                    <li className="flex items-start">
                      <IoMdArrowDropright className="text-[#E63946] mr-1 mt-1 flex-shrink-0" />
                      <span>Track important deadlines and competition requirements</span>
                    </li>
                    <li className="flex items-start">
                      <IoMdArrowDropright className="text-[#E63946] mr-1 mt-1 flex-shrink-0" />
                      <span>Access advanced analytics for chapter performance</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer" onClick={() => toolsUnlocked ? toast({
                  title: "Already Unlocked",
                  description: "You already have advisor access",
                }) : setShowLoginModal(true)}>
                  <div className="flex items-center text-[#003366] mb-2">
                    <FaShieldAlt className="mr-2" />
                    <h4 className="font-medium">Advisor Access {toolsUnlocked && '(Unlocked)'}</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    This section is password-protected to ensure advisor-only content remains secure.
                  </p>
                  <div className="flex items-center">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowCode(!showCode);
                      }}
                      className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded border border-gray-300 transition-colors"
                    >
                      {showCode ? "Hide Access Code" : "Show Access Code"}
                    </button>
                    {showCode && (
                      <span className="ml-3 bg-gray-100 px-2 py-1 rounded border border-gray-300 text-sm font-mono">
                        {accessCode}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div 
                className="bg-gradient-to-r from-[#FFD700] to-[#FFEC99] bg-opacity-30 p-4 rounded-lg border border-[#FFD700] border-opacity-30 hover:shadow-md transition-all cursor-pointer"
                onClick={() => {
                  toast({
                    title: "Teacher Tools Available",
                    description: "Click 'Request Access' to unlock premium features",
                  });
                }}
              >
                <div className="flex items-start">
                  <FaLightbulb className="text-[#B8860B] text-xl mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-[#B8860B] mb-1">Teacher Advantage</h4>
                    <p className="text-sm text-gray-800">
                      This website tool was designed with special input from DECA advisors across the country to address the specific 
                      challenges of managing a successful DECA chapter. The features included here will save hours of administrative 
                      work and help you focus on what matters most: developing future business leaders.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </TabsContent>
          
          <TabsContent value="tools" className="p-2">
            <CardContent>
              <div className="space-y-4">
                <div 
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  onClick={() => {
                    if (!toolsUnlocked) {
                      setShowLoginModal(true);
                    } else {
                      toast({
                        title: "Student Tracker Launched",
                        description: "Loading student progress data...",
                      });
                    }
                  }}
                >
                  <div className="flex items-center">
                    <div className="bg-[#003366] rounded-full p-2 text-white mr-3">
                      <FaUserCheck className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Student Progress Tracker</h4>
                      <p className="text-sm text-gray-600">Monitor individual student progress through interactive dashboards</p>
                    </div>
                    {!toolsUnlocked ? (
                      <Badge className="ml-auto bg-blue-100 text-blue-800 hover:bg-blue-200">Login Required</Badge>
                    ) : (
                      <Badge className="ml-auto bg-green-100 text-green-800 hover:bg-green-200">Available</Badge>
                    )}
                  </div>
                </div>
                
                <div 
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  onClick={() => {
                    if (!toolsUnlocked) {
                      setShowLoginModal(true);
                    } else {
                      toast({
                        title: "Analytics Dashboard",
                        description: "Loading competition performance data...",
                      });
                    }
                  }}
                >
                  <div className="flex items-center">
                    <div className="bg-[#E63946] rounded-full p-2 text-white mr-3">
                      <FaChartLine className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Competition Analytics</h4>
                      <p className="text-sm text-gray-600">Data-driven insights into chapter performance across competition categories</p>
                    </div>
                    {!toolsUnlocked ? (
                      <Badge className="ml-auto bg-blue-100 text-blue-800 hover:bg-blue-200">Login Required</Badge>
                    ) : (
                      <Badge className="ml-auto bg-green-100 text-green-800 hover:bg-green-200">Available</Badge>
                    )}
                  </div>
                </div>
                
                <div 
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  onClick={() => {
                    if (!toolsUnlocked) {
                      setShowLoginModal(true);
                    } else {
                      toast({
                        title: "Deadline Manager",
                        description: "Opening deadline management system...",
                      });
                    }
                  }}
                >
                  <div className="flex items-center">
                    <div className="bg-[#2C7BE5] rounded-full p-2 text-white mr-3">
                      <FaCalendarCheck className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Deadline Manager</h4>
                      <p className="text-sm text-gray-600">Set and track important deadlines with automated student reminders</p>
                    </div>
                    {!toolsUnlocked ? (
                      <Badge className="ml-auto bg-blue-100 text-blue-800 hover:bg-blue-200">Login Required</Badge>
                    ) : (
                      <Badge className="ml-auto bg-green-100 text-green-800 hover:bg-green-200">Available</Badge>
                    )}
                  </div>
                </div>
                
                <div 
                  className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  onClick={() => {
                    if (!toolsUnlocked) {
                      setShowLoginModal(true);
                    } else {
                      toast({
                        title: "Communication Center",
                        description: "Opening messaging center for DECA members...",
                      });
                    }
                  }}
                >
                  <div className="flex items-center">
                    <div className="bg-[#FFD700] rounded-full p-2 text-[#003366] mr-3">
                      <FaEnvelopeOpenText className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Mass Communication</h4>
                      <p className="text-sm text-gray-600">Send announcements and updates to selected student groups</p>
                    </div>
                    {!toolsUnlocked ? (
                      <Badge className="ml-auto bg-blue-100 text-blue-800 hover:bg-blue-200">Login Required</Badge>
                    ) : (
                      <Badge className="ml-auto bg-green-100 text-green-800 hover:bg-green-200">Available</Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </TabsContent>
          
          <TabsContent value="resources" className="p-2">
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <a 
                    href="https://www.deca.org/advisors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                    onClick={() => {
                      toast({
                        title: "External Link",
                        description: "Opening DECA Advisor Resource Hub in new tab",
                      });
                    }}
                  >
                    <div className="bg-[#003366] rounded-full p-2 text-white mr-3">
                      <BsBookHalf className="text-lg" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">DECA Advisor Resource Hub</h4>
                      <p className="text-sm text-gray-600">Official DECA resources for chapter advisors</p>
                    </div>
                    <IoMdOpen className="text-[#003366]" />
                  </a>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <a 
                    href="https://www.deca.org/professional-development" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                    onClick={() => {
                      toast({
                        title: "External Link",
                        description: "Opening DECA Professional Development in new tab",
                      });
                    }}
                  >
                    <div className="bg-[#E63946] rounded-full p-2 text-white mr-3">
                      <FaUserTie className="text-lg" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">Professional Development</h4>
                      <p className="text-sm text-gray-600">Training and development opportunities for DECA advisors</p>
                    </div>
                    <IoMdOpen className="text-[#E63946]" />
                  </a>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <a 
                    href="https://www.deca.org/impact/classroom" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                    onClick={() => {
                      toast({
                        title: "External Link",
                        description: "Opening DECA Classroom Resources in new tab",
                      });
                    }}
                  >
                    <div className="bg-[#2C7BE5] rounded-full p-2 text-white mr-3">
                      <FaChalkboardTeacher className="text-lg" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">Classroom Resources</h4>
                      <p className="text-sm text-gray-600">Lesson plans, activities, and teaching materials</p>
                    </div>
                    <IoMdOpen className="text-[#2C7BE5]" />
                  </a>
                </div>
                
                <div className="bg-[#003366] bg-opacity-5 p-4 rounded-lg border border-[#003366] border-opacity-20">
                  <div className="flex items-start">
                    <IoMdDownload className="text-[#003366] text-xl mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-[#003366] mb-1">Downloadable Templates</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Save time with these pre-made templates designed specifically for DECA advisors:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        <Button 
                          variant="outline" 
                          className="flex items-center justify-start border-[#003366] text-[#003366] bg-white hover:bg-[#003366] hover:text-white transition-colors"
                          onClick={() => handleDownload("Student Roster Template")}
                        >
                          <BsFileEarmarkExcel className="mr-2" />
                          <span>Student Roster Template</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex items-center justify-start border-[#003366] text-[#003366] bg-white hover:bg-[#003366] hover:text-white transition-colors"
                          onClick={() => handleDownload("Competition Checklist")}
                        >
                          <BsFileEarmarkWord className="mr-2" />
                          <span>Competition Checklist</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex items-center justify-start border-[#003366] text-[#003366] bg-white hover:bg-[#003366] hover:text-white transition-colors"
                          onClick={() => handleDownload("Chapter Budget Planner")}
                        >
                          <BsFileEarmarkPdf className="mr-2" />
                          <span>Chapter Budget Planner</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex items-center justify-start border-[#003366] text-[#003366] bg-white hover:bg-[#003366] hover:text-white transition-colors"
                          onClick={() => handleDownload("Progress Report Template")}
                        >
                          <BsFileEarmarkText className="mr-2" />
                          <span>Progress Report Template</span>
                        </Button>
                      </div>
                      {downloadCounter > 0 && (
                        <div className="mt-3 text-xs text-green-600 font-medium">
                          {downloadCounter} file{downloadCounter !== 1 ? 's' : ''} downloaded successfully
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </TabsContent>
        </Tabs>
        
        <CardFooter className="bg-gray-50 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6">
          <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 flex items-center text-sm">
            <IoMdLock className="text-blue-500 mr-2" />
            <span className="text-blue-700">{toolsUnlocked ? "Premium features unlocked" : "Full features unlock with advisor credentials"}</span>
          </div>
          {!toolsUnlocked ? (
            <Button 
              className="bg-[#003366] hover:bg-[#00264d] text-white ml-auto transition-colors"
              onClick={handleRequestAccess}
            >
              Request Access
            </Button>
          ) : (
            <Link href="/teacher-corner">
              <Button 
                className="bg-[#003366] hover:bg-[#00264d] text-white ml-auto transition-colors"
                onClick={() => {
                  toast({
                    title: "Opening Full Dashboard",
                    description: "Navigating to the Teacher's Corner dashboard",
                  });
                }}
              >
                Go to Full Dashboard
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default TeachersCorner;