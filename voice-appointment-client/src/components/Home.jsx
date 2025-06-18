import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import suvanImg from '../assets/team/Suvan.jpeg';
import swapnilImg from '../assets/team/swapnil.jpeg';
import prabhatImg from '../assets/team/prabhat.jpeg';
import advaithImg from '../assets/team/advaith.jpeg';


const FAQS = [
  {
    q: "Is Baymax secure and compliant with healthcare standards?",
    a: "Absolutely. All data is encrypted in transit and at rest. Baymax follows strict privacy protocols and is designed to comply with healthcare data regulations.",
  },
  {
    q: "Can patients book appointments using voice commands?",
    a: "Yes! Patients and staff can book, reschedule, or cancel appointments using natural voice commands, making the process seamless and accessible.",
  },
  {
    q: "How does Baymax help reduce clinic workload?",
    a: "Baymax automates appointment management, sends reminders, and provides real-time dashboards, freeing up staff to focus on patient care.",
  },
  {
    q: "Is Baymax easy to integrate with our existing systems?",
    a: "Baymax is designed for easy integration and can work alongside your current clinic management tools with minimal setup.",
  },
];

const TEAM = [
  {
    name: "Suvan",
    role: "Frontend Developer & AI Integrator",
    img: suvanImg,
    linkedin: "https://www.linkedin.com/in/suvan-sethy-3b8720343/",
  },
  {
    name: "Swapnil",
    role: "Backend Developer",
    img: swapnilImg,
    linkedin: "https://www.linkedin.com/in/swapnil-verma-50b4ab209/",
  },
  {
    name: "Prabhat",
    role: "UI/UX Designer",
    img: prabhatImg,
    linkedin: "https://www.linkedin.com/in/prabhat-solanki-439568348/",
  },
  {
    name: "Advaith",
    role: "Content Writer & Pitcher",
    img: advaithImg,
    linkedin: "https://www.linkedin.com/in/advaith-santosh-5031a2322/",
  },
];

