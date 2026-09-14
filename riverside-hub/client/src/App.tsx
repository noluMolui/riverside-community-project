import { useAuth } from './context/AuthContext'
import AuthForm from './components/AuthForm'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <section id="center">
      <h1>Riverside Community Hub</h1>

      {user ? <Dashboard /> : <AuthForm />}
    </section>
  )
}

export default App

