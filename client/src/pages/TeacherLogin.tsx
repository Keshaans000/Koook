import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Shield } from "lucide-react";

export default function TeacherLogin() {
  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003366] to-[#0066CC] flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-[#003366]" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-[#003366]">Teacher Portal</CardTitle>
            <CardDescription className="text-gray-600">
              Sign in to manage DECA events and announcements
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-blue-800">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Secure Authentication</span>
            </div>
            <p className="text-blue-700 text-sm mt-1">
              Login with your school credentials to access the event management system
            </p>
          </div>
          
          <Button 
            onClick={handleLogin}
            className="w-full bg-[#003366] hover:bg-[#002244] text-white py-3"
            size="lg"
          >
            Sign In with School Account
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Need access? Contact the DECA advisor
            </p>
            <a 
              href="/" 
              className="text-[#003366] hover:text-[#0066CC] text-sm font-medium"
            >
              ← Back to Main Site
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}