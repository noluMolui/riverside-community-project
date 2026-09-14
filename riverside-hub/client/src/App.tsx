import { useAuth } from './context/AuthContext'
import AuthForm from './components/AuthForm'
import './App.css'

function App() {
  const { user, loading, signOut } = useAuth()

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <section id="center">
      <h1>Riverside Community Hub</h1>

      {user ? (
        <div>
          <p>Logged in as {user.email}</p>
          <button type="button" onClick={signOut}>
            Log Out
          </button>
        </div>
      ) : (
        <AuthForm />
      )}
    </section>
  )
}

export default App

