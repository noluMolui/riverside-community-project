import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    const { error } = isSignUp
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
    } else if (isSignUp) {
      setMessage('Check your email to confirm your account')
    }

    setLoading(false)
  }

  return (
    <div className="mx-auto max-w-sm rounded-lg border border-orange-500/40 bg-neutral-900 p-8">
      <h2 className="mb-6 text-center text-xl font-semibold text-orange-400">
        {isSignUp ? 'Sign Up' : 'Log In'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded border border-neutral-700 bg-black px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded border border-neutral-700 bg-black px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-orange-500 py-2 font-semibold text-black transition hover:bg-orange-400 disabled:opacity-50"
        >
          {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Log In'}
        </button>
      </form>

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
      {message && <p className="mt-4 text-sm text-green-400">{message}</p>}

      <button
        type="button"
        onClick={() => setIsSignUp(!isSignUp)}
        className="mt-4 w-full text-center text-sm text-orange-300 hover:underline"
      >
        {isSignUp ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
      </button>
    </div>
  )
}
