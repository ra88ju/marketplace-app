import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF8F7] px-4 py-16">
      <div className="bg-white rounded-[20px] p-8 w-full max-w-[480px] shadow-[0_10px_40px_-12px_rgba(0,0,0,0.12)]">
        <h1 className="text-[20px] font-[700] leading-[30px] tracking-[0%] mb-8 font-fahkwang text-[#0C090A] text-center">
          Business or Organizer Registration
        </h1>
        
        <form className="space-y-5">
          {/* Account Type */}
          <div>
            <label 
              htmlFor="accountType" 
              className="block text-[14px] font-[500] text-[#6B7280] mb-1.5 font-heebo"
            >
              Account Type
            </label>
            <div className="relative">
              <select
                id="accountType"
                name="accountType"
                className="w-full px-4 py-[14px] rounded-[12px] border border-[#E5E7EB] focus:border-[#0095FF] focus:ring-1 focus:ring-[#0095FF] outline-none transition-colors font-heebo bg-white appearance-none text-[#0C090A] pr-10"
                required
                defaultValue="Business"
              >
                <option value="Business">Business</option>
                <option value="Organizer">Organizer</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label 
              htmlFor="businessName" 
              className="block text-[14px] font-[500] text-[#6B7280] mb-1.5 font-heebo"
            >
              Business/Organization Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              className="w-full px-4 py-[14px] rounded-[12px] border border-[#E5E7EB] focus:border-[#0095FF] focus:ring-1 focus:ring-[#0095FF] outline-none transition-colors font-heebo text-[#0C090A] placeholder-[#6B7280]"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-[14px] font-[500] text-[#6B7280] mb-1.5 font-heebo"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-[14px] rounded-[12px] border border-[#E5E7EB] focus:border-[#0095FF] focus:ring-1 focus:ring-[#0095FF] outline-none transition-colors font-heebo text-[#0C090A] placeholder-[#6B7280]"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="block text-[14px] font-[500] text-[#6B7280] mb-1.5 font-heebo"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-[14px] rounded-[12px] border border-[#E5E7EB] focus:border-[#0095FF] focus:ring-1 focus:ring-[#0095FF] outline-none transition-colors font-heebo text-[#0C090A] placeholder-[#6B7280]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0095FF] text-white py-[14px] rounded-[12px] hover:bg-[#0084e3] transition-colors font-heebo text-[15px] mt-2"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-[#6B7280] font-heebo text-[14px]">Already have an account? </span>
          <Link 
            href="/login" 
            className="text-[#FF1493] hover:text-[#ff1493cc] font-heebo text-[14px] font-[500]"
          >
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
} 