
import { Outlet } from "react-router-dom";

import Sidebar from './Layout/Sidebar'
import Topbar from './Layout/Topbar'

function Layout()
{


    return(

     

        <div className="dashboard">


        <Sidebar/>
        
        <div className="main-wrapper">
        
        <Topbar/>
        
        <div className="main">
        <Outlet/>
        </div>
        </div>
        
        
        
          
        </div>
    );

}

export default Layout;