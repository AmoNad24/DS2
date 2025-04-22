import React, { useEffect, useRef } from 'react';
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
Chart.register(
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend
);

function Notification() {
  const alertDistributionChartRef = useRef(null);
  const alertDistributionChartInstanceRef = useRef(null);

  useEffect(() => {
    const initChart = () => {
      // Alert Distribution Chart
      if (alertDistributionChartRef.current) {
        const ctx = alertDistributionChartRef.current.getContext('2d');
        
        // Destroy previous instance if exists
        if (alertDistributionChartInstanceRef.current) {
          alertDistributionChartInstanceRef.current.destroy();
        }

        alertDistributionChartInstanceRef.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Critical', 'Warning', 'Info'],
            datasets: [{
              data: [32, 74, 214],
              backgroundColor: ['#ef4444', '#f59e0b', '#60a5fa'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  boxWidth: 12,
                  padding: 20
                }
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return `${context.label}: ${context.raw}`;
                  }
                }
              }
            },
            cutout: '65%'
          }
        });
      }
    };

    // Initialize chart immediately
    initChart();

    // Cleanup
    return () => {
      if (alertDistributionChartInstanceRef.current) {
        alertDistributionChartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="content-section" id="notifications-content">
      <h2>Notifications</h2>
      <p>Stay informed with system alerts, incident reports, audit events, and system-wide announcements.</p>

      <div className="cards" style={{ marginBottom: '30px' }}>
        <div className="card"><h3>Total Alerts</h3><p>320</p><small>Across all systems</small></div>
        <div className="card"><h3>Active Incidents</h3><p>7</p><small>Under investigation</small></div>
        <div className="card"><h3>Audit Events</h3><p>1,120</p><small>Last 7 days</small></div>
        <div className="card"><h3>Broadcasts</h3><p>24</p><small>Posted this month</small></div>
      </div>

      <div className="sections">
        <div className="panel">
          <h4>Alert Distribution</h4>
          <div style={{ height: '200px', position: 'relative' }}>
            <canvas ref={alertDistributionChartRef}></canvas>
          </div>
        </div>
        <div className="panel">
          <h4>Recent Broadcasts</h4>
          <ul>
            <li><strong>April 9:</strong> Patch rollout for east region at 2:00 AM</li>
            <li><strong>April 7:</strong> High CPU usage alert rule updated</li>
            <li><strong>April 5:</strong> New audit retention policy applied</li>
            <li><strong>April 3:</strong> Certificate renewal scheduled</li>
          </ul>
        </div>
      </div>

      <div className="sections">
        <div className="panel" style={{ flex: '1 1 100%' }}>
          <h4>Incident Timeline</h4>
          <table className="bordered-table" style={{ width: '100%' }}>
            <thead>
              <tr><th>Time</th><th>Severity</th><th>Description</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>2025-04-09 08:45</td><td style={{ color: '#ef4444' }}>Critical</td><td>App outage in US-East</td><td style={{ color: '#f59e0b' }}>Investigating</td></tr>
              <tr><td>2025-04-08 14:30</td><td style={{ color: '#facc15' }}>Warning</td><td>High memory usage in node group-2</td><td style={{ color: '#16c784' }}>Resolved</td></tr>
              <tr><td>2025-04-07 10:10</td><td style={{ color: '#facc15' }}>Warning</td><td>Unusual login activity detected</td><td style={{ color: '#f59e0b' }}>Investigating</td></tr>
              <tr><td>2025-04-06 09:15</td><td style={{ color: '#16c784' }}>Info</td><td>Backup completed successfully</td><td style={{ color: '#16c784' }}>Resolved</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Notification;