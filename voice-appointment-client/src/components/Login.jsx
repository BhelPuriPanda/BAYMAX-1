// src/components/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      onLogin(res.data.token);
    } catch (err) {
      setError(err.response?.data?.error || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated SVG ellipses for ripple effect */}
      <div className="absolute top-0 left-0 w-96 h-96 z-0 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="160" rx="140" ry="140" className="ripple-ellipse ellipse1" />
          <ellipse cx="160" cy="160" rx="110" ry="110" className="ripple-ellipse ellipse2" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 z-0 pointer-events-none select-none">
        <svg width="100%" height="100%" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="160" rx="120" ry="120" className="ripple-ellipse ellipse3" />
        </svg>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md animate-fade-in">
        <form
          onSubmit={handleLogin}
          className="login-glass-card bg-white/60 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border-2 border-transparent p-10 flex flex-col items-center transition-all duration-300 animate-slide-up"
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-2 text-center drop-shadow-lg tracking-tight animate-slide-down">
            Baymax Login
          </h1>
          <h2 className="text-lg font-medium text-gray-700 mb-8 text-center animate-fade-in delay-100">
            Welcome back! Please sign in to continue.
          </h2>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm w-full animate-fade-in">
              {error}
            </div>
          )}

          <div className="space-y-5 w-full">
            <div className="relative">
              <input
                className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none text-gray-800 placeholder-gray-400"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={loading}
                required
              />
            </div>
            <div className="relative">
              <input
                className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none text-gray-800 placeholder-gray-400"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                disabled={loading}
                required
              />
            </div>
          </div>

          <button
            disabled={loading}
            className="w-full mt-8 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in delay-200"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>

          <button
            type="button"
            className="mt-6 text-blue-700 hover:text-purple-700 underline text-sm transition-colors animate-fade-in delay-300"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
        </form>
      </div>
      {/* Animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1s both; }
        .animate-slide-up { animation: slideUp 1s both; }
        .animate-slide-down { animation: slideDown 1s both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
        .ripple-ellipse {
          fill: #e0e7ff;
          opacity: 0.5;
          transform-origin: 160px 160px;
          animation: ripple 2.5s infinite;
        }
        .ellipse2 {
          fill: #c7d2fe;
          opacity: 0.4;
          animation-delay: 0.8s;
        }
        .ellipse3 {
          fill: #a5b4fc;
          opacity: 0.3;
          animation-delay: 1.6s;
        }
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.5; }
          70% { opacity: 0.15; }
          100% { transform: scale(1.25); opacity: 0; }
        }
        .login-glass-card {
          border-radius: 2.5rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.65) 60%, rgba(236,233,254,0.85) 100%);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 1.5px 8px 0 #a5b4fc33 inset;
          border: 2.5px solid transparent;
          border-image: linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%) 1;
          transition: box-shadow 0.3s, border-color 0.3s, background 0.3s, transform 0.3s;
        }
        .login-glass-card:hover {
          box-shadow: 0 16px 48px 0 rgba(31, 38, 135, 0.22), 0 2.5px 16px 0 #a5b4fc55 inset;
          background: linear-gradient(135deg, rgba(236,233,254,0.92) 60%, rgba(255,255,255,0.85) 100%);
          border-color: #818cf8;
          transform: translateY(-6px) scale(1.025);
        }
      `}</style>
    </div>
  );
}

export default Login;

