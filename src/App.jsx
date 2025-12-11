import { useMemo, useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx'
import RegistrationCard from './components/RegistrationCard.jsx'
import LoginCard from './components/LoginCard.jsx'
import ProfileCard from './components/ProfileCard.jsx'

const initialUser = {
  name: 'Avery Stone',
  email: 'avery@northwind.studio',
  password: 'Design#24',
  company: 'Northwind Studio',
  phone: '+1 (917) 555-0142',
  role: 'Product Lead',
  status: 'Active',
  bio: 'Shapes account experiences with thoughtful, secure design.',
}

const emptyRegistration = {
  name: '',
  email: '',
  password: '',
  company: '',
  phone: '',
  role: '',
}

const emptyLogin = {
  email: '',
  password: '',
}

const emptyProfile = {
  name: '',
  company: '',
  phone: '',
  role: '',
  bio: '',
  status: '',
}

function App() {
  const [user, setUser] = useState(initialUser)
  const [registered, setRegistered] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [registration, setRegistration] = useState(emptyRegistration)
  const [login, setLogin] = useState(emptyLogin)
  const [profile, setProfile] = useState(initialUser)
  const [alert, setAlert] = useState({ type: 'info', message: 'Start with registration or use the sample login.' })
  const [activeCard, setActiveCard] = useState('login')

  const completionScore = useMemo(() => {
    const fields = ['name', 'email', 'company', 'phone', 'role', 'status', 'bio']
    const filled = fields.filter((key) => profile[key]?.toString().trim()).length
    return Math.round((filled / fields.length) * 100)
  }, [profile])

  const setMessage = (type, message) => {
    setAlert({ type, message })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleRegister = (event) => {
    event.preventDefault()
    const trimmed = Object.fromEntries(Object.entries(registration).map(([k, v]) => [k, v.trim()]))

    if (!trimmed.name || !trimmed.email || !trimmed.password) {
      setMessage('warning', 'Please add a name, email, and password to register.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) {
      setMessage('warning', 'Enter a valid email address.')
      return
    }

    if (trimmed.password.length < 8) {
      setMessage('warning', 'Password must be at least 8 characters.')
      return
    }

    const newUser = {
      ...initialUser,
      ...trimmed,
      status: trimmed.status || 'Pending Activation',
      bio: trimmed.bio || 'Ready to personalize this account.',
    }

    setUser(newUser)
    setProfile({ ...emptyProfile, ...newUser })
    setRegistered(true)
    setRegistration(emptyRegistration)
    setMessage('success', 'Registration complete. You can now log in.')
    setActiveCard('login')
  }

  const handleLogin = (event) => {
    event.preventDefault()
    if (!registered) {
      setMessage('warning', 'Please register an account first.')
      setActiveCard('register')
      return
    }

    if (login.email.trim() === user.email && login.password === user.password) {
      setIsAuthenticated(true)
      setMessage('success', 'Welcome back. You are now signed in.')
      setProfile({ ...emptyProfile, ...user })
      setLogin(emptyLogin)
      setActiveCard('profile')
      return
    }

    setMessage('error', 'Invalid credentials. Please check email and password.')
  }

  const handleProfileUpdate = (event) => {
    event.preventDefault()
    if (!isAuthenticated) {
      setMessage('warning', 'Log in to update account details.')
      setActiveCard('login')
      return
    }

    const cleaned = Object.fromEntries(Object.entries(profile).map(([k, v]) => [k, v.toString().trim()]))
    if (!cleaned.name || !cleaned.email) {
      setMessage('warning', 'Name and email cannot be empty.')
      return
    }

    setUser((current) => ({ ...current, ...cleaned }))
    setProfile((current) => ({ ...current, ...cleaned }))
    setMessage('success', 'Profile saved. All changes are up to date.')
  }

  const handleInputChange = (setter) => (event) => {
    const { name, value } = event.target
    setter((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="page">
      <Hero
        user={user}
        alert={alert}
        onPrimary={() => setActiveCard('register')}
        onSecondary={() => setActiveCard('login')}
      />

      <section className="cards">
        <RegistrationCard
          active={activeCard === 'register'}
          registration={registration}
          onChange={handleInputChange(setRegistration)}
          onSubmit={handleRegister}
        />

        <LoginCard
          active={activeCard === 'login'}
          login={login}
          onChange={handleInputChange(setLogin)}
          onSubmit={handleLogin}
          user={user}
        />

        <ProfileCard
          active={activeCard === 'profile'}
          profile={profile}
          onChange={handleInputChange(setProfile)}
          onSubmit={handleProfileUpdate}
          isAuthenticated={isAuthenticated}
          completionScore={completionScore}
        />
      </section>

    </div>
  )
}

export default App
