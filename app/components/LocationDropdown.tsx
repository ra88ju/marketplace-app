export default function LocationDropdown() {
  return (
    <div className="relative flex-1">
      <select
        className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 pr-8 text-gray-700 focus:outline-none focus:border-gray-400"
        defaultValue=""
      >
        <option value="">All Locations</option>
        <option value="new-york">New York, NY</option>
        <option value="chicago">Chicago, IL</option>
        <option value="los-angeles">Los Angeles, CA</option>
        <option value="portland">Portland, OR</option>
        <option value="austin">Austin, TX</option>
        <option value="seattle">Seattle, WA</option>
        <option value="denver">Denver, CO</option>
        <option value="san-francisco">San Francisco, CA</option>
        <option value="boston">Boston, MA</option>
        <option value="atlanta">Atlanta, GA</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
} 