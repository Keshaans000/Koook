import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Team = () => {
  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -right-16 top-0 h-32 w-48 bg-[#FFD700] opacity-5 transform rotate-12"></div>
      <div className="absolute -left-20 -bottom-10 h-20 w-40 bg-[#003366] opacity-5 rounded-full"></div>
      
      {/* Trophy decorations */}
      <div className="absolute right-[5%] top-20 text-[#FFD700] opacity-10">
        <i className="ri-trophy-fill text-5xl"></i>
      </div>
      <div className="absolute left-[30%] bottom-10 text-[#003366] opacity-10 transform -rotate-12">
        <i className="ri-award-line text-4xl"></i>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 relative z-10">
        <div className="relative z-10">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">DECA Leadership Team</h1>
            <div className="ml-2 bg-[#FFD700] bg-opacity-20 rounded-full px-2 py-0.5 text-xs text-[#003366] font-medium border border-[#FFD700] border-opacity-30">
              2025-2026
            </div>
          </div>
          <p className="text-gray-600 mt-1">Meet the dedicated team behind Wayzata DECA</p>
        </div>
        <Link href="/">
          <Button variant="outline" className="flex items-center space-x-2 mt-4 md:mt-0 border-[#003366] text-[#003366] hover:bg-[#003366] hover:bg-opacity-5">
            <i className="ri-arrow-left-line"></i>
            <span>Back to Calendar</span>
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Advisor Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[#003366] opacity-5 transform rotate-45"></div>
          </div>
          <div className="relative">
            <div className="h-24 bg-gradient-to-r from-[#003366] to-[#004080]"></div>
            <div className="absolute top-12 left-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                <div className="w-full h-full bg-[#003366] rounded-full flex items-center justify-center text-white">
                  <span className="text-2xl font-bold">PK</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-16">
            <div className="flex items-center mb-1">
              <h3 className="font-bold text-lg text-gray-800">Paul Kimbler</h3>
              <span className="ml-2 bg-[#003366] text-white text-xs px-2 py-0.5 rounded-full">Advisor</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">DECA Chapter Advisor & Business Teacher</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="ri-mail-line text-[#003366] mr-2"></i>
                <a href="mailto:paul.kimbler@wayzataschools.org" className="text-[#003366] hover:underline text-sm">
                  paul.kimbler@wayzataschools.org
                </a>
              </div>
              <div className="flex items-center">
                <i className="ri-map-pin-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Room 256, Wayzata High School</span>
              </div>
              <div className="flex items-center">
                <i className="ri-time-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Office Hours: 7:30am - 3:30pm</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Officer Card - Sanjana (President) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[#FFD700] opacity-5 transform rotate-45"></div>
          </div>
          <div className="relative">
            <div className="h-24 bg-gradient-to-r from-[#FFD700] to-[#FFC000]"></div>
            <div className="absolute top-12 left-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                <div className="w-full h-full bg-[#FFD700] rounded-full flex items-center justify-center text-[#003366]">
                  <span className="text-2xl font-bold">SG</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-16">
            <div className="flex items-center mb-1">
              <h3 className="font-bold text-lg text-gray-800">Sanjana Guruprasad</h3>
              <span className="ml-2 bg-[#FFD700] text-[#003366] text-xs px-2 py-0.5 rounded-full">President</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">DECA Chapter President & Student Leader</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="ri-trophy-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Competition Leader</span>
              </div>
              <div className="flex items-center">
                <i className="ri-briefcase-4-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Business Leadership</span>
              </div>
              <div className="flex items-center">
                <i className="ri-team-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Chapter Management</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Officer Card - Wren (VP) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[#E63946] opacity-5 transform rotate-45"></div>
          </div>
          <div className="relative">
            <div className="h-24 bg-gradient-to-r from-[#E63946] to-[#D62B39]"></div>
            <div className="absolute top-12 left-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                <div className="w-full h-full bg-[#E63946] rounded-full flex items-center justify-center text-white">
                  <span className="text-2xl font-bold">WP</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-16">
            <div className="flex items-center mb-1">
              <h3 className="font-bold text-lg text-gray-800">Wren Park</h3>
              <span className="ml-2 bg-[#E63946] text-white text-xs px-2 py-0.5 rounded-full">Vice President</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">DECA Chapter VP & Competition Coordinator</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="ri-trophy-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Event Coordination</span>
              </div>
              <div className="flex items-center">
                <i className="ri-briefcase-4-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Operations Management</span>
              </div>
              <div className="flex items-center">
                <i className="ri-calendar-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Meeting Planning</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Officer Card - Prohitt (VP Finance) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[#2C7BE5] opacity-5 transform rotate-45"></div>
          </div>
          <div className="relative">
            <div className="h-24 bg-gradient-to-r from-[#2C7BE5] to-[#1A68D1]"></div>
            <div className="absolute top-12 left-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                <div className="w-full h-full bg-[#2C7BE5] rounded-full flex items-center justify-center text-white">
                  <span className="text-2xl font-bold">PR</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-16">
            <div className="flex items-center mb-1">
              <h3 className="font-bold text-lg text-gray-800">Prohitt Ram Kumar</h3>
              <span className="ml-2 bg-[#2C7BE5] text-white text-xs px-2 py-0.5 rounded-full">VP of Finance</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">DECA Finance Leader & Budget Manager</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="ri-money-dollar-circle-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Financial Planning</span>
              </div>
              <div className="flex items-center">
                <i className="ri-briefcase-4-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Budget Management</span>
              </div>
              <div className="flex items-center">
                <i className="ri-calculator-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Financial Analysis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Support Card - Ansh */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[#20B2AA] opacity-5 transform rotate-45"></div>
          </div>
          <div className="relative">
            <div className="h-24 bg-gradient-to-r from-[#20B2AA] to-[#008B8B]"></div>
            <div className="absolute top-12 left-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                <div className="w-full h-full bg-[#20B2AA] rounded-full flex items-center justify-center text-white">
                  <span className="text-2xl font-bold">AK</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-16">
            <div className="flex items-center mb-1">
              <h3 className="font-bold text-lg text-gray-800">Ansh Kesharwani</h3>
              <span className="ml-2 bg-[#20B2AA] text-white text-xs px-2 py-0.5 rounded-full">Technology Director</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">Website Creator & Technology Support - Contact him if you need help with issues with the website</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="ri-mail-line text-[#003366] mr-2"></i>
                <a href="mailto:Keshaans000@isd284.com" className="text-[#003366] hover:underline text-sm">
                  Keshaans000@isd284.com
                </a>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line text-[#003366] mr-2"></i>
                <a href="tel:651-382-5377" className="text-[#003366] hover:underline text-sm">
                  651-382-5377
                </a>
              </div>
              <div className="flex items-center">
                <i className="ri-code-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Full Stack Development</span>
              </div>
            </div>
          </div>
        </div>

        {/* Officer Card - Aman (VP Membership) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[#28A745] opacity-5 transform rotate-45"></div>
          </div>
          <div className="relative">
            <div className="h-24 bg-gradient-to-r from-[#28A745] to-[#1E7E34]"></div>
            <div className="absolute top-12 left-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                <div className="w-full h-full bg-[#28A745] rounded-full flex items-center justify-center text-white">
                  <span className="text-2xl font-bold">AA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-16">
            <div className="flex items-center mb-1">
              <h3 className="font-bold text-lg text-gray-800">Aman Agarwal</h3>
              <span className="ml-2 bg-[#28A745] text-white text-xs px-2 py-0.5 rounded-full">VP of Membership Development</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">DECA Membership Leader & Student Outreach</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="ri-user-add-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Member Recruitment</span>
              </div>
              <div className="flex items-center">
                <i className="ri-briefcase-4-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Student Engagement</span>
              </div>
              <div className="flex items-center">
                <i className="ri-community-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Chapter Growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Officer Card - Rahul (VP Community Involvement) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[#FF6B35] opacity-5 transform rotate-45"></div>
          </div>
          <div className="relative">
            <div className="h-24 bg-gradient-to-r from-[#FF6B35] to-[#E55A2F]"></div>
            <div className="absolute top-12 left-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                <div className="w-full h-full bg-[#FF6B35] rounded-full flex items-center justify-center text-white">
                  <span className="text-2xl font-bold">RB</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-16">
            <div className="flex items-center mb-1">
              <h3 className="font-bold text-lg text-gray-800">Rahul Billakanti</h3>
              <span className="ml-2 bg-[#FF6B35] text-white text-xs px-2 py-0.5 rounded-full">VP of Community Involvement</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">DECA Community Outreach & Service Leader</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="ri-heart-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Community Service</span>
              </div>
              <div className="flex items-center">
                <i className="ri-briefcase-4-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Volunteer Coordination</span>
              </div>
              <div className="flex items-center">
                <i className="ri-community-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Outreach Programs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Officer Card - Sarayu (VP Competition) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[#8E44AD] opacity-5 transform rotate-45"></div>
          </div>
          <div className="relative">
            <div className="h-24 bg-gradient-to-r from-[#8E44AD] to-[#7D3C98]"></div>
            <div className="absolute top-12 left-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                <div className="w-full h-full bg-[#8E44AD] rounded-full flex items-center justify-center text-white">
                  <span className="text-2xl font-bold">SG</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-16">
            <div className="flex items-center mb-1">
              <h3 className="font-bold text-lg text-gray-800">Sarayu Gundla</h3>
              <span className="ml-2 bg-[#8E44AD] text-white text-xs px-2 py-0.5 rounded-full">VP of Competition</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">DECA Competition Strategy & Training Leader</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="ri-trophy-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Competition Prep</span>
              </div>
              <div className="flex items-center">
                <i className="ri-briefcase-4-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Training Programs</span>
              </div>
              <div className="flex items-center">
                <i className="ri-presentation-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Event Coordination</span>
              </div>
            </div>
          </div>
        </div>

        {/* Officer Card - Joy (VP Communications) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[#F39C12] opacity-5 transform rotate-45"></div>
          </div>
          <div className="relative">
            <div className="h-24 bg-gradient-to-r from-[#F39C12] to-[#E67E22]"></div>
            <div className="absolute top-12 left-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                <div className="w-full h-full bg-[#F39C12] rounded-full flex items-center justify-center text-white">
                  <span className="text-2xl font-bold">JZ</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-16">
            <div className="flex items-center mb-1">
              <h3 className="font-bold text-lg text-gray-800">Joy Zhou</h3>
              <span className="ml-2 bg-[#F39C12] text-white text-xs px-2 py-0.5 rounded-full">VP of Communications</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">DECA Communications & Marketing Leader</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="ri-message-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Internal Communications</span>
              </div>
              <div className="flex items-center">
                <i className="ri-briefcase-4-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Social Media</span>
              </div>
              <div className="flex items-center">
                <i className="ri-megaphone-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Chapter Promotion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Officer Card - Anjali (VP Trojan Locker Room) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[#16A085] opacity-5 transform rotate-45"></div>
          </div>
          <div className="relative">
            <div className="h-24 bg-gradient-to-r from-[#16A085] to-[#138D75]"></div>
            <div className="absolute top-12 left-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                <div className="w-full h-full bg-[#16A085] rounded-full flex items-center justify-center text-white">
                  <span className="text-2xl font-bold">AS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-16">
            <div className="flex items-center mb-1">
              <h3 className="font-bold text-lg text-gray-800">Anjali Suresh</h3>
              <span className="ml-2 bg-[#16A085] text-white text-xs px-2 py-0.5 rounded-full">VP of Trojan Locker Room</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">DECA School Store Operations Leader</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="ri-store-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Store Operations</span>
              </div>
              <div className="flex items-center">
                <i className="ri-briefcase-4-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Inventory Management</span>
              </div>
              <div className="flex items-center">
                <i className="ri-shopping-bag-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Customer Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Manager Card - Ameya */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[#34495E] opacity-5 transform rotate-45"></div>
          </div>
          <div className="relative">
            <div className="h-24 bg-gradient-to-r from-[#34495E] to-[#2C3E50]"></div>
            <div className="absolute top-12 left-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                <div className="w-full h-full bg-[#34495E] rounded-full flex items-center justify-center text-white">
                  <span className="text-2xl font-bold">AR</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-16">
            <div className="flex items-center mb-1">
              <h3 className="font-bold text-lg text-gray-800">Ameya Rauniyar</h3>
              <span className="ml-2 bg-[#34495E] text-white text-xs px-2 py-0.5 rounded-full">Manager - Trojan Locker Room</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">DECA School Store Manager & Operations</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="ri-settings-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Daily Operations</span>
              </div>
              <div className="flex items-center">
                <i className="ri-briefcase-4-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Staff Coordination</span>
              </div>
              <div className="flex items-center">
                <i className="ri-pie-chart-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Sales Analytics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Manager Card - Louis */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[#E74C3C] opacity-5 transform rotate-45"></div>
          </div>
          <div className="relative">
            <div className="h-24 bg-gradient-to-r from-[#E74C3C] to-[#C0392B]"></div>
            <div className="absolute top-12 left-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                <div className="w-full h-full bg-[#E74C3C] rounded-full flex items-center justify-center text-white">
                  <span className="text-2xl font-bold">LD</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-16">
            <div className="flex items-center mb-1">
              <h3 className="font-bold text-lg text-gray-800">Louis Dang</h3>
              <span className="ml-2 bg-[#E74C3C] text-white text-xs px-2 py-0.5 rounded-full">Manager - Trojan Locker Room</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">DECA School Store Manager & Support</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="ri-customer-service-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Customer Relations</span>
              </div>
              <div className="flex items-center">
                <i className="ri-briefcase-4-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Product Management</span>
              </div>
              <div className="flex items-center">
                <i className="ri-team-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Team Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Officer Card - Michelle */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[#6F42C1] opacity-5 transform rotate-45"></div>
          </div>
          <div className="relative">
            <div className="h-24 bg-gradient-to-r from-[#6F42C1] to-[#5A32A3]"></div>
            <div className="absolute top-12 left-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-1 shadow-md">
                <div className="w-full h-full bg-[#6F42C1] rounded-full flex items-center justify-center text-white">
                  <span className="text-2xl font-bold">MJ</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-16">
            <div className="flex items-center mb-1">
              <h3 className="font-bold text-lg text-gray-800">Michelle Jacklitch</h3>
              <span className="ml-2 bg-[#6F42C1] text-white text-xs px-2 py-0.5 rounded-full">Faculty</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">Business Department Faculty & DECA Co-Advisor</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <i className="ri-mail-line text-[#003366] mr-2"></i>
                <a href="mailto:michelle.jacklitch@wayzataschools.org" className="text-[#003366] hover:underline text-sm">
                  michelle.jacklitch@wayzataschools.org
                </a>
              </div>
              <div className="flex items-center">
                <i className="ri-map-pin-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Room 260, Wayzata High School</span>
              </div>
              <div className="flex items-center">
                <i className="ri-book-open-line text-[#003366] mr-2"></i>
                <span className="text-gray-700 text-sm">Business Marketing Educator</span>
              </div>
            </div>
          </div>
        </div>


      </div>
      

      
      <div className="mt-10 bg-gradient-to-r from-[#003366] to-[#004080] rounded-xl shadow-sm overflow-hidden">
        <div className="p-8 text-white relative">
          {/* Trophy decorations */}
          <div className="absolute right-8 bottom-8 text-white opacity-10">
            <i className="ri-trophy-fill text-6xl"></i>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4">Join the DECA Leadership Team</h2>
            <p className="text-blue-100 mb-6 max-w-2xl">
              Interested in becoming a DECA officer? Elections are held each spring for the following academic year. 
              Reach out to any current officer or Mr. Kimbler to learn more about leadership opportunities.
            </p>
            <a href="mailto:paul.kimbler@wayzataschools.org" className="bg-white text-[#003366] px-4 py-2 rounded-lg inline-flex items-center">
              <i className="ri-mail-send-line mr-2"></i>
              Contact Mr. Kimbler
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;