import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  const statusConfig = {
    overdue: {
      label: 'Overdue',
      pill: 'bg-red-500 text-white',
    },
    'almost due': {
      label: 'Almost Due',
      pill: 'bg-amber-400 text-white',
    },
    'on-track': {
      label: 'On-Track',
      pill: 'bg-emerald-700 text-white',
    },
  };

  const config = statusConfig[friend.status];

  return (
    <Link to={`/friend/${friend.id}`} className="block group">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center px-5 pt-7 pb-6 h-full">

        {/* Avatar */}
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-24 h-24 rounded-full object-cover shadow-sm"
        />

        {/* Name */}
        <h3 className="mt-4 font-semibold text-[17px] text-gray-900 leading-tight">
          {friend.name}
        </h3>

        {/* Days ago */}
        <p className="text-gray-400 text-[13px] mt-1">
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3 justify-center">
          {friend.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[11px] font-semibold uppercase tracking-wide text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status badge */}
        <div className={`mt-4 px-4 py-1 rounded-full text-[12px] font-semibold ${config.pill}`}>
          {config.label}
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
