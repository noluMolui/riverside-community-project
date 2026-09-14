import { useAuth } from '../context/AuthContext'

const upcomingEvents = [
  { id: 1, title: 'Community Clean-Up Day', date: '2026-09-20' },
  { id: 2, title: 'Riverside Farmers Market', date: '2026-09-27' },
  { id: 3, title: 'Neighborhood Book Swap', date: '2026-10-04' },
]

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      <p className="text-orange-300">Logged in as {user?.email}</p>

      <div className="rounded-lg border border-orange-500/40 bg-neutral-900 p-6">
        <h2 className="mb-4 text-lg font-semibold text-orange-400">Upcoming Events</h2>
        <ul className="space-y-2">
          {upcomingEvents.map((event) => (
            <li
              key={event.id}
              className="flex justify-between border-b border-neutral-800 pb-2 text-sm"
            >
              <span>{event.title}</span>
              <span className="text-orange-300">{event.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
