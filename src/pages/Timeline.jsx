import { useState, useEffect } from 'react';
import { friends } from '../data/friends';
import { getTimelineEvents } from '../data/timelineStore';

const Timeline = () => {
  const [filter, setFilter] = useState('all');
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    setInteractions(getTimelineEvents());
  }, []);

  const filteredInteractions = interactions
    .filter(item => filter === 'all' || item.type === filter)
    .sort((a, b) => b.id - a.id);

  const getIcon = (type) => {
    switch (type) {
      case 'call': return <img src="src/assets/call.png" alt="call icon" className="w-8 h-8" />;
      case 'text': return <img src="src/assets/text.png" alt="text icon" className="w-8 h-8" />;
      case 'video': return <img src="src/assets/video.png" alt="video icon" className="w-8 h-8" />;
      case 'meetup': return '🤝';
      default: return '📌';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto p-5">

        <h1 className="text-4xl font-semibold text-gray-900 mb-8">Timeline</h1>

        {/* FILTER */}
        <div className="mb-10">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 bg-white text-gray-700 px-5 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-600 cursor-pointer text-base"
          >
            <option value="all">Filter timeline</option>
            <option value="call">Calls</option>
            <option value="text">Texts</option>
            <option value="video">Videos</option>
            <option value="meetup">Meetups</option>
          </select>
        </div>

        {/* TIMELINE LIST */}
        <div className="space-y-4">
          {filteredInteractions.length > 0 ? (
            filteredInteractions.map((item) => {
              const friend = friends.find(f => f.id === item.friendId);
              const displayName = item.friendName || friend?.name || 'Unknown';
              return (
                <div key={item.id} className="bg-white border border-gray-200 hover:border-gray-300 rounded-2xl p-4 flex items-center gap-6 transition-all hover:shadow-sm">
                  <div className="text-4xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                    {getIcon(item.type)}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-xl text-gray-900">
                      {item.type === 'meetup'
                        ? `Meetup with ${displayName}`
                        : `${item.type.charAt(0).toUpperCase() + item.type.slice(1)} with ${displayName}`}
                    </p>
                    <p className="text-gray-500 mt-1">{item.date}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {friend?.picture && (
                      <img src={friend.picture} alt={displayName} className="w-10 h-10 rounded-full object-cover opacity-70" />
                    )}
                  </div>
                </div>
              );
            })
          ) : interactions.length === 0 ? (
            <div className="border border-dashed border-gray-200 rounded-2xl p-20 text-center">
              <p className="text-5xl mb-4">📭</p>
              <p className="text-gray-500 text-lg font-medium">Your timeline is empty</p>
              <p className="text-gray-400 text-sm mt-2">Go to a friend's page and tap Call, Text, or Video to log an interaction.</p>
            </div>
          ) : (
            <div className="border border-gray-200 rounded-2xl p-16 text-center text-gray-500 text-lg">
              No interactions found for this filter.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Timeline;
