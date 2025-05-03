const ResourcesCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Quick Resources</h2>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-2 text-[#003366] hover:underline">
              <i className="ri-file-text-line"></i>
              <span>Competition Guidelines PDF</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-[#003366] hover:underline">
              <i className="ri-calendar-check-line"></i>
              <span>Annual Events Schedule</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-[#003366] hover:underline">
              <i className="ri-link"></i>
              <span>DECA Official Website</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 text-[#003366] hover:underline">
              <i className="ri-contacts-book-line"></i>
              <span>Advisor Contact Information</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesCard;
