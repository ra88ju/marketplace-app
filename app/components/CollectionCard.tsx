import Link from 'next/link';

interface CollectionCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonColor: 'pink' | 'teal';
  href: string;
}

export default function CollectionCard({
  title,
  description,
  buttonText,
  buttonColor,
  href,
}: CollectionCardProps) {
  const buttonStyles = {
    pink: 'bg-[#FF1493] hover:bg-[#FF1493]/90',
    teal: 'bg-[#00A3A3] hover:bg-[#00A3A3]/90',
  };

  return (
    <div className="rounded-2xl border border-gray-200 p-8 bg-white">
      <h3 className="text-2xl font-medium mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link
        href={href}
        className={`inline-block px-6 py-2 rounded-full text-white text-sm font-medium transition-colors ${buttonStyles[buttonColor]}`}
      >
        {buttonText}
      </Link>
    </div>
  );
} 