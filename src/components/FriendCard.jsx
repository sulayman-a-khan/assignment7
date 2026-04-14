import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  const statusConfig = {
    overdue: {
      bg: 'bg-red-500',
      text: 'Overdue',
      color: 'text-red-600'
    },
    'almost due': {
      bg: 'bg-amber-500',
      text: 'Almost Due',
      color: 'text-amber-600'
    },
    'on-track': {
      bg: 'bg-emerald-500',
      text: 'On Track',
      color: 'text-emerald-600'
    }
  };

  const config = statusConfig[friend.status];

  return (
    <Link to={`/friend/${friend.id}`} className="block group">
      <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

        {/* Circular Image Section - No status dot */}
        <div className="relative pt-8 px-6 flex justify-center">
          <img 
            src={friend.picture} 
            alt={friend.name} 
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Content */}
        <div className="px-6 pb-8 pt-4 text-center">
          <h3 className="font-semibold text-2xl text-gray-900 tracking-tight">
            {friend.name}
          </h3>
          
          <p className="text-gray-500 mt-1 text-[15px]">
            {friend.days_since_contact} days ago
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            {friend.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1.5 rounded-2xl font-medium transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Status Badge */}
          <div className={`mt-6 mx-auto inline-flex items-center gap-2 px-5 py-2 rounded-2xl text-sm font-semibold ${config.color} bg-gray-50 border border-gray-100`}>
            <div className={`w-2.5 h-2.5 rounded-full ${config.bg}`} />
            {config.text}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;