import React, { useEffect, useRef } from 'react';
import {
  Chart,
  PieController,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
Chart.register(
  PieController,
  ArcElement,
  Tooltip,
  Legend
);

function Overview() {
  const pieChartRef = useRef(null);
  const pieChartInstanceRef = useRef(null);

  useEffect(() => {
    const initChart = () => {
      // Recommendations by Category Chart
      if (pieChartRef.current) {
        const ctx = pieChartRef.current.getContext('2d');
        
        // Destroy previous instance if exists
        if (pieChartInstanceRef.current) {
          pieChartInstanceRef.current.destroy();
        }

        pieChartInstanceRef.current = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Service Availability', 'Fault Tolerance', 'Performance', 'Security'],
            datasets: [{
              data: [25, 4, 4, 12],
              backgroundColor: ['#3b82f6', '#93c5fd', '#2563eb', '#1e40af'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return `${context.label}: ${context.raw}`;
                  }
                }
              }
            }
          }
        });
      }
    };

    // Initialize chart immediately
    initChart();

    // Cleanup
    return () => {
      if (pieChartInstanceRef.current) {
        pieChartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div id="overview-content" className="content-section">
      <div className="cards" style={{ marginBottom: '30px' }}>
        <div className="card">
          <h3>Instances</h3>
          <p>11.02K</p>
          <span style={{ color: '#16c784' }}>↑ 243</span> <small>(24 hours)</small>
          <i className="fas fa-server" style={{ float: 'right', fontSize: '20px', color: '#3b82f6' }}></i>
        </div>
        <div className="card">
          <h3>Containers</h3>
          <p>4.31K</p>
          <span style={{ color: '#16c784' }}>↑ 4</span> <small>(24 hours)</small>
          <i className="fab fa-docker" style={{ float: 'right', fontSize: '20px', color: '#3b82f6' }}></i>
        </div>
        <div className="card">
          <h3>Database</h3>
          <p>1.93K</p>
          <span style={{ color: '#16c784' }}>↑ 5</span> <small>(24 hours)</small>
          <i className="fas fa-database" style={{ float: 'right', fontSize: '20px', color: '#3b82f6' }}></i>
        </div>
        <div className="card">
          <h3>Storage</h3>
          <p>543.86 TB</p>
          <span style={{ color: '#16c784' }}>↑ 15TB</span> <small>(24 hours)</small>
          <i className="fas fa-hard-drive" style={{ float: 'right', fontSize: '20px', color: '#3b82f6' }}></i>
        </div>
      </div>
      
      <div className="sections">
        <div className="panel">
          <h4>Recent Activity</h4>
          <table className="bordered-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ textAlign: 'left' }}>
              <tr>
                <th style={{ padding: '8px' }}>Date</th>
                <th style={{ padding: '8px' }}>User</th>
                <th style={{ padding: '8px' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '8px' }}>2025-03-31 10:00</td><td>admin</td><td>Deployed Kubernetes cluster</td></tr>
              <tr><td style={{ padding: '8px' }}>2025-03-31 09:30</td><td>admin</td><td>Terminated VM: dev-server</td></tr>
              <tr><td style={{ padding: '8px' }}>2025-03-30 16:12</td><td>admin</td><td>Updated firewall rules</td></tr>
              <tr><td style={{ padding: '8px' }}>2025-03-30 12:40</td><td>admin</td><td>Created snapshot for db-server</td></tr>
              <tr><td style={{ padding: '8px' }}>2025-03-30 11:20</td><td>admin</td><td>Restarted container: nginx-proxy</td></tr>
              <tr><td style={{ padding: '8px' }}>2025-03-29 22:15</td><td>admin</td><td>Backed up VM: analytics-node</td></tr>
              <tr><td style={{ padding: '8px' }}>2025-03-29 18:50</td><td>admin</td><td>Created security group: sg-frontend</td></tr>
              <tr><td style={{ padding: '8px' }}>2025-03-29 15:33</td><td>admin</td><td>Modified IAM policy</td></tr>
              <tr><td style={{ padding: '8px' }}>2025-03-29 14:17</td><td>admin</td><td>Started instance: cache-server</td></tr>
              <tr><td style={{ padding: '8px' }}>2025-03-29 13:05</td><td>admin</td><td>Deleted S3 bucket: old-logs</td></tr>
              <tr><td style={{ padding: '8px' }}>2025-03-29 11:42</td><td>admin</td><td>Updated network ACLs</td></tr>
              <tr><td style={{ padding: '8px' }}>2025-03-29 10:11</td><td>admin</td><td>Assigned floating IP to instance</td></tr>
              <tr><td style={{ padding: '8px' }}>2025-03-28 17:39</td><td>admin</td><td>Configured object lifecycle policy</td></tr>
              <tr><td style={{ padding: '8px' }}>2025-03-28 15:00</td><td>admin</td><td>Scanned image for vulnerabilities</td></tr>
            </tbody>
          </table>
        </div>
        <div className="panel">
          <h4>Status</h4>
          <ul>
            <li><i className="fas fa-check-circle" style={{ color: '#16c784' }}></i> Cluster</li>
            <li><i className="fas fa-exclamation-circle" style={{ color: '#fbbf24' }}></i> Control Panel</li>
            <li><i className="fas fa-exclamation-circle" style={{ color: '#fbbf24' }}></i> Operators<br/><small style={{ color: '#bbb' }}>1 degraded</small></li>
            <li><i className="fas fa-check-circle" style={{ color: '#16c784' }}></i> Image Vulnerabilities<br/><small style={{ color: '#bbb' }}>0 vulnerabilities</small></li>
            <li><i className="fas fa-check-circle" style={{ color: '#16c784' }}></i> Storage<br/><small style={{ color: '#f87171' }}>Degraded</small></li>
            <li><i className="fas fa-check-circle" style={{ color: '#16c784' }}></i> Hardware</li>
            <li><i className="fas fa-check-circle" style={{ color: '#16c784' }}></i> Insights</li>
          </ul>

          <h4>Notifications</h4>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: '#ef4444', padding: '6px 12px', borderRadius: '12px' }}><i className="fas fa-exclamation-circle"></i> 1</span>
            <span style={{ backgroundColor: '#f59e0b', padding: '6px 12px', borderRadius: '12px' }}><i className="fas fa-exclamation-triangle"></i> 1</span>
            <span style={{ backgroundColor: '#22c55e', padding: '6px 12px', borderRadius: '12px' }}><i className="fas fa-check-circle"></i> 3</span>
            <span style={{ backgroundColor: '#60a5fa', padding: '6px 12px', borderRadius: '12px' }}><i className="fas fa-info-circle"></i> 3</span>
            <span style={{ backgroundColor: '#7dd3fc', padding: '6px 12px', borderRadius: '12px' }}><i className="fas fa-bell"></i> 3</span>
          </div>
        </div>
      </div>

      <div className="sections">
        <div className="panel">
          <h4>Recommendations by Severity</h4>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-around', textAlign: 'center' }}>
            <div><div style={{ fontSize: '20px' }}>2</div><div style={{ color: '#f87171' }}>Critical</div></div>
            <div><div style={{ fontSize: '20px' }}>5</div><div style={{ color: '#facc15' }}>Important</div></div>
            <div><div style={{ fontSize: '20px' }}>7</div><div style={{ color: '#60a5fa' }}>Moderate</div></div>
            <div><div style={{ fontSize: '20px' }}>12</div><div style={{ color: '#9ca3af' }}>Low</div></div>
          </div>

          <h4 style={{ marginTop: '20px' }}>Recommendations by Category</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ width: '100px', height: '100px', position: 'relative' }}>
              <canvas ref={pieChartRef}></canvas>
            </div>
            <ul style={{ listStyle: 'none', paddingLeft: '0', margin: '0' }}>
              <li style={{ color: '#93c5fd' }}>Fault Tolerance: <span style={{ color: 'white' }}>4</span></li>
              <li style={{ color: '#3b82f6' }}>Service Availability: <span style={{ color: 'white' }}>25</span></li>
              <li style={{ color: '#2563eb' }}>Performance: <span style={{ color: 'white' }}>4</span></li>
              <li style={{ color: '#1e40af' }}>Security: <span style={{ color: 'white' }}>12</span></li>
            </ul>
          </div>
        </div>
        <div className="panel">
          <h4>Improve Recommended Pathways</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ flex: '1', backgroundColor: '#2a2d34', padding: '16px', borderRadius: '10px' }}>
              <span style={{ border: '1px solid #60a5fa', color: '#60a5fa', padding: '2px 10px', borderRadius: '16px' }}>Performance</span>
              <a href="#" style={{ color: '#3b82f6', display: 'block', marginTop: '4px' }}>378 systems</a>
              <p style={{ margin: '10px 0' }}>Upgrade your kernel version to remediate ntpd time sync issues, kernel panics, network instabilities and issues with system performance</p>
              <p style={{ margin: '10px 0' }}><i className="fas fa-power-off"></i> System reboot <strong>is not</strong> required</p>
            </div>
            <div style={{ flex: '1', backgroundColor: '#2a2d34', padding: '16px', borderRadius: '10px' }}>
              <span style={{ border: '1px solid #60a5fa', color: '#60a5fa', padding: '2px 10px', borderRadius: '16px' }}>Stability</span>
              <a href="#" style={{ color: '#3b82f6', display: 'block', marginTop: '4px' }}>211 systems</a>
              <p style={{ margin: '10px 0' }}>Adjust your networking configuration to get ahead of network performance degradations and packet losses</p>
              <p style={{ margin: '10px 0' }}><i className="fas fa-power-off"></i> System reboot <strong>is</strong> required</p>
            </div>
            <div style={{ flex: '1', backgroundColor: '#2a2d34', padding: '16px', borderRadius: '10px' }}>
              <span style={{ border: '1px solid #60a5fa', color: '#60a5fa', padding: '2px 10px', borderRadius: '16px' }}>Availability</span>
              <a href="#" style={{ color: '#3b82f6', display: 'block', marginTop: '4px' }}>166 systems</a>
              <p style={{ margin: '10px 0' }}>Fine tune your Oracle DB configuration to improve database performance and avoid process failure</p>
              <p style={{ margin: '10px 0' }}><i className="fas fa-power-off"></i> System reboot <strong>is not</strong> required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;