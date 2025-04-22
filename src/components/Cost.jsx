import React, { useEffect, useRef } from 'react';
import {
  Chart,
  DoughnutController,
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
Chart.register(
  DoughnutController,
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function Cost() {
  const regionChartRef = useRef(null);
  const resourceChartRef = useRef(null);
  const regionChartInstanceRef = useRef(null);
  const resourceChartInstanceRef = useRef(null);

  useEffect(() => {
    const initCharts = () => {
      // Region Cost Chart
      if (regionChartRef.current) {
        const ctx = regionChartRef.current.getContext('2d');
        
        // Destroy previous instance if exists
        if (regionChartInstanceRef.current) {
          regionChartInstanceRef.current.destroy();
        }

        regionChartInstanceRef.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['India-Mumbai', 'India-Hyderabad', 'Australia', 'Japan', 'Singapore'],
            datasets: [{
              data: [34000, 27000, 21000, 16000, 14000],
              backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#6366f1', '#ef4444'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom'
              }
            }
          }
        });
      }

      // Resource Cost Chart
      if (resourceChartRef.current) {
        const ctx = resourceChartRef.current.getContext('2d');
        
        // Destroy previous instance if exists
        if (resourceChartInstanceRef.current) {
          resourceChartInstanceRef.current.destroy();
        }

        resourceChartInstanceRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Compute', 'Storage', 'Database', 'Networking', 'Monitoring'],
            datasets: [{
              label: 'Cost ($)',
              data: [48000, 32000, 24000, 15000, 9000],
              backgroundColor: '#60a5fa',
              borderRadius: 4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: value => `$${value.toLocaleString()}`
                }
              }
            }
          }
        });
      }
    };

    // Initialize charts immediately
    initCharts();

    // Cleanup
    return () => {
      if (regionChartInstanceRef.current) {
        regionChartInstanceRef.current.destroy();
      }
      if (resourceChartInstanceRef.current) {
        resourceChartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="content-section" id="cost-management-content">
      <h2>Cost Management</h2>
      <p>Monitor cloud spend, optimize resource allocation, and track budgeting goals across departments.</p>

      <div className="cards" style={{ marginBottom: '30px' }}>
        <div className="card"><h3>Total Spend</h3><p>$128,400</p><small>Month-to-date</small></div>
        <div className="card"><h3>Forecasted Spend</h3><p>$142,000</p><small>For April 2025</small></div>
        <div className="card"><h3>Budget Utilization</h3><p>86%</p><small>Monthly Budget: $165,000</small></div>
      </div>

      <div className="sections">
        <div className="panel">
          <h4>Region-wise Cost Split</h4>
          <div style={{ height: '250px', position: 'relative' }}>
            <canvas ref={regionChartRef}></canvas>
          </div>
        </div>
        <div className="panel">
          <h4>Resource-type Cost Split</h4>
          <div style={{ height: '250px', position: 'relative' }}>
            <canvas ref={resourceChartRef}></canvas>
          </div>
        </div>
      </div>

      <div className="sections">
        <div className="panel" style={{ flex: '1 1 100%' }}>
          <h4>Pricing Details</h4>
          <table className="bordered-table" style={{ width: '100%' }}>
            <thead>
              <tr><th>Service</th><th>Unit Price</th><th>Usage</th><th>Total</th></tr>
            </thead>
            <tbody>
              <tr><td>Compute (VM)</td><td>$0.12/hr</td><td>25,000 hrs</td><td>$3,000</td></tr>
              <tr><td>Storage (Block)</td><td>$0.10/GB</td><td>5,000 GB</td><td>$500</td></tr>
              <tr><td>Object Storage</td><td>$0.023/GB</td><td>12,000 GB</td><td>$276</td></tr>
              <tr><td>Data Transfer</td><td>$0.09/GB</td><td>8,000 GB</td><td>$720</td></tr>
              <tr><td>Database Services</td><td>$0.25/hr</td><td>3,000 hrs</td><td>$750</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cost;