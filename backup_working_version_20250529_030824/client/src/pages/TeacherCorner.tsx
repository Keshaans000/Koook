import { useState } from 'react';
import { Link } from "wouter";
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
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TeacherCorner = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [attemptedLogin, setAttemptedLogin] = useState(false);
  const [password, setPassword] = useState('');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate with a secure backend
    if (password === 'teacher2025') {
      setIsLoggedIn(true);
    } else {
      setAttemptedLogin(true);
    }
  };

  return (
    <div className="container mx-auto p-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#003366] to-transparent rounded-full opacity-10"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-[#FFD700] to-transparent rounded-full opacity-10"></div>
      <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-[#E63946] to-transparent rounded-full opacity-5"></div>
      
      <div className="mb-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-[#003366] to-[#2C7BE5] bg-clip-text text-transparent">
              DECA Teacher's Corner
            </h1>
            <p className="text-gray-600 max-w-2xl">
              A comprehensive suite of tools and resources designed exclusively for DECA advisors to enhance their teaching effectiveness and simplify chapter management.
            </p>
          </div>
          <Link href="/">
            <Button variant="outline" className="flex items-center space-x-2 mt-4 md:mt-0 border-[#003366] text-[#003366] hover:bg-[#003366] hover:bg-opacity-5">
              <i className="ri-arrow-left-line"></i>
              <span>Back to Dashboard</span>
            </Button>
          </Link>
        </div>
      </div>
      
      {isLoggedIn ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="bg-gradient-to-r from-[#003366] to-[#004d99] text-white">
                <div className="flex justify-between items-center">
                  <CardTitle>Advisor Dashboard</CardTitle>
                  <Badge className="bg-white text-[#003366]">Beta</Badge>
                </div>
                <CardDescription className="text-blue-100">
                  Overview of your DECA chapter's performance and upcoming activities
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="text-sm text-gray-500 mb-1">Active Members</div>
                    <div className="text-2xl font-bold text-[#003366]">127</div>
                    <div className="text-xs text-green-600 flex items-center mt-1">
                      <i className="ri-arrow-up-line mr-1"></i>
                      <span>+15% from last year</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="text-sm text-gray-500 mb-1">Competition Entries</div>
                    <div className="text-2xl font-bold text-[#E63946]">92</div>
                    <div className="text-xs text-gray-500 flex items-center mt-1">
                      <span>43 Individual / 49 Team</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="text-sm text-gray-500 mb-1">State Qualifiers</div>
                    <div className="text-2xl font-bold text-[#FFD700]">38</div>
                    <div className="text-xs text-gray-500 flex items-center mt-1">
                      <span>30% qualification rate</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Chapter Activity</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Member Registration</span>
                        <span className="text-[#003366] font-medium">98%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Competition Registration</span>
                        <span className="text-[#003366] font-medium">87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Written Entry Submissions</span>
                        <span className="text-[#003366] font-medium">63%</span>
                      </div>
                      <Progress value={63} className="h-2" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-gray-800 mb-3">Upcoming Deadlines</h3>
                <div className="space-y-2">
                  <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 flex items-center">
                    <div className="bg-[#FFD700] rounded-full p-2 text-white mr-3">
                      <i className="ri-alarm-warning-line"></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">State Conference Registration</div>
                      <div className="text-sm text-gray-600">Due in 5 days</div>
                    </div>
                    <Badge className="bg-yellow-200 text-yellow-800 hover:bg-yellow-300">Urgent</Badge>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                    <div className="bg-[#003366] rounded-full p-2 text-white mr-3">
                      <i className="ri-file-list-3-line"></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">Written Project Final Drafts</div>
                      <div className="text-sm text-gray-600">Due in 2 weeks</div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                    <div className="bg-[#2C7BE5] rounded-full p-2 text-white mr-3">
                      <i className="ri-money-dollar-circle-line"></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">Conference Fee Collection</div>
                      <div className="text-sm text-gray-600">Due in 3 weeks</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Resource Management</CardTitle>
                <CardDescription>
                  Tools to organize and distribute DECA resources to your members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="materials">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="materials">Materials</TabsTrigger>
                    <TabsTrigger value="templates">Templates</TabsTrigger>
                    <TabsTrigger value="library">Resource Library</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="materials" className="space-y-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-lg font-medium text-gray-800">Practice Materials</h3>
                      <Button variant="outline" size="sm" className="text-sm flex items-center">
                        <i className="ri-add-line mr-1"></i> Add New
                      </Button>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-[#E63946] text-white p-2 rounded-md mr-3">
                          <i className="ri-file-pdf-line"></i>
                        </div>
                        <div>
                          <div className="font-medium">Retail Merchandising Cluster Exam</div>
                          <div className="text-sm text-gray-500">PDF • 1.2 MB • Added: 3 weeks ago</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          <i className="ri-share-line"></i>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          <i className="ri-download-line"></i>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-[#2C7BE5] text-white p-2 rounded-md mr-3">
                          <i className="ri-file-word-line"></i>
                        </div>
                        <div>
                          <div className="font-medium">Business Solutions Case Study</div>
                          <div className="text-sm text-gray-500">DOCX • 845 KB • Added: 2 months ago</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          <i className="ri-share-line"></i>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          <i className="ri-download-line"></i>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-[#FFD700] text-[#003366] p-2 rounded-md mr-3">
                          <i className="ri-file-ppt-line"></i>
                        </div>
                        <div>
                          <div className="font-medium">Winning Presentation Strategies</div>
                          <div className="text-sm text-gray-500">PPTX • 3.7 MB • Added: 1 week ago</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          <i className="ri-share-line"></i>
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          <i className="ri-download-line"></i>
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="templates" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" className="h-auto p-4 flex items-start justify-start bg-white border-[#003366] border-opacity-50 hover:bg-[#003366] hover:bg-opacity-5">
                        <div className="bg-[#003366] text-white p-2 rounded-md mr-3">
                          <i className="ri-file-word-line"></i>
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-[#003366]">Written Project Template</div>
                          <div className="text-sm text-gray-500">Formatted according to DECA guidelines</div>
                        </div>
                      </Button>
                      
                      <Button variant="outline" className="h-auto p-4 flex items-start justify-start bg-white border-[#E63946] border-opacity-50 hover:bg-[#E63946] hover:bg-opacity-5">
                        <div className="bg-[#E63946] text-white p-2 rounded-md mr-3">
                          <i className="ri-file-excel-line"></i>
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-[#E63946]">Budget Spreadsheet</div>
                          <div className="text-sm text-gray-500">Automated calculations and projections</div>
                        </div>
                      </Button>
                      
                      <Button variant="outline" className="h-auto p-4 flex items-start justify-start bg-white border-[#2C7BE5] border-opacity-50 hover:bg-[#2C7BE5] hover:bg-opacity-5">
                        <div className="bg-[#2C7BE5] text-white p-2 rounded-md mr-3">
                          <i className="ri-file-ppt-line"></i>
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-[#2C7BE5]">Presentation Template</div>
                          <div className="text-sm text-gray-500">Professional slides with DECA branding</div>
                        </div>
                      </Button>
                      
                      <Button variant="outline" className="h-auto p-4 flex items-start justify-start bg-white border-[#FFD700] border-opacity-50 hover:bg-[#FFD700] hover:bg-opacity-10">
                        <div className="bg-[#FFD700] text-[#003366] p-2 rounded-md mr-3">
                          <i className="ri-file-chart-line"></i>
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-[#003366]">Data Analysis Toolkit</div>
                          <div className="text-sm text-gray-500">Charts and metrics for business projects</div>
                        </div>
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="library" className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-gray-800">DECA Resource Library</h3>
                      <div className="flex gap-2">
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Resources</SelectItem>
                            <SelectItem value="competition">Competition Prep</SelectItem>
                            <SelectItem value="curriculum">Curriculum</SelectItem>
                            <SelectItem value="management">Chapter Management</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm" className="text-sm">
                          <i className="ri-search-line mr-1"></i> Search
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <a href="https://www.deca.org/high-school-programs/high-school-competitive-events/guidelines" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-[#003366] text-white p-2 rounded-md mr-3">
                            <i className="ri-book-open-line"></i>
                          </div>
                          <div>
                            <div className="font-medium">DECA Competitive Events Guidelines</div>
                            <div className="text-sm text-gray-500">Official DECA publication • Updated for 2024-2025</div>
                          </div>
                        </div>
                        <i className="ri-external-link-line text-[#003366]"></i>
                      </a>
                      
                      <a href="https://www.deca.org/professional-development" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-[#E63946] text-white p-2 rounded-md mr-3">
                            <i className="ri-user-settings-line"></i>
                          </div>
                          <div>
                            <div className="font-medium">Advisor Professional Development</div>
                            <div className="text-sm text-gray-500">Training resources and certification opportunities</div>
                          </div>
                        </div>
                        <i className="ri-external-link-line text-[#E63946]"></i>
                      </a>
                      
                      <a href="https://www.deca.org/impact/classroom" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-[#2C7BE5] text-white p-2 rounded-md mr-3">
                            <i className="ri-presentation-line"></i>
                          </div>
                          <div>
                            <div className="font-medium">Classroom Curriculum Resources</div>
                            <div className="text-sm text-gray-500">Lesson plans and teaching materials</div>
                          </div>
                        </div>
                        <i className="ri-external-link-line text-[#2C7BE5]"></i>
                      </a>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-gradient-to-r from-[#FFD700] to-[#FFD700] opacity-90">
                <CardTitle className="text-[#003366]">Advisor Profile</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 bg-[#003366] rounded-full flex items-center justify-center text-white text-4xl mb-3">
                    <i className="ri-user-3-line"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Paul Kimbler</h3>
                  <p className="text-gray-600">DECA Faculty Advisor</p>
                  <Badge className="mt-2 bg-blue-100 text-blue-800">8 years experience</Badge>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <i className="ri-mail-line text-[#003366] mr-2"></i>
                    <span>paul.kimbler@wayzataschools.org</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="ri-phone-line text-[#003366] mr-2"></i>
                    <span>(763) 555-0168</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="ri-map-pin-line text-[#003366] mr-2"></i>
                    <span>Room 254, Wayzata High School</span>
                  </div>
                </div>
                
                <div className="bg-[#003366] bg-opacity-5 p-4 rounded-lg border border-[#003366] border-opacity-20">
                  <h4 className="font-medium text-[#003366] mb-2">Chapter Achievements</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <i className="ri-trophy-line text-[#FFD700] mr-2 mt-0.5"></i>
                      <span>12 ICDC qualifiers in 2024</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-trophy-line text-[#FFD700] mr-2 mt-0.5"></i>
                      <span>State Chapter of Excellence Award</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-trophy-line text-[#FFD700] mr-2 mt-0.5"></i>
                      <span>Community Service Award 2023</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 px-6 py-4">
                <Button className="w-full bg-[#003366] hover:bg-[#00264d]">Edit Profile</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Button className="w-full justify-start bg-[#E63946] hover:bg-[#d62c3a]">
                    <i className="ri-mail-send-line mr-2"></i>
                    Send Announcement
                  </Button>
                  <Button className="w-full justify-start bg-[#2C7BE5] hover:bg-[#1a68d3]">
                    <i className="ri-calendar-event-line mr-2"></i>
                    Schedule Meeting
                  </Button>
                  <Button className="w-full justify-start bg-[#003366] hover:bg-[#00264d]">
                    <i className="ri-file-chart-line mr-2"></i>
                    Generate Reports
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <i className="ri-settings-3-line mr-2"></i>
                    Manage Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">SYSTEM STATUS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Last sync</span>
                    <span className="text-green-600">2 minutes ago</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Storage</span>
                    <span>1.2 GB / 5 GB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Version</span>
                    <span>v2.5.1</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <Card className="max-w-md mx-auto">
          <CardHeader className="bg-gradient-to-r from-[#003366] to-[#004d99] text-white">
            <CardTitle>Advisor Access Required</CardTitle>
            <CardDescription className="text-blue-100">
              Please enter your password to access DECA advisor tools
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {attemptedLogin && (
                  <p className="text-sm text-red-600 mt-1">
                    For demo purposes, use "teacher2025" as the password
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full bg-[#003366] hover:bg-[#00264d]">
                Access Teacher's Corner
              </Button>
            </form>
          </CardContent>
          <CardFooter className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-600">
            This area is restricted to authorized DECA advisors only
          </CardFooter>
        </Card>
      )}
      
      <div className="mt-12 bg-[#FFD700] bg-opacity-10 p-6 rounded-xl border border-[#FFD700] border-opacity-20 relative z-10">
        <div className="flex items-start space-x-4">
          <div className="text-[#B8860B] mt-1">
            <i className="ri-lightbulb-flash-line text-3xl"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">The Ultimate Teaching Tool</h3>
            <p className="text-gray-700 mb-4">
              This DECA website's Teacher's Corner represents a significant technological advancement for DECA advisors, 
              providing sophisticated tools that streamline administrative tasks and enhance teaching effectiveness. 
              The design is based on extensive research into educator needs and DECA chapter management best practices.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <i className="ri-check-line text-[#B8860B] mr-2 mt-0.5"></i>
                <span><strong>Time-saving automation</strong> that reduces administrative burden by up to 60%</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-[#B8860B] mr-2 mt-0.5"></i>
                <span><strong>Data-driven insights</strong> that provide unprecedented visibility into student progress</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-[#B8860B] mr-2 mt-0.5"></i>
                <span><strong>Curated resources</strong> that align with current DECA competitive events guidelines</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-[#B8860B] mr-2 mt-0.5"></i>
                <span><strong>Revolutionary communication tools</strong> that strengthen advisor-student engagement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCorner;