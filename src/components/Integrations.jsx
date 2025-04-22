
function Integrations()
{
    return(
<div className="content-section" id="integrations-content" style={{ display: 'none' }}>
  <h2>Integrations</h2>
  <p>Connect with external systems, configure APIs, set up webhooks, and integrate with third-party services for seamless workflows.</p>

  <div className="cards" style={{ marginBottom: '30px' }}>
    <div className="card"><h3>API Integrations</h3><p>48</p><small>Active integrations with internal and external systems</small></div>
    <div className="card"><h3>Webhooks</h3><p>21</p><small>Configured for event-driven triggers</small></div>
    <div className="card"><h3>Third-Party Services</h3><p>32</p><small>Connected SaaS & infrastructure providers</small></div>
  </div>

  <div className="sections">
    <div className="panel">
      <h4>Popular Third-Party Integrations</h4>
      <ul>
        <li><strong>Slack:</strong> Real-time alert and notification integration</li>
        <li><strong>Jira:</strong> Issue tracking and automation workflows</li>
        <li><strong>GitHub:</strong> Repository and CI/CD automation</li>
        <li><strong>ServiceNow:</strong> ITSM and incident management linkage</li>
        <li><strong>PagerDuty:</strong> On-call scheduling and response automation</li>
      </ul>
    </div>
    <div className="panel">
      <h4>Recent API Events</h4>
      <table className="bordered-table" style={{ width: '100%' }}>
        <thead>
          <tr><th>Timestamp</th><th>Service</th><th>Endpoint</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td>2025-04-09 12:15</td><td>GitHub</td><td>/repos/push</td><td style={{ color: '#16c784' }}>200 OK</td></tr>
          <tr><td>2025-04-09 11:40</td><td>Slack</td><td>/alerts/send</td><td style={{ color: '#16c784' }}>200 OK</td></tr>
          <tr><td>2025-04-09 10:55</td><td>Jira</td><td>/issues/create</td><td style={{ color: '#f59e0b' }}>202 Accepted</td></tr>
          <tr><td>2025-04-09 10:12</td><td>PagerDuty</td><td>/incidents/trigger</td><td style={{ color: '#ef4444' }}>403 Forbidden</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    )
}

export default Integrations;