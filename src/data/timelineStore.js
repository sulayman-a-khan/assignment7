const STORAGE_KEY = 'timeline_interactions';

export const getTimelineEvents = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const addTimelineEvent = (event) => {
  const events = getTimelineEvents();
  const newEvent = {
    ...event,
    id: Date.now(),
    date: new Date().toISOString().split('T')[0],
  };
  const updated = [newEvent, ...events];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return newEvent;
};

export const clearTimeline = () => {
  localStorage.removeItem(STORAGE_KEY);
};
