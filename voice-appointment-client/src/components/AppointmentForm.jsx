import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;


function AppointmentForm({ token }) {
  const [patientName, setPatientName] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [preferredDoctor, setPreferredDoctor] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/appointment/create`,
        {
          patientName,
          symptoms,
          preferredDoctor,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setConfirmation(res.data.appointment);
      setPatientName('');
      setSymptoms('');
      setPreferredDoctor('');
    } catch (error) {
      console.error(error);
      if (error.response?.data?.error) {
        alert(`Failed to book: ${error.response.data.error}`);
      } else {
        alert('Failed to book due to an unknown error');
      }
    }
  };

  const handleLogout = () => {
    // You can clear the token in the parent component if needed
    navigate('/');
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

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute top-8 right-10 z-20 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-pink-600 text-white font-bold px-7 py-2 rounded-full text-lg shadow-md transition-all duration-200 hover:scale-105 focus:ring-4 focus:ring-blue-300"
      >
        Logout
      </button>

      {/* Main Content: Form + AI Agent Side by Side */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start animate-fade-in">
        {/* Appointment Form Card */}
        <div className="flex-1 appointment-glass-card bg-white/60 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border-2 border-transparent p-8 md:p-12 flex flex-col items-center transition-all duration-300 animate-slide-up min-w-[320px]">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-2 text-center drop-shadow-lg tracking-tight animate-slide-down">
            Receptionist's Dashboard
          </h1>
          <p className="text-gray-700 text-lg font-medium mb-8 text-center animate-fade-in delay-100">
            Please provide the patient name, symptoms, and preferred doctor to book an appointment.
          </p>

          <form onSubmit={submit} className="space-y-5 w-full animate-fade-in delay-300">
            <div className="relative">
              <input
                className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none text-gray-800 placeholder-gray-400"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Patient Name"
                required
              />
            </div>
            <div className="relative">
              <input
                className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none text-gray-800 placeholder-gray-400"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Symptoms"
                required
              />
            </div>
            <div className="relative">
              <input
                className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none text-gray-800 placeholder-gray-400"
                value={preferredDoctor}
                onChange={(e) => setPreferredDoctor(e.target.value)}
                placeholder="Doctor Name"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6 animate-fade-in delay-400"
            >
              Book Appointment
            </button>
          </form>
        </div>

        {/* AI Medical Agent Section */}
        <div className="flex-1 bg-white/50 backdrop-blur-2xl rounded-[2.5rem] p-0 md:p-6 flex flex-col items-center justify-start min-h-[420px] max-h-[600px] w-full transition-all duration-300 animate-slide-up ai-agent-section-glass shadow-2xl relative overflow-hidden" style={{ boxShadow: '0 4px 24px 0 #a5b4fc33' }}>
          {/* Sleek Symptomix Header */}
          <div className="w-full text-center py-4 mb-2 animate-agent-header">
            <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 drop-shadow-lg tracking-tight animate-slide-down">
              Symptomix <span className="text-base font-semibold text-gray-500">- AI Appointment Assistant</span>
            </h2>
          </div>
          <div className="w-2/3 h-1 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-bar" />
          <div className="flex-1 w-full flex items-center justify-center animate-fade-in delay-200">
            <iframe
              src="https://app.millis.ai/agents/embedded?id=-OT0ovO_8AUMWHEKd69x&k=D2Q3ChzvWQLCjMebJKCVWtE6CDDnGfGY&c=eJxdkNFqwzAMRX%2FFGAYpJGkcmnbNHvsDg77sYS9O7Lpijh1khY6V%2FvsUwtatYARXuj5c6SoJyNsk26sE461s5ZE0ksxlH0OwPUFw3Dz8irIseYhTCMvkSHGUt1wC%2B%2F9iTrt2gP6RQ7rzFlsTKf2jLO4ieZ3OM62biGI4pDTPwBP%2FEQbjWKSzNvGSVaISdTN%2BCnSdztR2z6oWqt6LtWiqp9XqRbyHTvcfDuMUTAGDdrYVHoLVWDjUBmygTKnGWJfPlGyzFctbC1UxImfCQ%2F%2B5%2FiFHNHMk9fomUvRglhx10%2BTiXqqy3rCdFz1FHJZlWNxjLTrBFx9MbatcEuqQeoSRZEs4WT6RdRADG6dUXGwiefsG%2Fs6FPA%3D%3D"
              width="100%"
              height="100%"
              allow="microphone"
              title="AI Medical Agent"
              style={{ border: "none", minHeight: 340, maxHeight: 500, borderRadius: '2.5rem', background: 'transparent' }}
            />
          </div>
        </div>
      </div>

      {confirmation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/90 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl border-2 border-blue-200 max-w-md w-full animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Booking Confirmed</h3>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                <span className="font-semibold">Patient:</span> {confirmation.patientName}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Doctor:</span> {confirmation.preferredDoctor}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Symptoms:</span> {confirmation.symptoms}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Time:</span> {new Date(confirmation.scheduledAt).toLocaleString()}
              </p>
            </div>
            <button
              className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
              onClick={() => setConfirmation(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1s both; }
        .animate-slide-up { animation: slideUp 1s both; }
        .animate-slide-down { animation: slideDown 1s both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
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
        .appointment-glass-card {
          border-radius: 2.5rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.65) 60%, rgba(236,233,254,0.85) 100%);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 1.5px 8px 0 #a5b4fc33 inset;
          border: 2.5px solid transparent;
          border-image: linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%) 1;
          transition: box-shadow 0.3s, border-color 0.3s, background 0.3s, transform 0.3s;
        }
        .appointment-glass-card:hover {
          box-shadow: 0 16px 48px 0 rgba(31, 38, 135, 0.22), 0 2.5px 16px 0 #a5b4fc55 inset;
          background: linear-gradient(135deg, rgba(236,233,254,0.92) 60%, rgba(255,255,255,0.85) 100%);
          border-color: #818cf8;
          transform: translateY(-6px) scale(1.025);
        }
        .ai-agent-section-glass {
          box-shadow: 0 0 32px 0 #a5b4fc44, 0 8px 32px 0 #818cf822;
          border: 2.5px solid transparent;
          border-image: linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%) 1;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s, border-color 0.3s, background 0.3s, transform 0.3s;
        }
        .ai-agent-section-glass:hover {
          box-shadow: 0 0 64px 0 #a5b4fc77, 0 16px 48px 0 #818cf844;
          background: linear-gradient(135deg, rgba(236,233,254,0.92) 60%, rgba(255,255,255,0.85) 100%);
          border-color: #818cf8;
          transform: translateY(-4px) scale(1.015);
        }
        .animate-agent-header { animation: fadeIn 1.2s both; }
        .animate-gradient-bar { animation: gradientBar 2.5s infinite alternate; }
        @keyframes gradientBar {
          0% { filter: brightness(1) blur(0px); }
          100% { filter: brightness(1.3) blur(2px); }
        }
      `}</style>
    </div>
  );
}

export default AppointmentForm;

