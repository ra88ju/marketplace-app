export default function CategoryDropdown() {
  return (
    <div className="relative flex-1">
      <select
        className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 pr-8 text-gray-700 focus:outline-none focus:border-gray-400"
        defaultValue=""
      >
        <option value="">All Categories</option>
        <option value="handmade">Handmade</option>
        <option value="food-beverage">Food & Beverage</option>
        <option value="art-design">Art & Design</option>
        <option value="fashion">Fashion</option>
        <option value="beauty">Beauty</option>
        <option value="home-garden">Home & Garden</option>
        <option value="jewelry">Jewelry</option>
        <option value="books-music">Books & Music</option>
        <option value="toys-games">Toys & Games</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
} 