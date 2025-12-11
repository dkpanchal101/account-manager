import CardShell from './CardShell.jsx'

function RegistrationCard({ active, registration, onChange, onSubmit }) {
  return (
    <CardShell
      step="1"
      kicker="Create"
      title="Registration"
      emoji="🧭"
      active={active}
      body="Add the essentials to set up an account."
    >
      <form className="stack" onSubmit={onSubmit}>
        <div className="grid two">
          <label>
            Full name*
            <input name="name" value={registration.name} onChange={onChange} placeholder="Jordan Rivers" />
          </label>
          <label>
            Email*
            <input
              name="email"
              value={registration.email}
              onChange={onChange}
              placeholder="jordan@studio.com"
              type="email"
            />
          </label>
        </div>
        <div className="grid two">
          <label>
            Password*
            <input
              name="password"
              value={registration.password}
              onChange={onChange}
              placeholder="At least 8 characters"
              type="password"
            />
          </label>
          <label>
            Role
            <input name="role" value={registration.role} onChange={onChange} placeholder="Account Strategist" />
          </label>
        </div>
        <div className="grid two">
          <label>
            Company
            <input name="company" value={registration.company} onChange={onChange} placeholder="Brightline Co." />
          </label>
          <label>
            Phone
            <input name="phone" value={registration.phone} onChange={onChange} placeholder="+1 (555) 000-1111" />
          </label>
        </div>
        <button type="submit" className="btn primary">
          Create account
        </button>
      </form>
    </CardShell>
  )
}

export default RegistrationCard

