import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BusinessCardProps {
  category: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ category, title, description, location, imageUrl }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.8)] transition-shadow duration-300">
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <span className="text-[13px] font-medium text-gray-600">{category}</span>
        <h3 className="text-[17px] font-semibold mt-1 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-[14px] mt-1.5 leading-[1.4]">{description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-gray-500 text-[13px]">{location}</span>
          <Link
            href={`/business/${title.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-black text-white px-4 py-1.5 rounded-full text-[13px] font-medium hover:bg-gray-900 transition-colors"
          >
            Visit Business
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;