// Custom hook for scroll-triggered animation
function useScrollAnimation() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function Home() {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [heroRef, heroVisible] = useScrollAnimation();
  const [featuresRef, featuresVisible] = useScrollAnimation();
  const [whyRef, whyVisible] = useScrollAnimation();
  const [faqRef, faqVisible] = useScrollAnimation();
  const [teamRef, teamVisible] = useScrollAnimation();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col justify-between">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 z-30 animate-fade-in">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-2xl font-bold shadow-lg">B</span>
          <span className="text-2xl font-extrabold text-gray-800 tracking-tight">Baymax</span>
        </div>
        <button
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-pink-600 text-white font-bold px-7 py-2 rounded-full text-lg shadow-md transition-all duration-200 hover:scale-105 focus:ring-4 focus:ring-blue-300"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`flex flex-col md:flex-row items-center justify-between gap-10 px-8 pt-36 pb-16 max-w-7xl mx-auto w-full transition-all duration-700 ${heroVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        {/* Text */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight animate-fade-in">
            Revolutionize Your Clinic with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Baymax</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 animate-fade-in delay-100">
            The all-in-one, AI-powered assistant for seamless appointment management, real-time dashboards, and voice-driven healthcare workflows.
          </p>
          <button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-200 hover:scale-105 focus:ring-4 focus:ring-blue-300 animate-fade-in delay-200"
            onClick={() => navigate('/login')}
          >
            Get Started
          </button>
        </div>
        {/* Illustration with animated ripples */}
        <div className="flex-1 flex items-center justify-center animate-fade-in delay-300">
          <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-72 h-72 md:w-80 md:h-80 relative">
            <ellipse cx="160" cy="160" rx="140" ry="140" className="ripple-ellipse ellipse1" />
            <ellipse cx="160" cy="160" rx="110" ry="110" className="ripple-ellipse ellipse2" />
            <ellipse cx="160" cy="160" rx="80" ry="80" className="ripple-ellipse ellipse3" />
            <ellipse cx="160" cy="160" rx="50" ry="50" fill="#818cf8" />
            <text x="160" y="175" textAnchor="middle" fontSize="48" fill="#fff" fontWeight="bold">🤖</text>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className={`w-full max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${featuresVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-blue-400 transition-transform duration-200 animate-slide-up delay-100 hover:scale-105 hover:shadow-2xl hover:border-blue-600">
          <svg className="w-12 h-12 mb-4 text-blue-500 group-hover:text-blue-700 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>
          <h3 className="text-xl font-bold mb-2">Voice-Based Booking</h3>
          <p className="text-gray-700">Book, reschedule, or cancel appointments hands-free with advanced voice recognition.</p>
        </div>
        <div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-purple-400 transition-transform duration-200 animate-slide-up delay-200 hover:scale-105 hover:shadow-2xl hover:border-purple-600">
          <svg className="w-12 h-12 mb-4 text-purple-500 group-hover:text-purple-700 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1" /></svg>
          <h3 className="text-xl font-bold mb-2">Real-Time Dashboard</h3>
          <p className="text-gray-700">Instantly view schedules, patient details, and notifications for efficient clinic management.</p>
        </div>
        <div className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-pink-400 transition-transform duration-200 animate-slide-up delay-300 hover:scale-105 hover:shadow-2xl hover:border-pink-600">
          <svg className="w-12 h-12 mb-4 text-pink-500 group-hover:text-pink-700 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
          <h3 className="text-xl font-bold mb-2">AI-Powered Prescriptions</h3>
          <p className="text-gray-700">Generate and manage prescriptions with smart, AI-driven suggestions and reminders.</p>
        </div>
      </section>

      {/* Why Baymax Section */}
      <section
        ref={whyRef}
        className={`w-full max-w-5xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center gap-10 transition-all duration-700 ${whyVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <div className="flex-1 animate-slide-up">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why Choose Baymax?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li><span className="font-bold text-blue-700">Secure & Compliant:</span> All data is encrypted and privacy is our top priority.</li>
            <li><span className="font-bold text-purple-700">Lightning Fast:</span> Experience instant booking and real-time updates.</li>
            <li><span className="font-bold text-pink-700">AI-Driven:</span> Reduce errors and boost productivity with intelligent automation.</li>
            <li><span className="font-bold text-blue-700">User-Friendly:</span> Intuitive design for both staff and patients.</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center animate-slide-up delay-200">
          <div className="bg-white/80 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
            <svg className="w-16 h-16 mb-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 16h.01M16 12h.01" /></svg>
            <p className="text-lg text-gray-700 italic mb-2">“Baymax has transformed our clinic's workflow. Appointments are now seamless and our staff loves the voice features!”</p>
            <span className="text-gray-900 font-bold">— ERROR 404</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={faqRef}
        className={`w-full max-w-4xl mx-auto px-8 py-12 transition-all duration-700 ${faqVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}
      >
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-white/80 rounded-xl shadow-md p-6 transition-all duration-300 cursor-pointer border-l-4 ${openFAQ === idx ? 'border-blue-500' : 'border-transparent'} animate-slide-up hover:scale-[1.03] hover:shadow-xl`}
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-800">{faq.q}</span>
                <svg className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 ${openFAQ === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${openFAQ === idx ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-700 text-base">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team Section */}
      <section
        ref={teamRef}
        className={`relative w-full max-w-6xl mx-auto px-8 py-20 transition-all duration-700 ${teamVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'} team-section-bg`}
      >
        {/* Decorative wave divider */}
        <div className="absolute -top-10 left-0 w-full z-0 pointer-events-none select-none">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
            <path d="M0,80 C360,120 1080,0 1440,80 L1440,100 L0,100 Z" fill="#c7d2fe" fillOpacity="0.5" />
          </svg>
        </div>
        {/* Soft background pattern */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <svg width="100%" height="100%" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="150" cy="100" rx="160" ry="80" fill="#a5b4fc" fillOpacity="0.18" />
            <ellipse cx="450" cy="100" rx="160" ry="80" fill="#fbcfe8" fillOpacity="0.18" />
          </svg>
        </div>
        <h2 className="relative z-10 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-14 text-center drop-shadow-lg tracking-tight animate-slide-down">Our Team</h2>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {TEAM.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white/95 rounded-3xl shadow-2xl border-2 border-transparent hover-border-gradient-to-r p-12 min-w-[260px] max-w-sm w-full flex flex-col items-center text-center transition-all duration-300 animate-slide-up team-card highlight-card team-card-glow"
              style={{ boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.13)' }}
            >
              <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-1 rounded-full mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-gray-700 mb-3">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium mt-2 transition-colors duration-200"
              >
                <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1 group-hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white/80 backdrop-blur-md py-6 px-8 flex flex-col md:flex-row items-center justify-between shadow-inner mt-8 animate-fade-in delay-500">
        <span className="text-gray-700 font-medium">&copy; {new Date().getFullYear()} Baymax. All rights reserved.</span>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="text-blue-700 hover:underline">Privacy Policy</a>
          <a href="#" className="text-blue-700 hover:underline">Terms of Service</a>
          <a href="#" className="text-blue-700 hover:underline">Contact</a>
        </div>
      </footer>
      {/* Animations */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1s both; }
        .animate-slide-up { animation: slideUp 1s both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
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
        .hover-border-gradient-to-r:hover {
          border-image: linear-gradient(to right, #60a5fa, #a78bfa) 1;
        }
        .highlight-card {
          transition: box-shadow 0.3s, background 0.3s, border-color 0.3s;
        }
        .highlight-card:hover {
          background: linear-gradient(135deg, #e0e7ff 60%, #fbcfe8 100%);
          box-shadow: 0 0 0 4px #a5b4fc, 0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 0 24px 0 #a5b4fc66;
          border-color: #818cf8;
        }
        .team-section-bg {
          background: linear-gradient(120deg, #e0e7ff 60%, #fbcfe8 100%);
          box-shadow: 0 0 80px 0 #a5b4fc33 inset;
          border-radius: 2.5rem;
          position: relative;
          z-index: 1;
        }
        .team-card-glow {
          box-shadow: 0 0 0 4px #a5b4fc33, 0 12px 40px 0 rgba(31, 38, 135, 0.13);
        }
      `}</style>
    </div>
  );
}

export default Home; 