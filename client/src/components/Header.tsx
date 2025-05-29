import { Link } from "wouter";
import { useState } from "react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import { useAuth } from "@/hooks/useAuth";
import { apiRequest } from "@/lib/queryClient";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { user, isAuthenticated } = useAuth();

  const handleLogout = async () => {
    try {
      await apiRequest("POST", "/api/auth/logout");
      window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  
  return (
    <header className="bg-[#003366] shadow-md z-20 relative overflow-hidden sticky top-0">
      {/* Decorative elements - reduced on mobile */}
      <div className="absolute -right-16 top-0 h-full w-64 bg-[#FFD700] opacity-10 transform rotate-12 hidden sm:block"></div>
      <div className="absolute -left-20 -bottom-8 h-16 w-40 bg-[#FFD700] opacity-10 rounded-full hidden sm:block"></div>
      <div className="absolute right-[25%] -bottom-10 h-16 w-16 bg-[#E63946] opacity-10 rounded-full hidden sm:block"></div>
      <div className="absolute left-[15%] -top-5 h-14 w-14 bg-[#2C7BE5] opacity-10 rounded-full hidden sm:block"></div>
      <div className="absolute right-[40%] top-0 h-10 w-40 bg-white opacity-5 transform -rotate-12 hidden sm:block"></div>
      
      {/* Trophy decorations - only show on larger screens */}
      <div className="absolute right-[10%] top-1 text-[#FFD700] opacity-15 hidden sm:block">
        <i className="ri-trophy-line text-xl"></i>
      </div>
      <div className="absolute left-[30%] top-2 text-[#FFD700] opacity-15 hidden sm:block">
        <i className="ri-medal-line text-xl"></i>
      </div>
      
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex justify-between items-center relative">
        {/* Logo section */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FFD700] flex items-center justify-center rounded-md shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700] to-[#FFC000]"></div>
                <span className="text-[#003366] font-bold text-lg relative z-10">W</span>
              </div>
              {/* Title visible on larger screens */}
              <div className="hidden md:block">
                <h1 className="text-white font-bold text-xl">Wayzata DECA</h1>
                <div className="flex items-center">
                  <span className="text-[#FFD700] text-xs tracking-wider">PREPARE • COMPETE • EXCEL</span>
                  <i className="ri-trophy-fill text-[#FFD700] ml-1 text-xs"></i>
                </div>
              </div>
              {/* Smaller title visible on mobile only */}
              <div className="block md:hidden">
                <h1 className="text-white font-bold text-base">DECA</h1>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Command+K Style Search */}
          <SearchBar />
          
          {/* Notifications button */}
          <button 
            onClick={() => alert('Notifications feature coming soon! You will be notified about upcoming events and deadlines.')}
            className="text-white p-2 rounded-full hover:bg-blue-900 relative" 
            aria-label="Notifications"
          >
            <i className="ri-notification-3-line text-xl"></i>
            <span className="absolute -top-1 -right-1 bg-[#E63946] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </button>
          
          {/* User profile */}
          {!isAuthenticated ? (
            <Link href="/login">
              <div className="h-8 w-8 rounded-full bg-[#FFD700] bg-opacity-20 text-white flex items-center justify-center border border-[#FFD700] border-opacity-30 cursor-pointer">
                <i className="ri-user-line"></i>
              </div>
            </Link>
          ) : (
            <Sheet>
              <SheetTrigger asChild>
                <div className="h-8 w-8 rounded-full bg-[#FFD700] bg-opacity-20 text-white flex items-center justify-center border border-[#FFD700] border-opacity-30 cursor-pointer">
                  {user?.firstName?.[0]?.toUpperCase() || <i className="ri-user-line"></i>}
                </div>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="py-6">
                  <h2 className="text-lg font-bold mb-6">User Profile</h2>
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="h-20 w-20 rounded-full bg-[#003366] text-white flex items-center justify-center text-3xl">
                        {user?.firstName?.[0]?.toUpperCase() || <i className="ri-user-line"></i>}
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold">{user?.firstName} {user?.lastName}</h3>
                      <p className="text-sm text-gray-500">{user?.email}</p>
                      <p className="text-sm text-gray-500 capitalize">{user?.role} • Wayzata High School</p>
                    </div>
                    <div className="pt-4 space-y-2">
                      <Link href="/profile">
                        <Button className="w-full bg-[#003366]">View Profile</Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        className="w-full text-[#E63946] border-[#E63946]"
                        onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
