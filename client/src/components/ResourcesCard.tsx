const ResourcesCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Quick Resources</h2>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          <li>
            <a 
              href="https://www.deca.org/wp-content/uploads/2023/08/HS_Competitive_Events_Guide.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-[#003366] hover:underline"
            >
              <i className="ri-file-text-line"></i>
              <span>DECA Competition Guidelines</span>
            </a>
          </li>
          <li>
            <a 
              href="https://www.deca.org/wp-content/uploads/2023/07/HS_DECA_ICDC_TravelCalendar24.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-[#003366] hover:underline"
            >
              <i className="ri-calendar-check-line"></i>
              <span>DECA Conference Calendar</span>
            </a>
          </li>
          <li>
            <a 
              href="https://www.deca.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-[#003366] hover:underline"
            >
              <i className="ri-link"></i>
              <span>DECA Official Website</span>
            </a>
          </li>
          <li>
            <a 
              href="https://www.wayzataschools.org/whs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-[#003366] hover:underline"
            >
              <i className="ri-school-line"></i>
              <span>Wayzata High School</span>
            </a>
          </li>
          <li>
            <a 
              href="https://www.mndeca.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-[#003366] hover:underline"
            >
              <i className="ri-government-line"></i>
              <span>Minnesota DECA</span>
            </a>
          </li>
          <li>
            <a 
              href="https://www.deca.org/wp-content/uploads/2023/12/2024-ICDC-Dress-Code.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-[#003366] hover:underline"
            >
              <i className="ri-user-settings-line"></i>
              <span>DECA Dress Code</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesCard;
