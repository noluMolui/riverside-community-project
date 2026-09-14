import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

type Event = {
  id: number
  title: string
  date: string
  time: string
}

const initialEvents: Event[] = [
  { id: 1, title: 'Community Clean-Up Day', date: '2026-09-20', time: '09:00' },
  { id: 2, title: 'Riverside Farmers Market', date: '2026-09-27', time: '10:00' },
  { id: 3, title: 'Neighborhood Book Swap', date: '2026-10-04', time: '14:00' },
]

export default function Dashboard() {
  const { user } = useAuth()
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const [attending, setAttending] = useState<number[]>([])
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const username = user?.user_metadata?.username

  const toggleAttending = (eventId: number) => {
    setAttending((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId],
    )
  }

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !date) return

    const newEvent: Event = {
      id: Date.now(),
      title: title.trim(),
      date,
      time,
    }

    setEvents((prev) => [...prev, newEvent])
    setTitle('')
    setDate('')
    setTime('')
  }

  return (
    <div className="space-y-6">
      <p className="text-orange-300">
        Welcome back, {username || user?.email}
      </p>

      <form
        onSubmit={handleAddEvent}
        className="flex flex-wrap items-end gap-3 rounded-lg border border-orange-500/40 bg-neutral-900 p-6"
      >
        <div className="flex-1 min-w-[160px]">
          <label className="mb-1 block text-xs text-neutral-400">Event title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Park Yoga Session"
            className="w-full rounded border border-neutral-700 bg-black px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-neutral-400">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="rounded border border-neutral-700 bg-black px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-neutral-400">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="rounded border border-neutral-700 bg-black px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer rounded bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-400"
        >
          Add Event
        </button>
      </form>

      <div className="rounded-lg border border-orange-500/40 bg-neutral-900 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-orange-400">Upcoming Events</h2>
          <span className="text-sm text-neutral-400">
            You're attending {attending.length} of {events.length}
          </span>
        </div>
        <ul className="space-y-2">
          {events.map((event) => {
            const isAttending = attending.includes(event.id)

            return (
              <li
                key={event.id}
                className="flex items-center justify-between border-b border-neutral-800 pb-2 text-sm"
              >
                <div>
                  <span>{event.title}</span>
                  <span className="ml-2 text-orange-300">
                    {event.date}
                    {event.time && ` at ${event.time}`}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => toggleAttending(event.id)}
                  className={
                    isAttending
                      ? 'cursor-pointer rounded border border-orange-500 px-3 py-1 text-xs font-semibold text-orange-400'
                      : 'cursor-pointer rounded bg-orange-500 px-3 py-1 text-xs font-semibold text-black transition hover:bg-orange-400'
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

