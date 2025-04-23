import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';

const Sidebar = () => {
  const toggleHeader = (headerName) => {
    // Only allow toggling when sidebar is expanded or during hover
    if (!collapsed || document.querySelector('.sidebar.collapsed:hover')) {
      setActiveHeaders(prev => ({
        ...prev,
        [headerName]: !prev[headerName]
      }));
    }
  };
  const [collapsed, setCollapsed] = useState(false);
  const [activeHeaders, setActiveHeaders] = useState({});
  const sidebarRef = useRef(null);
  useEffect(() => {
    if (sidebarRef.current && !collapsed) {
      sidebarRef.current.scrollTop = 0;
    }
  }, [collapsed]);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  
  
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`} ref={sidebarRef}>

      <div className="logo">
        <img src="./images/tcs_logo.png" alt="TCS Logo" className="expanded-logo" />
        <img src="./images/tcs_logo_small.png" alt="Collapsed Logo" className="collapsed-logo" style={{ display: 'none' }} />
      </div>

      <Link to='/' style={{textDecoration:'none',color:'inherit'}}>
        <h2><i className="fas fa-tachometer-alt"></i> <span>Overview</span></h2>
      </Link>

      <Link to='resources' style={{textDecoration:'none',color:'inherit'}} onClick={() => toggleHeader('Resources')}>
        <h2 className={activeHeaders['Resources'] ? 'active' : ''}>
          <i className="fas fa-server"></i> <span>Resources</span>
        </h2>
      </Link>
      <ul style={{ display: activeHeaders['Resources'] ? 'block' : 'none' }}>
        <li className={activeHeaders['Compute Management'] ? 'active' : ''}>
          <div onClick={() => toggleHeader('Compute Management')}>
            <i className="fas fa-microchip"></i> Compute Management
          </div>
          <ul style={{ display: activeHeaders['Compute Management'] ? 'block' : 'none' }}>
            <li><i className="fas fa-server"></i> x86</li>
            <li><i className="fas fa-server"></i> AIX</li>
            <li><i className="fas fa-server"></i> Solaris</li>
            <li><i className="fas fa-laptop"></i> MAC</li>
          </ul>
        </li>
        <li className={activeHeaders['Storage Management'] ? 'active' : ''}>
          <div onClick={() => toggleHeader('Storage Management')}>
            <i className="fas fa-database"></i> Storage Management
          </div>
          <ul style={{ display: activeHeaders['Storage Management'] ? 'block' : 'none' }}>
            <li><i className="fas fa-hdd"></i> Block Storage</li>
            <li><i className="fas fa-database"></i> Object Storage</li>
            <li><i className="fas fa-box"></i> S3 buckets</li>
            <li><i className="fas fa-folder"></i> NAS Storage</li>
          </ul>
        </li>
        <li className={activeHeaders['Network Management'] ? 'active' : ''}>
          <div onClick={() => toggleHeader('Network Management')}>
            <i className="fas fa-network-wired"></i> Network Management
          </div>
          <ul style={{ display: activeHeaders['Network Management'] ? 'block' : 'none' }}>
            <li><i className="fas fa-shield-alt"></i> Security Groups</li>
            <li><i className="fas fa-project-diagram"></i> VLANs</li>
            <li><i className="fas fa-random"></i> LBs</li>
            <li><i className="fas fa-fire"></i> Firewalls</li>
          </ul>
        </li>
        <li className={activeHeaders['Platform as a Services'] ? 'active' : ''}>
          <div onClick={() => toggleHeader('Platform as a Services')}>
            <i className="fas fa-cubes"></i> Platform as a Services
          </div>
          <ul style={{ display: activeHeaders['Platform as a Services'] ? 'block' : 'none' }}>
            <li><i className="fas fa-network-wired"></i> Kubernetes</li>
            <li><i className="fas fa-database"></i> DBaaS</li>
          </ul>
        </li>
        <li className={activeHeaders['NextGen Computing'] ? 'active' : ''}>
          <div onClick={() => toggleHeader('NextGen Computing')}>
            <i className="fas fa-rocket"></i> NextGen Computing
          </div>
          <ul style={{ display: activeHeaders['NextGen Computing'] ? 'block' : 'none' }}>
            <li><i className="fas fa-bolt"></i> Serverless</li>
            <li><i className="fas fa-edge"></i> Edge Computing</li>
            <li><i className="fas fa-microchip"></i> IoT</li>
          </ul>
        </li>
      </ul>

      {/* Other menu sections follow the same pattern */}
      <Link to='automation' style={{textDecoration:'none',color:'inherit'}} onClick={() => toggleHeader('Automation Center')}>
        <h2 className={activeHeaders['Automation Center'] ? 'active' : ''}>
          <i className="fas fa-robot"></i> <span>Automation Center</span>
        </h2>
      </Link>
      <ul style={{ display: activeHeaders['Automation Center'] ? 'block' : 'none' }}>
        <li><i className="fas fa-calendar-alt"></i> Task Scheduler</li>
        <li><i className="fas fa-cogs"></i> Ansible</li>
        <li><i className="fas fa-code-branch"></i> Terraform</li>
      </ul>

      <Link to='aiml' style={{textDecoration:'none',color:'inherit'}} onClick={() => toggleHeader('AI/ML Hub')}>
        <h2 className={activeHeaders['AI/ML Hub'] ? 'active' : ''}>
          <i className="fas fa-brain"></i> <span>AI/ML Hub</span>
        </h2>
      </Link>
      <ul style={{ display: activeHeaders['AI/ML Hub'] ? 'block' : 'none' }}>
        <li><i className="fas fa-cube"></i> Models</li>
        <li><i className="fas fa-brain"></i> Training</li>
        <li><i className="fas fa-play-circle"></i> Inference</li>
        <li><i className="fas fa-project-diagram"></i> Pipelines</li>
        <li><i className="fas fa-database"></i> Data Management</li>
      </ul>

      {/* Continue with other sections following the same pattern */}

      <Link to='observability' style={{textDecoration:'none',color:'inherit'}} onClick={() => toggleHeader('Observability')}>
  <h2 className={activeHeaders['Observability'] ? 'active' : ''}>
    <i className="fas fa-eye"></i> <span>Observability</span>
  </h2>
</Link>
<ul style={{ display: activeHeaders['Observability'] ? 'block' : 'none' }}>
  <li><i className="fas fa-file-alt"></i> Logs</li>
  <li><i className="fas fa-bell"></i> Alerts</li>
  <li><i className="fas fa-eye"></i> Anomaly Detection</li>
  <li><i className="fas fa-chart-line"></i> Metrics</li>
  <li><i className="fas fa-route"></i> Tracing</li>
  <li><i className="fas fa-clipboard-list"></i> Audit Logs</li>
  <li><i className="fas fa-tachometer-alt"></i> Performance Monitoring</li>
  <li><i className="fas fa-layer-group"></i> Capacity Planning</li>
</ul>

<Link to='marketplace' style={{textDecoration:'none',color:'inherit'}} onClick={() => toggleHeader('Marketplace')}>
  <h2 className={activeHeaders['Marketplace'] ? 'active' : ''}>
    <i className="fas fa-store"></i> <span>Marketplace</span>
  </h2>
</Link>
<ul style={{ display: activeHeaders['Marketplace'] ? 'block' : 'none' }}>
  <li><i className="fas fa-th-large"></i> Apps</li>
  <li><i className="fas fa-cogs"></i> Services</li>
  <li><i className="fas fa-clone"></i> Templates</li>
</ul>

<Link to='compliance' style={{textDecoration:'none',color:'inherit'}} onClick={() => toggleHeader('Compliance Center')}>
  <h2 className={activeHeaders['Compliance Center'] ? 'active' : ''}>
    <i className="fas fa-shield-alt"></i> <span>Compliance Center</span>
  </h2>
</Link>
<ul style={{ display: activeHeaders['Compliance Center'] ? 'block' : 'none' }}>
  <li><i className="fas fa-file-contract"></i> Compliance Reports</li>
  <li><i className="fas fa-clipboard-check"></i> Audit Reports</li>
  <li><i className="fas fa-university"></i> Policy Management</li>
  <li><i className="fas fa-exclamation-triangle"></i> Risk Assessment</li>
</ul>

<Link to='iam' style={{textDecoration:'none',color:'inherit'}} onClick={() => toggleHeader('IAM')}>
  <h2 className={activeHeaders['IAM'] ? 'active' : ''}>
    <i className="fas fa-users-cog"></i> <span>IAM</span>
  </h2>
</Link>
<ul style={{ display: activeHeaders['IAM'] ? 'block' : 'none' }}>
  <li><i className="fas fa-user"></i> User Management</li>
  <li><i className="fas fa-user-shield"></i> RBAC</li>
  <li><i className="fas fa-sign-in-alt"></i> Single Sign-On</li>
  <li><i className="fas fa-key"></i> Multi-Factor Setup</li>
  <li><i className="fas fa-users"></i> Identity Federation</li>
  <li><i className="fas fa-code"></i> API Key Management</li>
</ul>

<Link to='backup' style={{textDecoration:'none',color:'inherit'}} onClick={() => toggleHeader('Backup & DR')}>
  <h2 className={activeHeaders['Backup & DR'] ? 'active' : ''}>
    <i className="fas fa-sync-alt"></i> <span>Backup & DR</span>
  </h2>
</Link>
<ul style={{ display: activeHeaders['Backup & DR'] ? 'block' : 'none' }}>
  <li><i className="fas fa-save"></i> Backup</li>
  <li><i className="fas fa-undo-alt"></i> Restore</li>
  <li><i className="fas fa-clone"></i> Replication</li>
  <li><i className="fas fa-exchange-alt"></i> Disaster Recovery</li>
</ul>

<Link to='config' style={{textDecoration:'none',color:'inherit'}} onClick={() => toggleHeader('Config Management')}>
  <h2 className={activeHeaders['Config Management'] ? 'active' : ''}>
    <i className="fas fa-sliders-h"></i> <span>Config Management</span>
  </h2>
</Link>
<ul style={{ display: activeHeaders['Config Management'] ? 'block' : 'none' }}>
  <li><i className="fas fa-database"></i> CMDB</li>
  <li><i className="fas fa-code-branch"></i> Version Control</li>
  <li><i className="fas fa-search"></i> Configuration Drift</li>
</ul>

<Link to='support' style={{textDecoration:'none',color:'inherit'}} onClick={() => toggleHeader('Support Center')}>
  <h2 className={activeHeaders['Support Center'] ? 'active' : ''}>
    <i className="fas fa-life-ring"></i> <span>Support Center</span>
  </h2>
</Link>
<ul style={{ display: activeHeaders['Support Center'] ? 'block' : 'none' }}>
  <li><i className="fas fa-book"></i> Knowledge Base</li>
  <li><i className="fas fa-ticket-alt"></i> Ticketing System</li>
  <li><i className="fas fa-robot"></i> Chatbot</li>
</ul>

<Link to='notification' style={{textDecoration:'none',color:'inherit'}} onClick={() => toggleHeader('Notifications')}>
  <h2 className={activeHeaders['Notifications'] ? 'active' : ''}>
    <i className="fas fa-bell"></i> <span>Notifications</span>
  </h2>
</Link>
<ul style={{ display: activeHeaders['Notifications'] ? 'block' : 'none' }}>
  <li><i className="fas fa-bell"></i> Alerts</li>
  <li><i className="fas fa-bug"></i> Incidents</li>
  <li><i className="fas fa-bullhorn"></i> Events</li>
</ul>

<Link to='cost' style={{textDecoration:'none',color:'inherit'}} onClick={() => toggleHeader('Cost Management')}>
  <h2 className={activeHeaders['Cost Management'] ? 'active' : ''}>
    <i className="fas fa-wallet"></i> <span>Cost Management</span>
  </h2>
</Link>
<ul style={{ display: activeHeaders['Cost Management'] ? 'block' : 'none' }}>
  <li><i className="fas fa-chart-pie"></i> Cost Analysis</li>
  <li><i className="fas fa-wallet"></i> Budgeting</li>
  <li><i className="fas fa-sliders-h"></i> Cost Optimization</li>
  <li><i className="fas fa-divide"></i> Cost Allocation</li>
</ul>

<Link to='integrations' style={{textDecoration:'none',color:'inherit'}} onClick={() => toggleHeader('Integrations')}>
  <h2 className={activeHeaders['Integrations'] ? 'active' : ''}>
    <i className="fas fa-plug"></i> <span>Integrations</span>
  </h2>
</Link>
<ul style={{ display: activeHeaders['Integrations'] ? 'block' : 'none' }}>
  <li><i className="fas fa-plug"></i> API Integrations</li>
  <li><i className="fas fa-puzzle-piece"></i> Third-Party Integrations</li>
  <li><i className="fas fa-code"></i> Webhooks</li>
</ul>

      <div className="collapse-toggle" onClick={toggleSidebar}>
        <i className={`fas ${collapsed ? 'fa-angle-right' : 'fa-angle-left'}`} id="toggle-icon"></i>
      </div>
    </div>
  );
};

export default Sidebar;