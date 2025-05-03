import { Link } from "wouter";

const Header = () => {
  return (
    <header className="bg-[#003366] shadow-md z-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-16 top-0 h-full w-64 bg-[#FFD700] opacity-10 transform rotate-12"></div>
      <div className="absolute -left-20 -bottom-8 h-16 w-40 bg-[#FFD700] opacity-10 rounded-full"></div>
      <div className="absolute right-[25%] -bottom-10 h-16 w-16 bg-[#E63946] opacity-10 rounded-full"></div>
      <div className="absolute left-[15%] -top-5 h-14 w-14 bg-[#2C7BE5] opacity-10 rounded-full"></div>
      <div className="absolute right-[40%] top-0 h-10 w-40 bg-white opacity-5 transform -rotate-12"></div>
      
      {/* Trophy decorations */}
      <div className="absolute right-[10%] top-1 text-[#FFD700] opacity-15">
        <i className="ri-trophy-line text-xl"></i>
      </div>
      <div className="absolute left-[30%] top-2 text-[#FFD700] opacity-15">
        <i className="ri-medal-line text-xl"></i>
      </div>
      <div className="absolute right-[60%] bottom-1 text-[#FFD700] opacity-10">
        <i className="ri-award-fill text-lg"></i>
      </div>
      <div className="absolute right-[20%] bottom-0 text-white opacity-5">
        <i className="ri-building-4-line text-2xl"></i>
      </div>
      
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#FFD700] flex items-center justify-center rounded-md shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700] to-[#FFC000]"></div>
                <span className="text-[#003366] font-bold text-lg relative z-10">W</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-white font-bold text-xl">Wayzata DECA</h1>
                <div className="flex items-center">
                  <span className="text-[#FFD700] text-xs tracking-wider">PREPARE • COMPETE • EXCEL</span>
                  <i className="ri-trophy-fill text-[#FFD700] ml-1 text-xs"></i>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search events..." 
              className="px-4 py-2 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#FFD700] border-none" 
            />
            <i className="ri-search-line absolute right-3 top-2.5 text-gray-500"></i>
          </div>
          <button className="text-white p-2 rounded-full hover:bg-blue-900 relative" aria-label="Notifications">
            <i className="ri-notification-3-line text-xl"></i>
            <span className="absolute -top-1 -right-1 bg-[#E63946] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </button>
          <div className="h-8 w-8 rounded-full bg-[#FFD700] bg-opacity-20 text-white flex items-center justify-center border border-[#FFD700] border-opacity-30">
            <i className="ri-user-line"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
