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
  const colors = {
    pink: {
      border: 'border-[#E91E63]',
      text: 'text-[#E91E63]',
      bg: 'bg-[#E91E63]',
      hover: 'hover:bg-[#D81B60]'
    },
    teal: {
      border: 'border-[#009688]',
      text: 'text-[#009688]',
      bg: 'bg-[#009688]',
      hover: 'hover:bg-[#00897B]'
    }
  };

  const colorScheme = colors[buttonColor];

  return (
    <Link href="/collections" className={`block rounded-3xl border-2 ${colorScheme.border} p-8 hover:shadow-lg transition-shadow`}>
      <h2 className={`${colorScheme.text} text-3xl font-medium mb-4`}>
        {title}
      </h2>
      <p className={`${colorScheme.text} text-lg mb-6`}>
        {description}
      </p>
      <span
        className={`inline-block ${colorScheme.bg} text-white px-6 py-2.5 rounded-full ${colorScheme.hover} transition-colors`}
      >
        {buttonText}
      </span>
    </Link>
  );
} 