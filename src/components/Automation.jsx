function Automation()
{
    function showAutomationModal() {
        document.getElementById('automationModal').style.display = 'flex';
      }
  
      function closeAutomationModal() {
        document.getElementById('automationModal').style.display = 'none';
      }
  
      document.addEventListener('click', function(event) {
        const modal = document.getElementById('automationModal');
        if (modal && event.target === modal) {
          closeAutomationModal();
        }
      });
    return(

        <div className="content-section" id="automation-center-content" style={{ display: 'none' }}>
  <h2>Automation Center</h2>
  <p>Welcome to the Automation Center. Here you can orchestrate and manage various automation tools and workflows.</p>
  <div style={{ marginBottom: '20px', textAlign: 'right' }}>
    <button className="action-btn" onClick={showAutomationModal}>
      <i className="fas fa-plus" style={{ marginRight: '6px' }}></i> Create New Automation
    </button>
  </div>

  <div id="automationModal" style={{ display: 'none', position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: '1000', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ backgroundColor: '#1e2127', padding: '30px', borderRadius: '10px', width: '400px', textAlign: 'center' }}>
      <h3>Select Automation Type</h3>
      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <button className="action-btn" style={{ backgroundColor: '#3b82f6' }}>Scheduled Task</button>
        <button className="action-btn" style={{ backgroundColor: '#10b981' }}>Ansible Playbook</button>
        <button className="action-btn" style={{ backgroundColor: '#f59e0b' }}>Terraform Script</button>
      </div>
      <button onClick={closeAutomationModal} style={{ marginTop: '20px', backgroundColor: '#ef4444' }} className="action-btn">Cancel</button>
    </div>
  </div>
  <div className="sections">
    <div className="panel">
      <h4>Scheduled Tasks</h4>
      <ul>
        <li><strong>Daily Backup:</strong> Executes every night at 2:00 AM</li>
        <li><strong>Weekly Report Generation:</strong> Runs every Monday at 6:00 AM</li>
        <li><strong>Log Rotation:</strong> Runs every 6 hours</li>
      </ul>
    </div>
    <div className="panel">
      <h4>Ansible Playbooks</h4>
      <ul>
        <li><strong>Provision VMs:</strong> Automates VM setup and configuration</li>
        <li><strong>Patch Deployment:</strong> Applies security updates to servers</li>
        <li><strong>App Deployment:</strong> Deploys latest application builds</li>
      </ul>
    </div>
  </div>

  <div className="sections">
    <div className="panel">
      <h4>Terraform Infrastructure</h4>
      <ul>
        <li><strong>VPC Setup:</strong> Define and launch isolated cloud networks</li>
        <li><strong>Instance Scaling:</strong> Automate scaling of compute instances</li>
        <li><strong>DNS Configuration:</strong> Manage DNS zones and records</li>
      </ul>
    </div>
    <div className="panel">
      <h4>Recent Automation Logs</h4>
      <table className="bordered-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ textAlign: 'left' }}>
          <tr>
            <th style={{ padding: '8px' }}>Time</th>
            <th style={{ padding: '8px' }}>Automation</th>
            <th style={{ padding: '8px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{ padding: '8px' }}>2025-04-09 10:12</td><td>Provision VMs</td><td style={{ color: '#16c784' }}>Success</td></tr>
          <tr><td style={{ padding: '8px' }}>2025-04-09 09:00</td><td>Daily Backup</td><td style={{ color: '#16c784' }}>Success</td></tr>
          <tr><td style={{ padding: '8px' }}>2025-04-08 15:30</td><td>Patch Deployment</td><td style={{ color: '#f59e0b' }}>Warning</td></tr>
          <tr><td style={{ padding: '8px' }}>2025-04-08 10:00</td><td>Log Rotation</td><td style={{ color: '#ef4444' }}>Failed</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    )
}
export default Automation;