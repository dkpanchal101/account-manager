function CardShell({ step, title, kicker, emoji, body, active, children }) {
  return (
    <article className={`card ${active ? 'card-active' : ''}`}>
      <div className="card-label">Step {step}</div>
      <div className="card-header">
        <div>
          <p className="card-kicker">{kicker}</p>
          <h2>{title}</h2>
        </div>
        <span className="emoji" aria-hidden="true">
          {emoji}
        </span>
      </div>
      <p className="card-body">{body}</p>
      {children}
    </article>
  )
}

export default CardShell

