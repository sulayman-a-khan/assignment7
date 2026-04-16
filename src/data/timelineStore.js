// Session-only store — data lives in memory only, clears on page reload
let sessionEvents = [];

export const getTimelineEvents = () => {
  return [...sessionEvents];
};

export const addTimelineEvent = (event) => {
  const newEvent = {
    ...event,
    id: Date.now() + Math.random(),
    date: new Date().toISOString().split('T')[0],
  };
  sessionEvents = [newEvent, ...sessionEvents];
  return newEvent;
};

export const clearTimeline = () => {
  sessionEvents = [];
};
