import { useAuth } from '../context/AuthContext'

const upcomingEvents = [
  { id: 1, title: 'Community Clean-Up Day', date: '2026-09-20' },
  { id: 2, title: 'Riverside Farmers Market', date: '2026-09-27' },
  { id: 3, title: 'Neighborhood Book Swap', date: '2026-10-04' },
]

export default function Dashboard() {
  const { user, signOut } = useAuth()

  return (
    <div className="dashboard">
      <p>Logged in as {user?.email}</p>

      <h2>Upcoming Events</h2>
      <ul>
        {upcomingEvents.map((event) => (
          <li key={event.id}>
            {event.title} — {event.date}
          </li>
        ))}
      </ul>

      <button type="button" onClick={signOut}>
        Log Out
      </button>
    </div>
  )
}
