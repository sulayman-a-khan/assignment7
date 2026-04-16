import { useState, useEffect } from 'react';
import FriendCard from '../components/FriendCard';
import { friends } from '../data/friends';
import Toast from '../components/Toast';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const [toast, setToast] = useState(null);
  const [loadingFriends, setLoadingFriends] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingFriends(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const total = friends.length;
  const onTrack = friends.filter(f => f.status === 'on-track').length;
  const needAttention = friends.filter(f => f.status === 'almost due').length;
  const overdue = friends.filter(f => f.status === 'overdue').length;

  return (
    <div className="flex-1 bg-slate-50">

      {/* BANNER */}
      <div className="bg-white py-16 md:py-20 border-b">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Friends to keep close in your life
          </h1>
          <p className="mt-5 text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Your personal shelf of meaningful connections. Browse, tend, and nurture
            the relationships that matter most.
          </p>
          <button
            onClick={() => setToast({ message: "Add Friend feature coming soon!", type: "success" })}
            className="mt-6 bg-emerald-700 hover:bg-emerald-600 transition-all text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 mx-auto shadow-lg shadow-emerald-900/20"
          >
            + Add a Friend
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

        {/* Summary Cards — centered text */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <p className="text-4xl font-semibold text-gray-900">{total}</p>
            <p className="text-gray-400 text-sm font-medium mt-2">Total Friends</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <p className="text-4xl font-semibold text-emerald-600">{onTrack}</p>
            <p className="text-gray-400 text-sm font-medium mt-2">On Track</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <p className="text-4xl font-semibold text-amber-500">{needAttention}</p>
            <p className="text-gray-400 text-sm font-medium mt-2">Need Attention</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <p className="text-4xl font-semibold text-red-500">{overdue}</p>
            <p className="text-gray-400 text-sm font-medium mt-2">Overdue</p>
          </div>
        </div>

        {/* Friends Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Your Friends</h2>
        </div>

        {loadingFriends ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
