import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const EventsCategory = () => {
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
            <h1 className="text-2xl font-bold text-gray-800">DECA Competitive Events</h1>
            <div className="ml-2 bg-[#FFD700] bg-opacity-20 rounded-full px-2 py-0.5 text-xs text-[#003366] font-medium border border-[#FFD700] border-opacity-30">
              2024-2025
            </div>
          </div>
          <p className="text-gray-600 mt-1">Explore all DECA competitive event categories</p>
        </div>
        <Link href="/">
          <Button variant="outline" className="flex items-center space-x-2 mt-4 md:mt-0 border-[#003366] text-[#003366] hover:bg-[#003366] hover:bg-opacity-5">
            <i className="ri-arrow-left-line"></i>
            <span>Back to Calendar</span>
          </Button>
        </Link>
      </div>
      
      {/* ICDC Deadlines Alert */}
      <div className="bg-[#E63946] bg-opacity-10 border border-[#E63946] border-opacity-20 rounded-xl p-6 mb-8 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-12 opacity-10">
          <i className="ri-time-line text-9xl text-[#E63946]"></i>
        </div>
        <div className="relative z-10">
          <div className="flex items-center mb-3">
            <div className="bg-[#E63946] p-2 rounded-lg text-white mr-3">
              <i className="ri-alarm-warning-line text-xl"></i>
            </div>
            <h2 className="text-xl font-bold text-[#E63946]">ICDC Submission Deadlines</h2>
          </div>
          
          <p className="text-gray-700 mb-4 max-w-3xl">
            All written entries for ICDC must be submitted by the designated deadlines. Late submissions will not be accepted. 
            Ensure you allow enough time for advisor review and any necessary revisions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E63946] border-opacity-20">
              <div className="font-medium text-[#E63946] mb-1">Written Event Reports</div>
              <div className="text-sm text-gray-700 mb-2">March 1, 2025</div>
              <p className="text-xs text-gray-600">Business plans, marketing proposals, and all other written entries</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E63946] border-opacity-20">
              <div className="font-medium text-[#E63946] mb-1">Online Project Registration</div>
              <div className="text-sm text-gray-700 mb-2">March 15, 2025</div>
              <p className="text-xs text-gray-600">Registration for all online projects and event selection</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-[#E63946] border-opacity-20">
              <div className="font-medium text-[#E63946] mb-1">State Qualifier Submissions</div>
              <div className="text-sm text-gray-700 mb-2">April 1, 2025</div>
              <p className="text-xs text-gray-600">Final submission of qualifying materials from state conferences</p>
            </div>
          </div>
          
          <a href="https://www.deca.org/high-school-programs/high-school-competitive-events" target="_blank" rel="noopener noreferrer" className="text-[#E63946] hover:underline inline-flex items-center text-sm font-medium">
            <i className="ri-external-link-line mr-1"></i>
            View Official DECA Guidelines
          </a>
        </div>
      </div>
      
      {/* Event Categories */}
      <div className="space-y-8">
        {/* Principles of Business Administration */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] p-4 text-white">
            <h2 className="text-lg font-bold">Principles of Business Administration Events</h2>
            <p className="text-sm text-blue-100">First-year DECA members; comprehensive exams and role-play scenarios</p>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#003366]">Principles of Business Management & Administration</div>
                <p className="text-sm text-gray-600 mt-1">
                  Focuses on business operations, management functions, and decision-making processes.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#003366]">Principles of Finance</div>
                <p className="text-sm text-gray-600 mt-1">
                  Explores financial analysis, services, and management principles.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#003366]">Principles of Hospitality & Tourism</div>
                <p className="text-sm text-gray-600 mt-1">
                  Covers hospitality industry knowledge and customer service skills.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#003366]">Principles of Marketing</div>
                <p className="text-sm text-gray-600 mt-1">
                  Examines marketing concepts, strategies, and promotional techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Decision Making */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#2C7BE5] p-4 text-white">
            <h2 className="text-lg font-bold">Team Decision Making Events</h2>
            <p className="text-sm text-blue-100">Two-person teams analyzing business scenarios and presenting solutions</p>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#2C7BE5]">Business Law & Ethics Team Decision Making</div>
                <p className="text-sm text-gray-600 mt-1">
                  Addresses legal and ethical issues in business situations.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#2C7BE5]">Buying & Merchandising Team Decision Making</div>
                <p className="text-sm text-gray-600 mt-1">
                  Focuses on retail purchasing and merchandising strategies.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#2C7BE5]">Entrepreneurship Team Decision Making</div>
                <p className="text-sm text-gray-600 mt-1">
                  Analyzes business ownership and development scenarios.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#2C7BE5]">Financial Services Team Decision Making</div>
                <p className="text-sm text-gray-600 mt-1">
                  Explores financial industry challenges and solutions.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#2C7BE5]">Hospitality Services Team Decision Making</div>
                <p className="text-sm text-gray-600 mt-1">
                  Addresses hospitality industry operations and services.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#2C7BE5]">Marketing Management Team Decision Making</div>
                <p className="text-sm text-gray-600 mt-1">
                  Focuses on marketing strategy and campaign development.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#2C7BE5]">Sports & Entertainment Marketing Team Decision Making</div>
                <p className="text-sm text-gray-600 mt-1">
                  Examines marketing in sports and entertainment industries.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#2C7BE5]">Travel & Tourism Team Decision Making</div>
                <p className="text-sm text-gray-600 mt-1">
                  Addresses tourism industry challenges and promotional strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Individual Series */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#E63946] p-4 text-white">
            <h2 className="text-lg font-bold">Individual Series Events</h2>
            <p className="text-sm text-red-100">Comprehensive exam plus two role-play scenarios for individual competitors</p>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#E63946]">Accounting Applications Series</div>
                <p className="text-sm text-gray-600 mt-1">
                  Tests accounting principles and financial analysis skills.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#E63946]">Apparel & Accessories Marketing Series</div>
                <p className="text-sm text-gray-600 mt-1">
                  Focuses on fashion marketing and merchandising concepts.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#E63946]">Automotive Services Marketing Series</div>
                <p className="text-sm text-gray-600 mt-1">
                  Explores automotive industry marketing strategies.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#E63946]">Business Finance Series</div>
                <p className="text-sm text-gray-600 mt-1">
                  Addresses financial analysis and business investment decisions.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#E63946]">Business Services Marketing Series</div>
                <p className="text-sm text-gray-600 mt-1">
                  Focuses on B2B marketing and service industry concepts.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#E63946]">Food Marketing Series</div>
                <p className="text-sm text-gray-600 mt-1">
                  Examines food industry marketing strategies and trends.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#E63946]">Hotel & Lodging Management Series</div>
                <p className="text-sm text-gray-600 mt-1">
                  Addresses hotel operations and hospitality management.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#E63946]">Human Resources Management Series</div>
                <p className="text-sm text-gray-600 mt-1">
                  Focuses on workforce management and employee relations.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#E63946]">Marketing Communications Series</div>
                <p className="text-sm text-gray-600 mt-1">
                  Explores promotional strategies and advertising techniques.
                </p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <button className="text-[#E63946] hover:underline text-sm font-medium flex items-center mx-auto">
                <i className="ri-add-line mr-1"></i>
                <span>View More Individual Series Events</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Business Operations Research */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#FFD700] p-4 text-[#003366]">
            <h2 className="text-lg font-bold">Business Operations Research Events</h2>
            <p className="text-sm text-[#003366] opacity-80">Comprehensive written projects with oral presentations</p>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#003366]">Business Services Operations Research</div>
                <p className="text-sm text-gray-600 mt-1">
                  Research project focused on improving business services operations.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#003366]">Buying & Merchandising Operations Research</div>
                <p className="text-sm text-gray-600 mt-1">
                  Research on retail buying and merchandising strategies.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#003366]">Finance Operations Research</div>
                <p className="text-sm text-gray-600 mt-1">
                  Research project on financial services and operations.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#003366]">Hospitality & Tourism Operations Research</div>
                <p className="text-sm text-gray-600 mt-1">
                  Research on improving hospitality and tourism operations.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#003366]">Sports & Entertainment Marketing Operations Research</div>
                <p className="text-sm text-gray-600 mt-1">
                  Research project on sports and entertainment marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Management */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] p-4 text-white">
            <h2 className="text-lg font-bold">Project Management Events</h2>
            <p className="text-sm text-blue-100">Applying project management skills to business scenarios</p>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#003366]">Business Solutions Project</div>
                <p className="text-sm text-gray-600 mt-1">
                  Develop solutions for business challenges using project management methodology.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#003366]">Career Development Project</div>
                <p className="text-sm text-gray-600 mt-1">
                  Create career readiness and personal development plans.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#003366]">Community Awareness Project</div>
                <p className="text-sm text-gray-600 mt-1">
                  Develop and implement community service or awareness campaigns.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#003366]">Financial Literacy Project</div>
                <p className="text-sm text-gray-600 mt-1">
                  Create and implement financial literacy educational programs.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#003366]">Sales Project</div>
                <p className="text-sm text-gray-600 mt-1">
                  Develop professional selling campaigns for products or services.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Entrepreneurship */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#2C7BE5] p-4 text-white">
            <h2 className="text-lg font-bold">Entrepreneurship Events</h2>
            <p className="text-sm text-blue-100">Business plans and entrepreneurial concepts</p>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#2C7BE5]">Innovation Plan</div>
                <p className="text-sm text-gray-600 mt-1">
                  Develop an innovative business concept and implementation plan.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#2C7BE5]">Start-Up Business Plan</div>
                <p className="text-sm text-gray-600 mt-1">
                  Create a comprehensive business plan for a new business venture.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#2C7BE5]">Independent Business Plan</div>
                <p className="text-sm text-gray-600 mt-1">
                  Develop a business plan for an independent business venture.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#2C7BE5]">International Business Plan</div>
                <p className="text-sm text-gray-600 mt-1">
                  Create a business plan for a business with international operations.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#2C7BE5]">Business Growth Plan</div>
                <p className="text-sm text-gray-600 mt-1">
                  Develop strategies for growing an existing business.
                </p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                <div className="font-medium text-[#2C7BE5]">Franchise Business Plan</div>
                <p className="text-sm text-gray-600 mt-1">
                  Create a business plan for a franchised business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="mt-12 bg-gradient-to-r from-[#003366] to-[#004080] rounded-xl shadow-sm overflow-hidden">
        <div className="p-8 text-white relative">
          {/* Trophy decorations */}
          <div className="absolute right-8 bottom-8 text-white opacity-10">
            <i className="ri-trophy-fill text-6xl"></i>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4">Prepare for DECA Competitions</h2>
            <p className="text-blue-100 mb-6 max-w-2xl">
              Explore our competition resources, practice materials, and preparation guides to help you succeed in DECA competitions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/competitions">
                <Button className="bg-white text-[#003366] hover:bg-blue-50">
                  <i className="ri-calendar-event-line mr-2"></i>
                  View Competition Dates
                </Button>
              </Link>
              <a href="https://www.deca.org/high-school-programs/high-school-competitive-events" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white border border-white px-4 py-2 rounded-lg inline-flex items-center hover:bg-white hover:bg-opacity-10">
                <i className="ri-external-link-line mr-2"></i>
                Official DECA Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCategory;