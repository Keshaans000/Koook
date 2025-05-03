const DecaHelp = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-3 right-3 text-[#E63946] opacity-20">
        <i className="ri-award-fill text-4xl"></i>
      </div>
      <div className="absolute -left-4 -bottom-4 h-16 w-16 bg-[#FFD700] opacity-5 rounded-full"></div>
      <div className="absolute right-[40%] -top-6 h-12 w-24 bg-[#003366] opacity-5 transform rotate-45"></div>
      
      <div className="p-4 border-b border-gray-200 flex items-center">
        <i className="ri-question-answer-line text-[#003366] mr-2 text-xl"></i>
        <h2 className="text-lg font-semibold text-gray-800">DECA Help & Tips</h2>
      </div>
      
      <div className="p-4 bg-gradient-to-b from-white to-blue-50">
        <div className="mb-4">
          <p className="text-gray-700 mb-3">
            Resources to help you excel in your DECA journey and competitions:
          </p>
        </div>
        
        <h3 className="font-medium text-[#003366] mb-2 flex items-center">
          <i className="ri-video-line mr-2"></i>
          <span>Helpful Videos</span>
        </h3>
        <ul className="space-y-3 mb-5">
          <li className="transform transition-transform duration-200 hover:translate-x-1">
            <a 
              href="https://www.youtube.com/watch?v=qDDXhN85QEk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-2 bg-[#E63946] bg-opacity-5 rounded-lg border border-[#E63946] border-opacity-20 hover:bg-opacity-10 transition-all"
            >
              <div className="bg-[#E63946] text-white p-2 rounded-md mr-3">
                <i className="ri-youtube-line text-lg"></i>
              </div>
              <span className="font-medium text-[#E63946]">DECA Competition Tips from ICDC Qualifiers</span>
              <i className="ri-external-link-line ml-auto text-[#E63946]"></i>
            </a>
          </li>
          
          <li className="transform transition-transform duration-200 hover:translate-x-1">
            <a 
              href="https://www.youtube.com/watch?v=8QU7E-YGtEU" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-2 bg-[#003366] bg-opacity-5 rounded-lg border border-[#003366] border-opacity-20 hover:bg-opacity-10 transition-all"
            >
              <div className="bg-[#003366] text-white p-2 rounded-md mr-3">
                <i className="ri-youtube-line text-lg"></i>
              </div>
              <span className="font-medium text-[#003366]">Role Play Competition Walkthrough</span>
              <i className="ri-external-link-line ml-auto text-[#003366]"></i>
            </a>
          </li>
        </ul>
        
        <h3 className="font-medium text-[#003366] mb-2 flex items-center">
          <i className="ri-article-line mr-2"></i>
          <span>Competition Guides</span>
        </h3>
        <ul className="space-y-3">
          <li className="transform transition-transform duration-200 hover:translate-x-1">
            <a 
              href="https://www.deca.org/wp-content/uploads/2022/07/DECA_HS_WrittenProject_Template_0722.docx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-2 bg-[#2C7BE5] bg-opacity-5 rounded-lg border border-[#2C7BE5] border-opacity-20 hover:bg-opacity-10 transition-all"
            >
              <div className="bg-[#2C7BE5] text-white p-2 rounded-md mr-3">
                <i className="ri-file-text-line text-lg"></i>
              </div>
              <span className="font-medium text-[#2C7BE5]">Written Project Template</span>
              <i className="ri-external-link-line ml-auto text-[#2C7BE5]"></i>
            </a>
          </li>
          
          <li className="transform transition-transform duration-200 hover:translate-x-1">
            <a 
              href="https://www.deca.org/high-school-programs/high-school-competitive-events/written-events" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-2 bg-[#FFD700] bg-opacity-10 rounded-lg border border-[#FFD700] border-opacity-30 hover:bg-opacity-20 transition-all"
            >
              <div className="bg-[#FFD700] text-[#003366] p-2 rounded-md mr-3">
                <i className="ri-lightbulb-line text-lg"></i>
              </div>
              <span className="font-medium text-[#003366]">Written Event Tips</span>
              <i className="ri-external-link-line ml-auto text-[#003366]"></i>
            </a>
          </li>
          
          <li className="transform transition-transform duration-200 hover:translate-x-1">
            <a 
              href="https://www.deca.org/wp-content/uploads/2022/07/DECA_Guide_2022_23.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-2 bg-[#E63946] bg-opacity-5 rounded-lg border border-[#E63946] border-opacity-20 hover:bg-opacity-10 transition-all"
            >
              <div className="bg-[#E63946] text-white p-2 rounded-md mr-3">
                <i className="ri-book-2-line text-lg"></i>
              </div>
              <span className="font-medium text-[#E63946]">DECA Comprehensive Guide</span>
              <i className="ri-external-link-line ml-auto text-[#E63946]"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DecaHelp;