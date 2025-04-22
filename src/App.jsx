import { useState } from 'react'
import './App.css'
import Sidebar from './Layout/Sidebar'
import Topbar from './Layout/Topbar'
import Automation from './components/Automation'
import Overview from './components/Overview'
import Backup from './components/Backup'
import AIML from './components/AIML'
import Observability from './components/Observability'
import Marketplace from './components/Marketplace'
import Compliance from './components/Compliance'
import IAM from './components/IAM'
import Config from './components/Config'
import Support from './components/Support'
import Notification from './components/Notification'
import Cost from './components/Cost'
import Resources from './components/Resources'
import Integrations from './components/Integrations'

function App() {
  const [count, setCount] = useState(0)

  return (
   
     

    <div className="dashboard">


<Sidebar/>

<div className="main-wrapper">

<Topbar/>

<div className="main">
<Overview/>
<Automation/>
<Backup/>
<AIML/>
<Observability/>
<Marketplace/>
<Compliance/>
<IAM/>
<Backup/>

<Config/>
<Support/>
<Notification/>
<Cost/>
<Integrations/>
<Resources/>
</div>
</div>



  
</div>
  )
}

export default App
