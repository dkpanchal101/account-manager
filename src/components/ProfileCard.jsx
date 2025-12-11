import CardShell from './CardShell.jsx'

function ProfileCard({ active, profile, onChange, onSubmit, isAuthenticated, completionScore }) {
  return (
    <CardShell
      step="3"
      kicker="Manage"
      title="Account & Profile"
      emoji="🎨"
      active={active}
      body="Keep contact info, role, and status up to date."
    >
      <form className="stack" onSubmit={onSubmit}>
        <div className="progress">
          <div className="progress-fill" style={{ width: `${completionScore}%` }} />
          <div className="progress-label">{completionScore}% complete</div>
        </div>
        <div className="grid two">
          <label>
            Full name
            <input name="name" value={profile.name} onChange={onChange} placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" value={profile.email} onChange={onChange} placeholder="you@company.com" type="email" />
          </label>
        </div>
        <div className="grid two">
          <label>
            Role
            <input name="role" value={profile.role} onChange={onChange} placeholder="Account Manager" />
          </label>
          <label>
            Company
            <input name="company" value={profile.company} onChange={onChange} placeholder="Acme Corp" />
          </label>
        </div>
        <div className="grid two">
          <label>
            Phone
            <input name="phone" value={profile.phone} onChange={onChange} placeholder="+1 (555) 123-4567" />
          </label>
          <label>
            Status
            <select name="status" value={profile.status} onChange={onChange}>
              <option value="">Select status</option>
              <option value="Active">Active</option>
              <option value="Pending Activation">Pending Activation</option>
              <option value="Suspended">Suspended</option>
              <option value="Closed">Closed</option>
            </select>
          </label>
        </div>
        <label>
          Bio / Notes
          <textarea
            name="bio"
            rows="3"
            value={profile.bio}
            onChange={onChange}
            placeholder="What makes this account unique?"
          />
        </label>
        <button type="submit" className="btn primary" disabled={!isAuthenticated}>
          Save changes
        </button>
        {!isAuthenticated && <div className="hint">Log in to unlock editing.</div>}
      </form>
    </CardShell>
  )
}

export default ProfileCard

