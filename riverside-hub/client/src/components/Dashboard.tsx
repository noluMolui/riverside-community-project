import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const upcomingEvents = [
  { id: 1, title: 'Community Clean-Up Day', date: '2026-09-20' },
  { id: 2, title: 'Riverside Farmers Market', date: '2026-09-27' },
  { id: 3, title: 'Neighborhood Book Swap', date: '2026-10-04' },
]

export default function Dashboard() {
  const { user } = useAuth()
  const [attending, setAttending] = useState<number[]>([])

  const username = user?.user_metadata?.username

  const toggleAttending = (eventId: number) => {
    setAttending((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId],
    )
  }

  return (
    <div className="space-y-6">
      <p className="text-orange-300">
        Welcome back, {username || user?.email}
      </p>

      <div className="rounded-lg border border-orange-500/40 bg-neutral-900 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-orange-400">Upcoming Events</h2>
          <span className="text-sm text-neutral-400">
            You're attending {attending.length} of {upcomingEvents.length}
          </span>
        </div>
        <ul className="space-y-2">
          {upcomingEvents.map((event) => {
            const isAttending = attending.includes(event.id)

            return (
              <li
                key={event.id}
                className="flex items-center justify-between border-b border-neutral-800 pb-2 text-sm"
              >
                <div>
                  <span>{event.title}</span>
                  <span className="ml-2 text-orange-300">{event.date}</span>
                </div>
                <button
                  type="button"
                  onClick={() => toggleAttending(event.id)}
                  className={
                    isAttending
                      ? 'rounded border border-orange-500 px-3 py-1 text-xs font-semibold text-orange-400'
                      : 'rounded bg-orange-500 px-3 py-1 text-xs font-semibold text-black transition hover:bg-orange-400'
                  }
                >
                  {isAttending ? 'Attending ✓' : 'RSVP'}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
