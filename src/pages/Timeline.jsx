import { useState, useEffect } from 'react';
import { friends } from '../data/friends';
import { getTimelineEvents } from '../data/timelineStore';

const Timeline = () => {
  const [filter, setFilter] = useState('all');
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    setInteractions(getTimelineEvents());
  }, []);

  // Re-sync when window gets focus (navigating back from FriendDetails)
  useEffect(() => {
    const sync = () => setInteractions(getTimelineEvents());
    window.addEventListener('focus', sync);
    return () => window.removeEventListener('focus', sync);
  }, []);

  const filteredInteractions = interactions
    .filter(item => filter === 'all' || item.type === filter)
    .sort((a, b) => b.id - a.id);

  const getIcon = (type) => {
    switch (type) {
      case 'call':  return <img src="src/assets/call.png"  alt="call"  className="w-8 h-8" />;
      case 'text':  return <img src="src/assets/text.png"  alt="text"  className="w-8 h-8" />;
      case 'video': return <img src="src/assets/video.png" alt="video" className="w-8 h-8" />;
      case 'meetup': return <span className="text-3xl">🤝</span>;
      default:       return <span className="text-3xl">📌</span>;
    }
  };

  return (
    <div className="bg-white min-h-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">Timeline</h1>

        {/* Filter */}
        <div className="mb-8">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 bg-white text-gray-700 px-5 py-2.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-600 cursor-pointer text-sm"
          >
            <option value="all">All interactions</option>
            <option value="call">Calls</option>
            <option value="text">Texts</option>
            <option value="video">Videos</option>
            <option value="meetup">Meetups</option>
          </select>
        </div>

        {/* List */}
        <div className="space-y-3">
          {filteredInteractions.length > 0 ? (
            filteredInteractions.map((item) => {
              const friend = friends.find(f => f.id === item.friendId);
              const displayName = item.friendName || friend?.name || 'Unknown';
              return (
                <div key={item.id} className="bg-white border border-gray-200 hover:border-gray-300 rounded-2xl p-4 flex items-center gap-4 sm:gap-6 transition-all hover:shadow-sm">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                    {getIcon(item.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-base sm:text-lg text-gray-900 truncate">
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)} with {displayName}
                    </p>
                    <p className="text-gray-400 text-sm mt-0.5">{item.date}</p>
                  </div>
                  {friend?.picture && (
                    <img src={friend.picture} alt={displayName} className="w-9 h-9 rounded-full object-cover opacity-70 flex-shrink-0" />
                  )}
                </div>
              );
            })
          ) : interactions.length === 0 ? (
            <div className="border border-dashed border-gray-200 rounded-2xl py-20 text-center">
              <p className="text-4xl mb-3">📭</p>
              <p className="text-gray-500 font-medium">Your timeline is empty</p>
              <p className="text-gray-400 text-sm mt-1">Visit a friend's page and tap Call, Text, or Video.</p>
            </div>
          ) : (
            <div className="border border-gray-200 rounded-2xl py-14 text-center text-gray-400">
              No interactions match this filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
