
function Support(){

    return(
        <div className="content-section" id="support-center-content" >
        <h2>Support Center</h2>
        <p>Access help resources, manage support tickets, and engage with automated or human support for fast issue resolution.</p>
      
        <div className="cards" style={{ marginBottom: '30px' }}>
          <div className="card"><h3>Open Tickets</h3><p>14</p><small>Across all departments</small></div>
          <div className="card"><h3>Resolved This Month</h3><p>89</p><small>March 2025</small></div>
          <div className="card"><h3>Knowledge Base Articles</h3><p>152</p><small>Available for reference</small></div>
          <div className="card"><h3>Live Agents</h3><p>6</p><small>Currently Online</small></div>
        </div>
      
        <div className="sections">
          <div className="panel">
            <h4>Recent Tickets</h4>
            <table className="bordered-table" style={{ width: '100%' }}>
              <thead>
                <tr><th>ID</th><th>Subject</th><th>Priority</th><th>Status</th></tr>
              </thead>
              <tbody>
                <tr><td>#10234</td><td>Database latency issue</td><td style={{ color: '#ef4444' }}>High</td><td style={{ color: '#f59e0b' }}>In Progress</td></tr>
                <tr><td>#10212</td><td>VPN connection failed</td><td style={{ color: '#f59e0b' }}>Medium</td><td style={{ color: '#16c784' }}>Resolved</td></tr>
                <tr><td>#10199</td><td>Unable to launch instance</td><td style={{ color: '#facc15' }}>Low</td><td style={{ color: '#16c784' }}>Resolved</td></tr>
                <tr><td>#10187</td><td>UI glitch on metrics page</td><td style={{ color: '#facc15' }}>Low</td><td style={{ color: '#f59e0b' }}>Investigating</td></tr>
              </tbody>
            </table>
          </div>
          <div className="panel">
            <h4>Knowledge Base Categories</h4>
            <ul>
              <li><strong>Compute:</strong> VM provisioning, scaling, and rebooting</li>
              <li><strong>Networking:</strong> Firewall setup, VPN issues, DNS</li>
              <li><strong>Billing:</strong> Invoice management, credit usage</li>
              <li><strong>Storage:</strong> Backup, snapshot, replication guides</li>
              <li><strong>Access Control:</strong> MFA, RBAC, and SSO setup</li>
            </ul>
          </div>
        </div>
      
        <div className="sections">
          <div className="panel" style={{ flex: '1 1 100%' }}>
            <h4>AI Chatbot Support</h4>
            <p>Our AI assistant is available 24/7 to help you troubleshoot common issues or direct you to helpful resources.</p>
            <ul>
              <li><strong>Chatbot Status:</strong> Online</li>
              <li><strong>Average Resolution Time:</strong> 1.2 mins</li>
              <li><strong>Escalation Rate:</strong> 12%</li>
            </ul>
            <button className="action-btn" onClick={() => alert('Launching Chatbot...')}>Chat Now</button>
          </div>
        </div>
      </div>
    )
}

export default Support;