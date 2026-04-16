import { useParams } from 'react-router-dom';
import { friends } from '../data/friends';
import { addTimelineEvent, getTimelineEvents } from '../data/timelineStore';
import { Phone, MessageCircle, Video, Edit2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import Toast from '../components/Toast';

const FriendDetails = () => {
  const { id } = useParams();
  const friend = friends.find(f => f.id === parseInt(id));
  const [toast, setToast] = useState(null);
  const [recentInteractions, setRecentInteractions] = useState([]);

  useEffect(() => {
    if (friend) {
      const all = getTimelineEvents();
      setRecentInteractions(all.filter(e => e.friendId === friend.id));
    }
  }, [friend?.id]);

  if (!friend) {
    return <div className="text-center py-20 text-lg text-gray-400">Friend not found</div>;
  }

  const handleAction = (type) => {
    const newEvent = addTimelineEvent({
      friendId: friend.id,
      friendName: friend.name,
      type,
      note: `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friend.name}`,
    });
    setRecentInteractions(prev => [newEvent, ...prev]);
    setToast({ message: `${type.charAt(0).toUpperCase() + type.slice(1)} logged!`, type: 'success' });
  };

  const statusConfig = {
    overdue:     { text: 'Overdue',    color: 'text-red-600 bg-red-100' },
    'almost due':{ text: 'Almost Due', color: 'text-amber-600 bg-amber-100' },
    'on-track':  { text: 'On Track',   color: 'text-emerald-600 bg-emerald-100' },
  };
  const config = statusConfig[friend.status];

  const typeIcon = (type) => ({ call: '📞', text: '💬', video: '🎥' }[type] ?? '📌');

  return (
    <div className="bg-[#f3f5f4] py-8 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-5">

          {/* LEFT */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <img src={friend.picture} alt={friend.name} className="w-24 h-24 rounded-full object-cover mb-4" />
                <h1 className="text-xl font-semibold text-gray-900">{friend.name}</h1>
                <div className={`mt-3 px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>{config.text}</div>
                <p className="mt-4 text-sm text-gray-500 italic">{friend.bio}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <button className="w-full px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-3">⏰ Snooze 2 Weeks</button>
              <button className="w-full px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-3 border-t">📦 Archive</button>
              <button className="w-full px-6 py-3 text-sm text-red-500 hover:bg-red-50 flex items-center justify-center gap-3 border-t">🗑️ Delete</button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 space-y-4">

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Days Since Contact', value: friend.days_since_contact, color: 'text-gray-900' },
                { label: 'Goal (Days)',         value: friend.goal,              color: 'text-gray-900' },
                { label: 'Next Due',            value: friend.next_due_date,     color: 'text-emerald-600' },
              ].map(({ label, value, color }) => (
                <div key={label} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-400 leading-tight">{label}</p>
                  <p className={`text-lg sm:text-2xl font-semibold mt-1 ${color} break-words`}>{value}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-400">Relationship Goal</p>
                <p className="text-base font-medium text-gray-900 mt-1">Connect every {friend.goal} days</p>
              </div>
              <button className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1"><Edit2 size={14} />Edit</button>
            </div>

            {/* Quick Check-in */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-medium text-gray-600 mb-3">Quick Check-in</h3>
              <div className="grid grid-cols-3 gap-3">
                <button onClick={() => handleAction('call')} className="bg-gray-50 rounded-xl py-5 flex flex-col items-center gap-2 hover:bg-emerald-50 hover:ring-1 hover:ring-emerald-200 transition">
                  <Phone size={20} className="text-emerald-500" />
                  <span className="text-sm text-gray-700">Call</span>
                </button>
                <button onClick={() => handleAction('text')} className="bg-gray-50 rounded-xl py-5 flex flex-col items-center gap-2 hover:bg-blue-50 hover:ring-1 hover:ring-blue-200 transition">
                  <MessageCircle size={20} className="text-blue-500" />
                  <span className="text-sm text-gray-700">Text</span>
                </button>
                <button onClick={() => handleAction('video')} className="bg-gray-50 rounded-xl py-5 flex flex-col items-center gap-2 hover:bg-purple-50 hover:ring-1 hover:ring-purple-200 transition">
                  <Video size={20} className="text-purple-500" />
                  <span className="text-sm text-gray-700">Video</span>
                </button>
              </div>
            </div>

            {/* Recent Interactions */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-medium text-gray-600 mb-3">Recent Interactions</h3>
              {recentInteractions.length > 0 ? (
                recentInteractions.slice(0, 10).map((int) => (
                  <div key={int.id} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-none">
                    <div className="flex items-center gap-3">
                      <span className="text-base">{typeIcon(int.type)}</span>
                      <div>
                        <p className="text-sm font-medium capitalize text-gray-800">{int.type}</p>
                        <p className="text-xs text-gray-400">{int.note}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">{int.date}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-400 text-center py-6">No interactions yet. Use Quick Check-in above!</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {toast && <Toast message={toast.message} onClose={() => setToast(null)} />}
    </div>
  );
};

export default FriendDetails;
