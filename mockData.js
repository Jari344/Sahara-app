// Fictional demo data for Saath — Betul, Madhya Pradesh prototype

export const AREAS = ['Kothi Bazaar', 'Civil Lines', 'Ganj', 'Vijay Nagar']

export const REQUEST_TYPES = [
  { id: 'visit', label: 'Visit & Talk', emoji: '🧓' },
  { id: 'grocery', label: 'Grocery Help', emoji: '🛒' },
  { id: 'household', label: 'Small Household Task', emoji: '🏠' },
  { id: 'checkin', label: 'Check-in Call', emoji: '📞' },
  { id: 'accompany', label: 'Accompany Me', emoji: '🚶' },
  { id: 'phone', label: 'Phone Help', emoji: '📱' },
  { id: 'other', label: 'Other', emoji: '✏️' },
]

export const DURATIONS = ['30 min', '1 hour', '2 hours']

export const ELDERLY_USERS = [
  { id: 'e1', name: 'Shanti Verma', area: 'Kothi Bazaar', age: 74 },
  { id: 'e2', name: 'Abdul Rahman', area: 'Civil Lines', age: 81 },
  { id: 'e3', name: 'Kamla Joshi', area: 'Ganj', age: 69 },
]

export const HELPERS = [
  {
    id: 'h1',
    name: 'Aarav Sharma',
    role: 'Student',
    area: 'Kothi Bazaar',
    rating: 4.9,
    completed: 18,
    about: 'College student from the local area, studying at Government PG College Betul.',
    skills: ['grocery', 'phone', 'visit', 'accompany'],
    availability: 'Mon–Fri, 4 PM – 8 PM',
    verified: { identity: true, phone: true, community: true },
    distanceKm: 0.8,
  },
  {
    id: 'h2',
    name: 'Riya Patel',
    role: 'Neighbor',
    area: 'Civil Lines',
    rating: 4.8,
    completed: 26,
    about: 'Homemaker and long-time resident of Civil Lines, happy to check in on elderly neighbors.',
    skills: ['visit', 'checkin', 'household'],
    availability: 'Weekdays, 10 AM – 1 PM',
    verified: { identity: true, phone: true, community: true },
    distanceKm: 1.2,
  },
  {
    id: 'h3',
    name: 'Sameer Khan',
    role: 'Retiree',
    area: 'Ganj',
    rating: 5.0,
    completed: 34,
    about: 'Retired schoolteacher who enjoys helping with errands and accompanying people to appointments.',
    skills: ['accompany', 'visit', 'checkin'],
    availability: 'Daily, 9 AM – 12 PM',
    verified: { identity: true, phone: true, community: true },
    distanceKm: 2.1,
  },
  {
    id: 'h4',
    name: 'Neha Jain',
    role: 'Part-time worker',
    area: 'Vijay Nagar',
    rating: 4.7,
    completed: 11,
    about: 'Works part-time at a local pharmacy, available most evenings for grocery and phone help.',
    skills: ['grocery', 'phone', 'household'],
    availability: 'Evenings, 5 PM – 9 PM',
    verified: { identity: true, phone: true, community: false },
    distanceKm: 1.6,
  },
]

export const SEED_REQUESTS = [
  {
    id: 'r1',
    type: 'visit',
    title: 'Visit Grandma',
    requesterId: 'e1',
    requesterName: 'Shanti Verma',
    date: 'Tuesday',
    time: '4:00 PM – 5:00 PM',
    duration: '1 hour',
    area: 'Kothi Bazaar',
    notes: 'Please just sit and chat with her for a bit, she gets lonely in the afternoons.',
    requestedBy: 'son/daughter',
    status: 'assigned',
    helperId: 'h1',
    createdAt: '2026-09-20T10:00:00',
    timeline: ['posted', 'assigned', 'notified'],
  },
  {
    id: 'r2',
    type: 'grocery',
    title: 'Grocery Help',
    requesterId: 'e3',
    requesterName: 'Kamla Joshi',
    date: 'Today',
    time: '5:00 PM',
    duration: '45 minutes',
    area: 'Ganj',
    notes: 'Mrs. Joshi needs help picking up groceries from the nearby market.',
    requestedBy: 'me',
    status: 'open',
    helperId: null,
    createdAt: '2026-09-23T09:00:00',
    timeline: ['posted'],
  },
  {
    id: 'r3',
    type: 'phone',
    title: 'Phone Help',
    requesterId: 'e2',
    requesterName: 'Abdul Rahman',
    date: 'Today',
    time: '6:30 PM',
    duration: '30 min',
    area: 'Civil Lines',
    notes: 'Needs help setting up video calling with family abroad.',
    requestedBy: 'me',
    status: 'open',
    helperId: null,
    createdAt: '2026-09-23T08:30:00',
    timeline: ['posted'],
  },
  {
    id: 'r4',
    type: 'checkin',
    title: 'Weekly Check-in Call',
    requesterId: 'e1',
    requesterName: 'Shanti Verma',
    date: 'Monday',
    time: '11:00 AM',
    duration: '30 min',
    area: 'Kothi Bazaar',
    notes: 'A short call to see how she is doing this week.',
    requestedBy: 'son/daughter',
    status: 'completed',
    helperId: 'h2',
    createdAt: '2026-09-15T11:00:00',
    timeline: ['posted', 'assigned', 'notified', 'in_progress', 'completed'],
    rating: 5,
    feedback: 'Very kind and punctual, mother enjoyed the call.',
  },
]

export const NOTIFICATIONS = [
  { id: 'n1', title: 'New helper assigned', body: 'Aarav accepted your request for Tuesday at 4 PM.', time: '2 hours ago', read: false },
  { id: 'n2', title: 'Request completed', body: 'Your check-in call request was completed.', time: 'Yesterday', read: true },
  { id: 'n3', title: 'Verification approved', body: 'Your helper account is now verified.', time: '3 days ago', read: true },
]

export const PENDING_VERIFICATION = [
  { id: 'p1', name: 'Vikram Rao', role: 'Helper', area: 'Vijay Nagar', status: 'pending', submitted: '2026-09-21' },
  { id: 'p2', name: 'Sunita Malviya', role: 'Helper', area: 'Ganj', status: 'pending', submitted: '2026-09-22' },
]

export const SAFETY_REPORTS = [
  { id: 's1', requestId: 'r4', reason: "Helper didn't arrive on time", area: 'Kothi Bazaar', status: 'resolved', date: '2026-09-18' },
]

export const ADMIN_STATS = { activeUsers: 24, openRequests: 8, verifiedHelpers: 16, completedHelps: 42 }

export const COMMUNITY_IMPACT = { familiesHelped: 12, verifiedHelpers: 27, completedRequests: 43, minutesOfSupport: 8400 }
