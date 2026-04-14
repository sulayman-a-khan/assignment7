import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">

      {/* Decorative soft green shapes */}
      <div className="absolute w-[350px] h-[350px] bg-green-300/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-green-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      <div className="z-10 max-w-md bg-white/70 backdrop-blur-md border border-green-100 shadow-xl rounded-3xl p-10">

        {/* 404 Text */}
        <h1 className="text-[110px] font-extrabold text-green-600 leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mt-3">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-3 mb-8">
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-8 py-4 rounded-2xl font-semibold text-white 
          bg-green-600 hover:bg-green-700 
          transition-all duration-300 shadow-lg hover:shadow-green-400/40"
        >
          🌿 Back to Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;