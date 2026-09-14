import { useAuth } from './context/AuthContext'
import AuthForm from './components/AuthForm'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-orange-400">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="mx-auto max-w-2xl px-6 py-10">
        {user ? <Dashboard /> : <AuthForm />}
      </main>
    </div>
  )
}

export default App

