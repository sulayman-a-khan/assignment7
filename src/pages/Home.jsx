import { useState, useEffect } from 'react';
import FriendCard from '../components/FriendCard';
import { friends } from '../data/friends';
import Toast from '../components/Toast';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const [toast, setToast] = useState(null);
  const [loadingFriends, setLoadingFriends] = useState(true);   // Only for friends section

  // Simulate loading only for the friends grid
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingFriends(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* ==================== BANNER SECTION ==================== */}
      <div className="bg-white py-20 md:py-20 border-b">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Friends to keep close in your life
          </h1>
          
          <p className="mt-6 text-md text-gray-600 mx-auto leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and nurture 
            the relationships that matter most.
          </p>

          <button 
            onClick={() => setToast({ message: "Add Friend feature coming soon!", type: "success" })}
            className="mt-6 bg-emerald-700 hover:bg-emerald-600 transition-all 
                       text-white px-5 py-3 rounded-xl text-md font-medium 
                       flex items-center gap-3 mx-auto shadow-lg shadow-emerald-900/20"
          >
            + Add a Friend
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Total Friends</p>
            <p className="text-4xl font-semibold text-gray-900 mt-2">24</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">On Track</p>
            <p className="text-4xl font-semibold text-emerald-600 mt-2">14</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Need Attention</p>
            <p className="text-4xl font-semibold text-amber-600 mt-2">5</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Interactions This Month</p>
            <p className="text-4xl font-semibold text-purple-600 mt-2">12</p>
          </div>
        </div>

        {/* Your Friends Section with Loading Spinner */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">Your Friends</h2>
        </div>

        {loadingFriends ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {friends.map(friend => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </div>

      {toast && <Toast message={toast.message} onClose={() => setToast(null)} />}
    </div>
  );
};

export default Home;