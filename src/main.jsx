import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
import Layout from './Layout.jsx';

const router = createBrowserRouter([
{
  path:"/",
  element:<Layout/>,
  children: [
    {
      path: "automation",
      element: <Automation />
    },
    {
      path: "",
      element: <Overview />
    },
    {
      path: "backup",
      element: <Backup />
    },
    {
      path: "aiml",
      element: <AIML />
    },
    {
      path: "observability",
      element: <Observability />
    },
    {
      path: "marketplace",
      element: <Marketplace />
    },
    {
      path: "compliance",
      element: <Compliance />
    },
    {
      path: "iam",
      element: <IAM />
    },
    {
      path: "config",
      element: <Config />
    },
    {
      path: "support",
      element: <Support />
    },
    {
      path: "notification",
      element: <Notification />
    },
    {
      path: "cost",
      element: <Cost />
    },
    {
      path: "resources",
      element: <Resources />
    },
    {
      path: "integrations",
      element: <Integrations />
    }
  ]
}
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
