import { businesses } from '../data/businesses';

export default function BusinessList() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <div key={business.id} className="business-card">
            <div>
              <h2 className="text-2xl font-bold">{business.title}</h2>
              <p className="category-text">{business.category}</p> {/* Apply the category-text class */}
              <p>{business.description}</p>
              <p>{business.location}</p>
            </div>
            <img src={business.imageUrl} alt={business.title} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}