export const friends = [
  {
    id: 1,
    name: "Rahim Khan",
    picture: "https://picsum.photos/id/64/400/400",
    email: "rahim.khan@email.com",
    days_since_contact: 5,
    status: "on-track",
    tags: ["Family", "Cricket"],
    bio: "My cousin from Sylhet. Passionate about cricket and Bangladeshi food.",
    goal: 10,
    next_due_date: "2026-04-18"
  },
  {
    id: 2,
    name: "Nadia Ahmed",
    picture: "https://picsum.photos/id/65/400/400",
    email: "nadia.ahmed@email.com",
    days_since_contact: 22,
    status: "overdue",
    tags: ["Best Friend", "University"],
    bio: "My closest friend from university days. Now working in marketing.",
    goal: 30,
    next_due_date: "2026-04-10"
  },
  {
    id: 3,
    name: "Sabbir Hossain",
    picture: "https://picsum.photos/id/66/400/400",
    email: "sabbir.h@email.com",
    days_since_contact: 8,
    status: "almost due",
    tags: ["Neighbor", "Childhood"],
    bio: "Grew up together. Still lives in the same neighborhood.",
    goal: 15,
    next_due_date: "2026-04-16"
  },
  {
    id: 4,
    name: "Priya Das",
    picture: "https://picsum.photos/id/67/400/400",
    email: "priya.das@email.com",
    days_since_contact: 3,
    status: "on-track",
    tags: ["School", "Sister-like"],
    bio: "Feels like a sister. We studied in the same school in Gazipur.",
    goal: 7,
    next_due_date: "2026-04-15"
  },
  {
    id: 5,
    name: "Tamim Iqbal",
    picture: "https://picsum.photos/id/68/400/400",
    email: "tamim.iqbal@email.com",
    days_since_contact: 35,
    status: "overdue",
    tags: ["Colleague"],
    bio: "Former colleague from my first job in Dhaka. Very knowledgeable person.",
    goal: 21,
    next_due_date: "2026-03-25"
  },
  {
    id: 6,
    name: "Farhana Islam",
    picture: "https://picsum.photos/id/69/400/400",
    email: "farhana.islam@email.com",
    days_since_contact: 12,
    status: "almost due",
    tags: ["College", "Study Group"],
    bio: "We were in the same study group during graduation.",
    goal: 14,
    next_due_date: "2026-04-20"
  }
];

export const interactions = [
  { id: 101, friendId: 1, type: "call", date: "2026-04-08", note: "Call with Rahim Khan" },
  { id: 102, friendId: 2, type: "text", date: "2026-04-05", note: "Text with Nadia Ahmed" },
  { id: 103, friendId: 3, type: "video", date: "2026-04-01", note: "Video with Sabbir Hossain" },
  { id: 104, friendId: 4, type: "call", date: "2026-04-10", note: "Call with Priya Das" },
];