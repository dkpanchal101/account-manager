import CardShell from './CardShell.jsx'

function LoginCard({ active, login, onChange, onSubmit, user }) {
  return (
    <CardShell
      step="2"
      kicker="Access"
      title="Login"
      emoji="🔐"
      active={active}
      body="Sign in with your details or the sample credentials."
    >
      <form className="stack" onSubmit={onSubmit}>
        <label>
          Email
          <input name="email" value={login.email} onChange={onChange} placeholder={user.email} type="email" />
        </label>
        <label>
          Password
          <input
            name="password"
            value={login.password}
            onChange={onChange}
            placeholder={user.password}
            type="password"
          />
        </label>
        <div className="hint">
          Sample credentials: {user.email} / {user.password}
        </div>
        <button type="submit" className="btn primary">
          Log in
        </button>
      </form>
    </CardShell>
  )
}

export default LoginCard

