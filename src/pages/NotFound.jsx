import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-white px-6 py-20">
      <div className="text-center max-w-sm">

        {/* Big 404 */}
        <h1 className="text-[120px] font-extrabold leading-none text-emerald-600 select-none">
          404
        </h1>

        {/* Divider line */}
        <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-2 mb-6" />

        {/* Message */}
        <h2 className="text-2xl font-bold text-gray-800">
          Page Not Found
        </h2>
        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-8 px-8 py-3 rounded-2xl font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-emerald-300/40"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
