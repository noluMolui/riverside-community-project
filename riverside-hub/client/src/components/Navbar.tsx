import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, signOut } = useAuth()

  return (
    <nav className="flex items-center justify-between border-b border-orange-500 bg-black px-6 py-4">
      <h1 className="text-xl font-bold text-orange-500">Riverside Community Hub</h1>
      {user && (
        <button
          type="button"
          onClick={signOut}
          className="rounded bg-orange-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-orange-400"
        >
          Log Out
        </button>
      )}
    </nav>
  )
}
