import React, { useEffect } from 'react';
import {
  Chart,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  RadarController,
  RadialLinearScale,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register Chart.js components
Chart.register(
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  RadarController,
  RadialLinearScale,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Compliance() {
  useEffect(() => {
    // Create charts when component mounts
    const createCharts = () => {
      // Destroy existing charts if they exist
      const charts = Object.values(Chart.instances);
      charts.forEach(chart => chart.destroy());

      new Chart(document.getElementById('activeThreatsChart'), {
        type: 'bar',
        data: {
          labels: ['Vo1d', 'Squamish Libra', 'UAC-0063', 'Dragon RaaS', 'PlushDaemon', 'Lotus Blossom', 'Earth Alux', 'FishMonger', 'Hive0145', 'Chinese-Speaking Group'],
          datasets: [{
            label: 'Threats',
            data: [100, 95, 89, 83, 77, 70, 65, 59, 52, 49],
            backgroundColor: '#ef4444'
          }]
        },
        options: { 
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } } 
        }
      });

      new Chart(document.getElementById('targetedVictimsChart'), {
        type: 'bar',
        data: {
          labels: ['Asia', 'Europe', 'Americas', 'Eastern Europe', 'Northern America', 'Southeastern Asia', 'Africa', 'Government', 'Eastern Asia', 'USA'],
          datasets: [{
            label: 'Victims',
            data: [1000, 950, 920, 850, 820, 780, 700, 690, 660, 620],
            backgroundColor: '#10b981'
          }]
        },
        options: { 
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } } 
        }
      });

      new Chart(document.getElementById('relationshipsChart'), {
        type: 'line',
        data: {
          labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
          datasets: [{
            label: 'Relationships',
            data: [100, 150, 180, 600, 450, 470, 460, 470, 480, 490, 510, 520],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59,130,246,0.2)',
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });

      new Chart(document.getElementById('activeMalwareChart'), {
        type: 'radar',
        data: {
          labels: ['Brute Ratel', 'SectopRAT', 'Lumma Stealer', 'ta505', 'Astral Stealer', 'NetSupport RAT', 'Information Stealer', 'QDoor', 'd3f4ckloader', 'ransomhub'],
          datasets: [{
            label: 'Malware',
            data: [35, 40, 28, 25, 33, 41, 26, 38, 42, 30],
            backgroundColor: 'rgba(59,130,246,0.4)',
            borderColor: '#3b82f6'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });

      new Chart(document.getElementById('activeVulnerabilitiesChart'), {
        type: 'bar',
        data: {
          labels: ['CVE-2025-0282', 'CVE-2025-0283', 'CVE-2024-50623', 'CVE-2025-26633', 'CVE-2025-22457', 'CVE-2024-8963', 'CVE-2024-9379', 'CVE-2024-9381'],
          datasets: [{
            label: 'Vulnerabilities',
            data: [58, 58, 33, 31, 25, 23, 23, 23],
            backgroundColor: '#f59e0b'
          }]
        },
        options: { 
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } } 
        }
      });

      new Chart(document.getElementById('activeLabelsChart'), {
        type: 'bar',
        data: {
          labels: ['elf', 'mozi', 'mirai', 'redteam', 'trojan', 'backdoor'],
          datasets: [{
            label: 'Mentions',
            data: [80, 70, 65, 60, 58, 52],
            backgroundColor: '#8b5cf6'
          }]
        },
        options: { 
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } } 
        }
      });

      new Chart(document.getElementById('latestReportsChart'), {
        type: 'line',
        data: {
          labels: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5', 'Apr 6', 'Apr 7', 'Apr 8', 'Apr 9'],
          datasets: [{
            label: 'Reports',
            data: [1, 3, 2, 5, 3, 6, 4, 2, 1],
            borderColor: '#f43f5e',
            backgroundColor: 'rgba(244,63,94,0.2)',
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    };

    createCharts();

    // Cleanup function to destroy charts when component unmounts
    return () => {
      const charts = Object.values(Chart.instances);
      charts.forEach(chart => chart.destroy());
    };
  }, []); 
  return (
  

<div className="content-section" id="compliance-center-content" style={{ display: 'none' }}>
  <div className="cards" style={{ marginBottom: '30px' }}>
    <div className="card">
      <h3>Intrusion Sets</h3>
      <p>1.02K</p>
      <span style={{ color: '#16c784' }}>↑ 2</span> <small>(24 hours)</small>
      <i className="fas fa-gem" style={{ float: 'right', fontSize: '20px', color: '#3b82f6' }}></i>
    </div>
    <div className="card">
      <h3>Malware</h3>
      <p>4.31K</p>
      <span style={{ color: '#16c784' }}>↑ 4</span> <small>(24 hours)</small>
      <i className="fas fa-biohazard" style={{ float: 'right', fontSize: '20px', color: '#3b82f6' }}></i>
    </div>
    <div className="card">
      <h3>Reports</h3>
      <p>11.45K</p>
      <span style={{ color: '#16c784' }}>↑ 7</span> <small>(24 hours)</small>
      <i className="fas fa-file-alt" style={{ float: 'right', fontSize: '20px', color: '#3b82f6' }}></i>
    </div>
    <div className="card">
      <h3>Indicators</h3>
      <p>1.1M</p>
      <span style={{ color: '#16c784' }}>↑ 2621</span> <small>(24 hours)</small>
      <i className="fas fa-search" style={{ float: 'right', fontSize: '20px', color: '#3b82f6' }}></i>
    </div>
  </div>

  <div className="sections" style={{ flexWrap: 'wrap' }}>
    <div className="panel">
      <h4>Most Active Threats (Last 3 Months)</h4>
      <canvas id="activeThreatsChart" height="250"></canvas>
    </div>
    <div className="panel">
      <h4>Most Targeted Victims (Last 3 Months)</h4>
      <canvas id="targetedVictimsChart" height="250"></canvas>
    </div>
  </div>

  <div className="sections" style={{ flexWrap: 'wrap' }}>
    <div className="panel">
      <h4>Most Active Malware (Last 3 Months)</h4>
      <canvas id="activeMalwareChart" height="250"></canvas>
    </div>
    <div className="panel">
      <h4>Most Active Vulnerabilities (Last 3 Months)</h4>
      <canvas id="activeVulnerabilitiesChart" height="250"></canvas>
    </div>
    <div className="panel">
      <h4>Targeted Countries (Last 3 Months)</h4>
      <img src="./images/map.png" alt="Bar chart" height="150" style={{ width: '100%', borderRadius: '10px' }} />
    </div>
  </div>

  <div className="sections" style={{ flexWrap: 'wrap' }}>
    <div className="panel">
      <h4>Latest Trends</h4>
      <canvas id="latestReportsChart" height="250"></canvas>
    </div>
    <div className="panel">
      <h4>Most Active Labels (Last 3 Months)</h4>
      <canvas id="activeLabelsChart" height="250"></canvas>
    </div>
  </div>
</div>

  );
}

export default Compliance;