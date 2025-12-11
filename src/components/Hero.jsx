const statusPalette = {
  success: 'badge-success',
  info: 'badge-info',
  warning: 'badge-warn',
  error: 'badge-danger',
}

function Hero({ user, alert, onPrimary, onSecondary }) {
  return (
    <header className="hero">
      <div>
        <div className="eyebrow">Account Manager</div>
        <h1>Manage your account in one clean, simple space.</h1>
        <p className="lede">Everything you need to register, sign in, and keep details current—nothing extra.</p>
        <div className="hero-actions">
          <button className="btn primary" onClick={onPrimary}>
            Start with registration
          </button>
          <button className="btn ghost" onClick={onSecondary}>
            I already have access
          </button>
        </div>
      </div>
      <div className="snapshot">
        <div className="snapshot-header">
          <span className="dot green" />
          <span className="dot amber" />
          <span className="dot blue" />
          <div className="tag">Live preview</div>
        </div>
        <div className="snapshot-body">
          <div className="snapshot-title">Preview</div>
          <div className="snapshot-name">{user.name}</div>
          <div className="snapshot-meta">
            <span>{user.role}</span>
            <span className="divider" />
            <span>{user.company}</span>
          </div>
          <div className="snapshot-footer">
            <div className={`badge ${statusPalette[alert.type]}`}>{alert.message}</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero

