import { businesses } from '../data/businesses';

export default function BusinessList() {
  return (
    <div className="container mx-auto px-4">
      {businesses.map((business) => (
        <div key={business.id} className="mb-6">
          <h2 className="text-2xl font-bold">{business.title}</h2>
          <p className="category-text">{business.category}</p> {/* Apply the category-text class */}
          <p>{business.description}</p>
          <p>{business.location}</p>
          <img src={business.imageUrl} alt={business.title} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}