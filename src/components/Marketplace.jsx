function Marketplace()
{
    return(
<div className="content-section" id="marketplace-content" >
  <h2>Marketplace</h2>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
    <div className="panel"><div style={{ textAlign: 'center' }}>
      <img src="./icons/patternfly.svg" alt="PatternFly" style={{ height: '40px', marginBottom: '10px' }} />
    </div><h4>Patternfly</h4><small>Provided by Red Hat</small><p>PatternFly is a community project that promotes design commonality and improves user experience.</p></div>
    <div className="panel"><div style={{ textAlign: 'center' }}>
      <img src="./icons/activemq.png" alt="ActiveMQ" style={{ height: '40px', marginBottom: '10px' }} />
    </div><h4>ActiveMQ</h4><small>Provided by Red Hat</small><p>Allows messages to be sent/received to a JMS Queue or Topic using Apache ActiveMQ.</p></div>
    <div className="panel"><div style={{ textAlign: 'center' }}>
      <img src="./icons/spark.png" alt="Spark" style={{ height: '40px', marginBottom: '10px' }} />
    </div><h4>Apache Spark</h4><small>Provided by Red Hat</small><p>This page covers the Apache Spark component for the Apache Camel.</p></div>
    <div className="panel"><div style={{ textAlign: 'center' }}>
      <img src="./icons/avro.webp" alt="Avro" style={{ height: '40px', marginBottom: '10px' }} />
    </div><h4>Avro</h4><small>Provided by Red Hat</small><p>Provides a dataformat for avro, allowing serialization and deserialization of messages using Apache Avro.</p></div>
    <div className="panel"><div style={{ textAlign: 'center' }}>
      <img src="./icons/azure.png" alt="Azure Services" style={{ height: '40px', marginBottom: '10px' }} />
    </div><h4>Azure Services</h4><small>Provided by Red Hat</small><p>The Camel Components provide connectivity to Azure services from Camel.</p></div>
    <div className="panel"><div style={{ textAlign: 'center' }}>
      <img src="./icons/Nvidia_logo.svg.png" alt="Nvidia" style={{ height: '40px', marginBottom: '10px' }} />
    </div><h4>GPU Enabled Compute</h4><small>Provided by Nvidia</small><p>GPU Enabled Compute for your GPU Intensive workloads.</p></div>
    <div className="panel"><div style={{ textAlign: 'center' }}>
      <img src="./icons/dropbox.png" alt="Dropbox" style={{ height: '40px', marginBottom: '10px' }} />
    </div><h4>Dropbox</h4><small>Provided by Red Hat</small><p>Allows you to treat Dropbox remote folders as a producer/consumer of messages.</p></div>
    <div className="panel"><div style={{ textAlign: 'center' }}>
      <img src="./icons/windows.png" alt="Windows" style={{ height: '40px', marginBottom: '10px' }} />
    </div><h4>Windows Server 2022 CIS</h4><small>Provided by Microsoft</small><p>CIS Hardened image with preconfigured security baselines for Windows Server 2022.</p></div>
    <div className="panel"><div style={{ textAlign: 'center' }}>
      <img src="./icons/MongoDB_Logo.svg.png" alt="MongoDB" style={{ height: '40px', marginBottom: '10px' }} />
    </div><h4>MongoDB Atlas</h4><small>Provided by MongoDB</small><p>Fully managed cloud database for modern apps with automated scaling and backups.</p></div>
    <div className="panel"><div style={{ textAlign: 'center' }}>
      <img src="./icons/elastic.png" alt="Elastic" style={{ height: '40px', marginBottom: '10px' }} />
    </div><h4>ElasticSearch</h4><small>Provided by Elastic</small><p>Search, analyze, and visualize data in real time with Elastic Stack.</p></div>
    <div className="panel"><div style={{ textAlign: 'center' }}>
      <img src="./icons/postgres.png" alt="PostgreSQL" style={{ height: '40px', marginBottom: '10px' }} />
    </div><h4>PostgreSQL</h4><small>Provided by Bitnami</small><p>Open-source relational database engine, easy to deploy and scale in the cloud.</p></div>
    <div className="panel"><div style={{ textAlign: 'center' }}>
      <img src="./icons/grafana.webp" alt="Grafana" style={{ height: '40px', marginBottom: '10px' }} />
    </div><h4>Grafana</h4><small>Provided by Grafana Labs</small><p>Open-source analytics and monitoring platform for observability dashboards.</p></div>
    <div className="panel"><div style={{ textAlign: 'center' }}>
      <img src="./icons/nginx.svg" alt="Nginx" style={{ height: '40px', marginBottom: '10px' }} />
    </div><h4>Nginx</h4><small>Provided by NGINX</small><p>Web server and reverse proxy for load balancing, HTTP caching, and more.</p></div>
    <div className="panel"><div style={{ textAlign: 'center' }}>
      <img src="./icons/jenkins.webp" alt="Jenkins" style={{ height: '40px', marginBottom: '10px' }} />
    </div><h4>Jenkins</h4><small>Provided by Jenkins Project</small><p>Automation server for CI/CD pipelines, build and deployment workflows.</p></div>
  </div>
</div>
    )
}
export default Marketplace;