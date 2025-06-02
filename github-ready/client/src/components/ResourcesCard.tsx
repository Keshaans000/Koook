const ResourcesCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-3 right-3 text-[#FFD700] opacity-20">
        <i className="ri-trophy-fill text-4xl"></i>
      </div>
      <div className="absolute -left-4 -bottom-4 h-16 w-16 bg-[#003366] opacity-5 rounded-full"></div>
      <div className="absolute right-[40%] -top-6 h-12 w-24 bg-[#E63946] opacity-5 transform rotate-45"></div>
      
      <div className="p-4 border-b border-gray-200 flex items-center">
        <i className="ri-folder-5-line text-[#003366] mr-2 text-xl"></i>
        <h2 className="text-lg font-semibold text-gray-800">Essential DECA Resources</h2>
      </div>
      
      <div className="p-4 bg-gradient-to-b from-white to-blue-50">
        <ul className="space-y-3">
          <li className="transform transition-transform duration-200 hover:translate-x-1">
            <a 
              href="https://www.deca.org/high-school-programs/high-school-competitive-events" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-2 bg-[#003366] bg-opacity-5 rounded-lg border border-[#003366] border-opacity-20 hover:bg-opacity-10 transition-all"
            >
              <div className="bg-[#003366] text-white p-2 rounded-md mr-3">
                <i className="ri-file-text-line text-lg"></i>
              </div>
              <span className="font-medium text-[#003366]">DECA Competition Guidelines</span>
              <i className="ri-external-link-line ml-auto text-[#003366]"></i>
            </a>
          </li>
          
          <li className="transform transition-transform duration-200 hover:translate-x-1">
            <a 
              href="https://www.deca.org/conferences" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-2 bg-[#2C7BE5] bg-opacity-5 rounded-lg border border-[#2C7BE5] border-opacity-20 hover:bg-opacity-10 transition-all"
            >
              <div className="bg-[#2C7BE5] text-white p-2 rounded-md mr-3">
                <i className="ri-calendar-check-line text-lg"></i>
              </div>
              <span className="font-medium text-[#2C7BE5]">DECA Conference Calendar</span>
              <i className="ri-external-link-line ml-auto text-[#2C7BE5]"></i>
            </a>
          </li>
          
          <li className="transform transition-transform duration-200 hover:translate-x-1">
            <a 
              href="https://www.deca.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-2 bg-[#FFD700] bg-opacity-10 rounded-lg border border-[#FFD700] border-opacity-30 hover:bg-opacity-20 transition-all"
            >
              <div className="bg-[#FFD700] text-[#003366] p-2 rounded-md mr-3">
                <i className="ri-global-line text-lg"></i>
              </div>
              <span className="font-medium text-[#003366]">DECA Official Website</span>
              <i className="ri-external-link-line ml-auto text-[#003366]"></i>
            </a>
          </li>
          
          <li className="transform transition-transform duration-200 hover:translate-x-1">
            <a 
              href="https://www.wayzataschools.org/schools/wayzata-high-school/activities-athletics/activities" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-2 bg-[#003366] bg-opacity-5 rounded-lg border border-[#003366] border-opacity-20 hover:bg-opacity-10 transition-all"
            >
              <div className="bg-[#003366] text-white p-2 rounded-md mr-3">
                <i className="ri-school-line text-lg"></i>
              </div>
              <span className="font-medium text-[#003366]">Wayzata High School Activities</span>
              <i className="ri-external-link-line ml-auto text-[#003366]"></i>
            </a>
          </li>
          
          <li className="transform transition-transform duration-200 hover:translate-x-1">
            <a 
              href="https://mndeca.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-2 bg-[#E63946] bg-opacity-5 rounded-lg border border-[#E63946] border-opacity-20 hover:bg-opacity-10 transition-all"
            >
              <div className="bg-[#E63946] text-white p-2 rounded-md mr-3">
                <i className="ri-government-line text-lg"></i>
              </div>
              <span className="font-medium text-[#E63946]">Minnesota DECA</span>
              <i className="ri-external-link-line ml-auto text-[#E63946]"></i>
            </a>
          </li>
          
          <li className="transform transition-transform duration-200 hover:translate-x-1">
            <a 
              href="https://www.deca.org/high-school-programs/high-school-competitive-events" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-2 bg-[#2C7BE5] bg-opacity-5 rounded-lg border border-[#2C7BE5] border-opacity-20 hover:bg-opacity-10 transition-all"
            >
              <div className="bg-[#2C7BE5] text-white p-2 rounded-md mr-3">
                <i className="ri-user-settings-line text-lg"></i>
              </div>
              <span className="font-medium text-[#2C7BE5]">DECA Competitive Events</span>
              <i className="ri-external-link-line ml-auto text-[#2C7BE5]"></i>
            </a>
          </li>
          
          <li className="transform transition-transform duration-200 hover:translate-x-1">
            <a 
              href="https://www.deca.org/high-school-programs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-2 bg-[#FFD700] bg-opacity-10 rounded-lg border border-[#FFD700] border-opacity-30 hover:bg-opacity-20 transition-all"
            >
              <div className="bg-[#FFD700] text-[#003366] p-2 rounded-md mr-3">
                <i className="ri-stack-line text-lg"></i>
              </div>
              <span className="font-medium text-[#003366]">DECA High School Programs</span>
              <i className="ri-external-link-line ml-auto text-[#003366]"></i>
            </a>
          </li>
          
          <li className="transform transition-transform duration-200 hover:translate-x-1">
            <a 
              href="https://www.deca.org/resources" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-2 bg-[#E63946] bg-opacity-5 rounded-lg border border-[#E63946] border-opacity-20 hover:bg-opacity-10 transition-all"
            >
              <div className="bg-[#E63946] text-white p-2 rounded-md mr-3">
                <i className="ri-file-list-3-line text-lg"></i>
              </div>
              <span className="font-medium text-[#E63946]">DECA Resources & Tools</span>
              <i className="ri-external-link-line ml-auto text-[#E63946]"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesCard;
