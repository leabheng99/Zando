import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const AuthModal = ({ isOpen, onClose, initialTab = 'login' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [showPassword, setShowPassword] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setShowPassword(false);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-full max-w-[450px] rounded-md shadow-2xl p-6 sm:p-8 animate-fade-in-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-black transition"
        >
          <IoClose />
        </button>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-300 mb-6 mt-2">
          <button
            onClick={() => setActiveTab('login')}
            className={`pb-2 text-lg font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'login' ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`pb-2 text-lg font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'register' ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Register
          </button>
        </div>

        {/* Content */}
        {activeTab === 'login' ? (
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Mobile number</label>
              <input 
                type="text" 
                placeholder="Enter phone number" 
                className="w-full border border-gray-400 rounded p-3 outline-none focus:border-black transition placeholder:text-gray-400"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password" 
                  className="w-full border border-gray-400 rounded p-3 pr-10 outline-none focus:border-black transition placeholder:text-gray-400"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
                >
                  {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                </button>
              </div>
            </div>

            <button className="w-full bg-black text-white font-bold py-3 mt-2 rounded hover:bg-gray-800 transition">
              LOGIN
            </button>

            <div className="text-center mt-2">
              <a href="#" className="text-sm font-semibold hover:underline">
                Forgot your password?
              </a>
            </div>

            <div className="flex items-center gap-4 my-2">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="text-gray-600 text-sm">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 border border-gray-400 rounded py-3 font-semibold hover:bg-gray-50 transition">
              <FcGoogle size={22} />
              Continue with Google
            </button>

            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">New to ZANDO? </span>
              <button 
                onClick={() => setActiveTab('register')}
                className="text-sm font-semibold hover:underline"
              >
                Register
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Mobile number</label>
              <input 
                type="text" 
                placeholder="Enter phone number" 
                className="w-full border border-gray-400 rounded p-3 outline-none focus:border-black transition placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password" 
                  className="w-full border border-gray-400 rounded p-3 pr-10 outline-none focus:border-black transition placeholder:text-gray-400"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
                >
                  {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
                </button>
              </div>
            </div>

            <button className="w-full bg-black text-white font-bold py-3 mt-2 rounded hover:bg-gray-800 transition">
              REGISTER
            </button>

            <div className="flex items-center gap-4 my-2">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="text-gray-600 text-sm">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 border border-gray-400 rounded py-3 font-semibold hover:bg-gray-50 transition">
              <FcGoogle size={22} />
              Continue with Google
            </button>

            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">Already have an account? </span>
              <button 
                onClick={() => setActiveTab('login')}
                className="text-sm font-semibold hover:underline"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
