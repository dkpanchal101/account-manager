function Checklist() {
  return (
    <section className="checklist">
      <div>
        <p className="card-kicker">Interview brief</p>
        <h3>What this app covers</h3>
        <ul>
          <li>Registration page to capture a new account</li>
          <li>Login page to authenticate with saved credentials</li>
          <li>Profile page to view and edit account information</li>
        </ul>
      </div>
      <div>
        <p className="card-kicker">Pro tip</p>
        <h3>Keep it simple</h3>
        <p className="hint">Clear validation and obvious CTAs matter more than flashy UI.</p>
      </div>
      <div>
        <p className="card-kicker">Evaluation</p>
        <h3>What reviewers check</h3>
        <ul>
          <li>Functionality meets every requirement</li>
          <li>Code is organized into readable components</li>
          <li>Errors are handled gracefully</li>
          <li>Docs are concise and helpful</li>
        </ul>
      </div>
    </section>
  )
}

export default Checklist

