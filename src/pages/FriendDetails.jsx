import { useParams } from 'react-router-dom';
import { friends, interactions } from '../data/friends';
import { Phone, MessageCircle, Video, Edit2 } from 'lucide-react';
import { useState } from 'react';
import Toast from '../components/Toast';

const FriendDetails = () => {
  const { id } = useParams();
  const friend = friends.find(f => f.id === parseInt(id));
  const [toast, setToast] = useState(null);

  if (!friend) {
    return (
      <div className="text-center py-20 text-lg text-gray-400">
        Friend not found
      </div>
    );
  }

  const handleAction = (type) => {
    setToast({
      message: `${type.charAt(0).toUpperCase() + type.slice(1)} logged successfully!`,
      type: "success"
    });
  };

  const statusConfig = {
    overdue: {
      text: 'Overdue',
      color: 'text-red-600 bg-red-100'
    },
    'almost due': {
      text: 'Almost Due',
      color: 'text-amber-600 bg-amber-100'
    },
    'on-track': {
      text: 'On Track',
      color: 'text-emerald-600 bg-emerald-100'
    }
  };

  const config = statusConfig[friend.status];

  return (
    <div className="bg-[#f3f5f4] py-10">

      <div className="max-w-5xl mx-auto px-4">

        <div className="grid lg:grid-cols-12 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-5 space-y-4">

            {/* Profile */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <div className="flex flex-col items-center text-center">

                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />

                <h1 className="text-xl font-semibold text-gray-900">
                  {friend.name}
                </h1>

                {/* Status */}
                <div className={`mt-3 px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
                  {config.text}
                </div>

                <p className="mt-4 text-sm text-gray-500 italic">
                  {friend.bio}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <button className="w-full px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-3">
                ⏰ Snooze 2 Weeks
              </button>
              <button className="w-full px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-3 border-t">
                📦 Archive
              </button>
              <button className="w-full px-6 py-3 text-sm text-red-500 hover:bg-red-50 flex items-center justify-center gap-3 border-t">
                🗑️ Delete
              </button>
            </div>

          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 space-y-4">

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">

              <div className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-400">Days Since Contact</p>
                <p className="text-2xl font-semibold mt-1 text-gray-900">
                  {friend.days_since_contact}
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-400">Goal (Days)</p>
                <p className="text-2xl font-semibold mt-1 text-gray-900">
                  {friend.goal}
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 text-center border border-gray-100 shadow-sm">
                <p className="text-xs text-gray-400">Next Due</p>
                <p className="text-lg font-semibold mt-1 text-emerald-600">
                  {friend.next_due_date}
                </p>
              </div>

            </div>

            {/* Goal */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-400">Relationship Goal</p>
                <p className="text-base font-medium text-gray-900 mt-1">
                  Connect every {friend.goal} days
                </p>
              </div>

              <button className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1">
                <Edit2 size={14} />
                Edit
              </button>
            </div>

            {/* Quick Check-in */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-medium text-gray-600 mb-3">
                Quick Check-in
              </h3>

              <div className="grid grid-cols-3 gap-4">

                <button
                  onClick={() => handleAction('call')}
                  className="bg-gray-50 rounded-xl py-6 flex flex-col items-center gap-2 hover:bg-gray-100 transition"
                >
                  <Phone size={22} className="text-emerald-500" />
                  <span className="text-sm text-gray-700">Call</span>
                </button>

                <button
                  onClick={() => handleAction('text')}
                  className="bg-gray-50 rounded-xl py-6 flex flex-col items-center gap-2 hover:bg-gray-100 transition"
                >
                  <MessageCircle size={22} className="text-blue-500" />
                  <span className="text-sm text-gray-700">Text</span>
                </button>

                <button
                  onClick={() => handleAction('video')}
                  className="bg-gray-50 rounded-xl py-6 flex flex-col items-center gap-2 hover:bg-gray-100 transition"
                >
                  <Video size={22} className="text-purple-500" />
                  <span className="text-sm text-gray-700">Video</span>
                </button>

              </div>
            </div>

            {/* Interactions */}
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-medium text-gray-600 mb-3">
                Recent Interactions
              </h3>

              {interactions.filter(i => i.friendId === friend.id).length > 0 ? (
                interactions
                  .filter(i => i.friendId === friend.id)
                  .map((int) => (
                    <div
                      key={int.id}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-none"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-base">
                          {int.type === 'call'
                            ? '📞'
                            : int.type === 'text'
                            ? '💬'
                            : '🎥'}
                        </span>

                        <div>
                          <p className="text-sm font-medium capitalize text-gray-800">
                            {int.type}
                          </p>
                          <p className="text-xs text-gray-400">
                            {int.note}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs text-gray-400">
                        {int.date}
                      </span>
                    </div>
                  ))
              ) : (
                <p className="text-sm text-gray-400 text-center py-6">
                  No recent interactions.
                </p>
              )}
            </div>

          </div>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

    </div>
  );
};

export default FriendDetails;