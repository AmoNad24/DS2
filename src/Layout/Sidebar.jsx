import React, { useEffect, useState } from 'react';
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeContent, setActiveContent] = useState('');

  useEffect(() => {
    // Load saved content from localStorage
    const savedContent = localStorage.getItem('activeContent');
    if (savedContent) {
      showContent(savedContent);
    }

    // Set up click handlers for headers
    const headers = document.querySelectorAll('.sidebar h2');
    headers.forEach(header => {
      header.addEventListener('click', () => {
        // Collapse all other menus
        headers.forEach(h => {
          if (h !== header) {
            h.classList.remove('active');
            const ul = h.nextElementSibling;
            if (ul && ul.tagName === 'UL') {
              ul.style.display = 'none';
            }
          }
        });

        // Toggle the clicked one
        header.classList.toggle('active');
        const nextUl = header.nextElementSibling;
        if (nextUl && nextUl.tagName === 'UL') {
          nextUl.style.display = header.classList.contains('active') ? 'block' : 'none';
        }

        // Show corresponding content
        const label = header.textContent.trim().toLowerCase().replace(/ /g, '-').replace(/[^a-z\-]/g, '');
        showContent(`${label}-content`);
      });
    });

    // Set up click handlers for list items with submenus
    document.querySelectorAll('.sidebar li').forEach(item => {
      if (item.querySelector('ul')) {
        item.addEventListener('click', e => {
          e.stopPropagation();
          item.classList.toggle('active');
        });
      }
    });

    // Cleanup event listeners on component unmount
    return () => {
      headers.forEach(header => {
        header.removeEventListener('click', () => {});
      });
    };
  }, []);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const showContent = (id) => {
    document.querySelectorAll('.content-section').forEach(section => {
      section.style.display = 'none';
    });
    const activeSection = document.getElementById(id);
    if (activeSection) {
      activeSection.style.display = 'block';
      setActiveContent(id);
      localStorage.setItem('activeContent', id);
    }
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="logo">
        <img src="./images/tcs_logo.png" alt="TCS Logo" className="expanded-logo" />
        <img src="./images/tcs_logo_small.png" alt="Collapsed Logo" className="collapsed-logo" style={{ display: 'none' }} />
      </div>

      <h2><i className="fas fa-tachometer-alt"></i> <span>Overview</span></h2>

      <h2><i className="fas fa-server"></i> <span>Resources</span></h2>
      <ul>
        <li><i className="fas fa-microchip"></i> Compute Management
          <ul>
            <li><i className="fas fa-server"></i> x86</li>
            <li><i className="fas fa-server"></i> AIX</li>
            <li><i className="fas fa-server"></i> Solaris</li>
            <li><i className="fas fa-laptop"></i> MAC</li>
          </ul>
        </li>
        <li><i className="fas fa-database"></i> Storage Management
          <ul>
            <li><i className="fas fa-hdd"></i> Block Storage</li>
            <li><i className="fas fa-database"></i> Object Storage</li>
            <li><i className="fas fa-box"></i> S3 buckets</li>
            <li><i className="fas fa-folder"></i> NAS Storage</li>
          </ul>
        </li>
        <li><i className="fas fa-network-wired"></i> Network Management
          <ul>
            <li><i className="fas fa-shield-alt"></i> Security Groups</li>
            <li><i className="fas fa-project-diagram"></i> VLANs</li>
            <li><i className="fas fa-random"></i> LBs</li>
            <li><i className="fas fa-fire"></i> Firewalls</li>
          </ul>
        </li>
        <li><i className="fas fa-cubes"></i> Platform as a Services
          <ul>
            <li><i className="fas fa-network-wired"></i> Kubernetes</li>
            <li><i className="fas fa-database"></i> DBaaS</li>
          </ul>
        </li>
        <li><i className="fas fa-rocket"></i> NextGen Computing
          <ul>
            <li><i className="fas fa-bolt"></i> Serverless</li>
            <li><i className="fas fa-edge"></i> Edge Computing</li>
            <li><i className="fas fa-microchip"></i> IoT</li>
          </ul>
        </li>
      </ul>

      <h2><i className="fas fa-robot"></i> <span>Automation Center</span></h2>
      <ul>
        <li><i className="fas fa-calendar-alt"></i> Task Scheduler</li>
        <li><i className="fas fa-cogs"></i> Ansible</li>
        <li><i className="fas fa-code-branch"></i> Terraform</li>
      </ul>

      <h2><i className="fas fa-brain"></i> <span>AI/ML Hub</span></h2>
      <ul>
        <li><i className="fas fa-cube"></i> Models</li>
        <li><i className="fas fa-brain"></i> Training</li>
        <li><i className="fas fa-play-circle"></i> Inference</li>
        <li><i className="fas fa-project-diagram"></i> Pipelines</li>
        <li><i className="fas fa-database"></i> Data Management</li>
      </ul>

      <h2><i className="fas fa-eye"></i> <span>Observability</span></h2>
      <ul>
        <li><i className="fas fa-file-alt"></i> Logs</li>
        <li><i className="fas fa-bell"></i> Alerts</li>
        <li><i className="fas fa-eye"></i> Anomaly Detection</li>
        <li><i className="fas fa-chart-line"></i> Metrics</li>
        <li><i className="fas fa-route"></i> Tracing</li>
        <li><i className="fas fa-clipboard-list"></i> Audit Logs</li>
        <li><i className="fas fa-tachometer-alt"></i> Performance Monitoring</li>
        <li><i className="fas fa-layer-group"></i> Capacity Planning</li>
      </ul>

      <h2><i className="fas fa-store"></i> <span>Marketplace</span></h2>
      <ul>
        <li><i className="fas fa-th-large"></i> Apps</li>
        <li><i className="fas fa-cogs"></i> Services</li>
        <li><i className="fas fa-clone"></i> Templates</li>
      </ul>

      <h2><i className="fas fa-shield-alt"></i> <span>Compliance Center</span></h2>
      <ul>
        <li><i className="fas fa-file-contract"></i> Compliance Reports</li>
        <li><i className="fas fa-clipboard-check"></i> Audit Reports</li>
        <li><i className="fas fa-university"></i> Policy Management</li>
        <li><i className="fas fa-exclamation-triangle"></i> Risk Assessment</li>
      </ul>

      <h2><i className="fas fa-users-cog"></i> <span>IAM</span></h2>
      <ul>
        <li><i className="fas fa-user"></i> User Management</li>
        <li><i className="fas fa-user-shield"></i> RBAC</li>
        <li><i className="fas fa-sign-in-alt"></i> Single Sign-On</li>
        <li><i className="fas fa-key"></i> Multi-Factor Setup</li>
        <li><i className="fas fa-users"></i> Identity Federation</li>
        <li><i className="fas fa-code"></i> API Key Management</li>
      </ul>

      <h2><i className="fas fa-sync-alt"></i> <span>Backup & DR</span></h2>
      <ul>
        <li><i className="fas fa-save"></i> Backup</li>
        <li><i className="fas fa-undo-alt"></i> Restore</li>
        <li><i className="fas fa-clone"></i> Replication</li>
        <li><i className="fas fa-exchange-alt"></i> Disaster Recovery</li>
      </ul>

      <h2><i className="fas fa-sliders-h"></i> <span>Config Management</span></h2>
      <ul>
        <li><i className="fas fa-database"></i> CMDB</li>
        <li><i className="fas fa-code-branch"></i> Version Control</li>
        <li><i className="fas fa-search"></i> Configuration Drift</li>
      </ul>

      <h2><i className="fas fa-life-ring"></i> <span>Support Center</span></h2>
      <ul>
        <li><i className="fas fa-book"></i> Knowledge Base</li>
        <li><i className="fas fa-ticket-alt"></i> Ticketing System</li>
        <li><i className="fas fa-robot"></i> Chatbot</li>
      </ul>

      <h2><i className="fas fa-bell"></i> <span>Notifications</span></h2>
      <ul>
        <li><i className="fas fa-bell"></i> Alerts</li>
        <li><i className="fas fa-bug"></i> Incidents</li>
        <li><i className="fas fa-bullhorn"></i> Events</li>
      </ul>

      <h2><i className="fas fa-wallet"></i> <span>Cost Management</span></h2>
      <ul>
        <li><i className="fas fa-chart-pie"></i> Cost Analysis</li>
        <li><i className="fas fa-wallet"></i> Budgeting</li>
        <li><i className="fas fa-sliders-h"></i> Cost Optimization</li>
        <li><i className="fas fa-divide"></i> Cost Allocation</li>
      </ul>

      <h2><i className="fas fa-plug"></i> <span>Integrations</span></h2>
      <ul>
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