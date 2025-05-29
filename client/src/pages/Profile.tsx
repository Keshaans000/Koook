import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Key, School, Calendar, Eye, EyeOff } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-[#003366] border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Access Denied</h2>
            <p className="text-gray-600 mb-4">Please sign in to view your profile.</p>
            <Link href="/login">
              <Button className="bg-[#003366] hover:bg-[#002244]">Sign In</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              ← Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600">Manage your DECA account information</p>
        </div>

        {/* Profile Card */}
        <Card className="mb-6">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-24 h-24 bg-[#003366] text-white rounded-full flex items-center justify-center text-3xl font-bold mb-4">
              {user.firstName?.[0]?.toUpperCase()}{user.lastName?.[0]?.toUpperCase()}
            </div>
            <CardTitle className="text-2xl">{user.firstName} {user.lastName}</CardTitle>
            <p className="text-gray-600 capitalize">{user.role} • Wayzata High School</p>
          </CardHeader>
        </Card>

        {/* Account Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Account Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4" />
                  First Name
                </Label>
                <Input 
                  id="firstName" 
                  value={user.firstName} 
                  readOnly 
                  className="bg-gray-50"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4" />
                  Last Name
                </Label>
                <Input 
                  id="lastName" 
                  value={user.lastName} 
                  readOnly 
                  className="bg-gray-50"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="username" className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4" />
                Username
              </Label>
              <Input 
                id="username" 
                value={user.username} 
                readOnly 
                className="bg-gray-50"
              />
            </div>

            <div>
              <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4" />
                Email Address
              </Label>
              <Input 
                id="email" 
                value={user.email} 
                readOnly 
                className="bg-gray-50"
              />
            </div>

            <div>
              <Label htmlFor="password" className="flex items-center gap-2 mb-2">
                <Key className="w-4 h-4" />
                Password
              </Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  value={showPassword ? (user as any).password || "••••••••••" : "••••••••••"} 
                  readOnly 
                  className="bg-gray-50 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Contact your DECA advisor to change your password
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="graduationYear" className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4" />
                  Graduation Year
                </Label>
                <Input 
                  id="graduationYear" 
                  value={(user as any).graduationYear || "2025"} 
                  readOnly 
                  className="bg-gray-50"
                />
              </div>
              <div>
                <Label htmlFor="role" className="flex items-center gap-2 mb-2">
                  <School className="w-4 h-4" />
                  Member Role
                </Label>
                <Input 
                  id="role" 
                  value={user.role} 
                  readOnly 
                  className="bg-gray-50 capitalize"
                />
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-gray-600">
                Need to update your information? Contact your DECA advisor or chapter officers for assistance.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}