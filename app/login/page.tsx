import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF8F7] px-4 py-16">
      <div className="bg-white rounded-[20px] p-8 w-full max-w-[480px] shadow-[0_8px_30px_rgb(0,0,0,0.1) border-[#E8D0B9]">
        <h1 className="text-[26px] font-[700] leading-[30px] tracking-[0%] mb-8 font-fahkwang text-[#0C090A] text-center">
          Business or Organizer Login
        </h1>
        
        <form className="space-y-6">
          <div>
            <label 
              htmlFor="email" 
              className="block text-[14px] font-[500] text-[#6B7280] mb-2 font-heebo"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-[14px] rounded-[12px] border border-[#E8D0B9] focus:border-[#0095FF] focus:ring-1 focus:ring-[#0095FF] outline-none transition-colors font-heebo text-[#0C090A] placeholder-[#6B7280]"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="block text-[14px] font-[500] text-[#6B7280] mb-2 font-heebo"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-[14px] rounded-[12px] border border-[#E8D0B9] focus:border-[#0095FF] focus:ring-1 focus:ring-[#0095FF] outline-none transition-colors font-heebo text-[#0C090A] placeholder-[#6B7280]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0095FF] text-white py-[14px] rounded-[12px] hover:bg-[#0084e3] transition-colors font-heebo text-[15px]"
          >
            Login
          </button>
        </form>

        <div className="mt-8 text-center">
          <span className="text-[#6B7280] font-heebo text-[14px]">Don't have an account? </span>
          <Link 
            href="/register" 
            className="text-[#FF1493] hover:text-[#ff1493cc] font-heebo text-[14px] font-[500]"
          >
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
} 