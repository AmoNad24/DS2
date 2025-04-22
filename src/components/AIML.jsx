function AIML() {
  return (
    <div className="content-section" id="aiml-hub-content" style={{ display: 'none' }}>
  <h2>AI/ML Hub</h2>
  <p>The AI/ML Hub provides tools and insights to manage your machine learning lifecycle effectively, from data preparation to deployment.</p>

  <div className="sections">
    <div className="panel">
      <h4>Model Inventory</h4>
      <ul>
        <li><strong>Customer Churn Predictor</strong> - v1.3 <br/><small>Random Forest | Accuracy: 89%</small></li>
        <li><strong>Image Classifier</strong> - v2.0 <br/><small>ResNet-50 | Accuracy: 94%</small></li>
        <li><strong>Sentiment Analyzer</strong> - v1.1 <br/><small>BERT | Accuracy: 91%</small></li>
      </ul>
    </div>
    <div className="panel">
      <h4>Recent Training Runs</h4>
      <table className="bordered-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px' }}>Model</th>
            <th style={{ padding: '8px' }}>Started</th>
            <th style={{ padding: '8px' }}>Duration</th>
            <th style={{ padding: '8px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{ padding: '8px' }}>Churn Predictor</td><td>Apr 9, 2025</td><td>2h 15m</td><td style={{ color: '#16c784' }}>Completed</td></tr>
          <tr><td style={{ padding: '8px' }}>Image Classifier</td><td>Apr 8, 2025</td><td>3h 22m</td><td style={{ color: '#f59e0b' }}>Queued</td></tr>
          <tr><td style={{ padding: '8px' }}>Sentiment Analyzer</td><td>Apr 7, 2025</td><td>1h 47m</td><td style={{ color: '#ef4444' }}>Failed</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div className="sections">
    <div className="panel">
      <h4>Inference Pipelines</h4>
      <ul>
        <li><strong>Real-Time Prediction:</strong> Enabled <br/><small>Latency: 120ms</small></li>
        <li><strong>Batch Scoring:</strong> Scheduled Daily <br/><small>Last Run: Apr 9, 2025</small></li>
      </ul>
    </div>
    <div className="panel">
      <h4>Data Sources</h4>
      <ul>
        <li><strong>Customer Data</strong> - PostgreSQL</li>
        <li><strong>Product Feedback</strong> - S3</li>
        <li><strong>Social Feeds</strong> - Kafka</li>
      </ul>
    </div>
  </div>
</div>
  );
}

export default AIML;