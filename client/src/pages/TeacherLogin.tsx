import { useState } from "react";
import { useLocation } from "wouter";

export default function TeacherLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, setLocation] = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === "wayzata2024") {
      // Store login state
      localStorage.setItem("teacherLoggedIn", "true");
      setLocation("/teacher-admin");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-900">Teacher Admin</h1>
          <p className="text-gray-600">Sign in to manage DECA events</p>
          <a href="../" className="inline-block mt-3 text-sm text-gray-500 hover:text-gray-700 transition-colors">
            ← Back to Website
          </a>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Teacher Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}
          
          <button 
            type="submit" 
            className="w-full bg-blue-900 text-white p-3 rounded-md hover:bg-blue-800 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}