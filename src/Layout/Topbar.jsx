

function Topbar() {


    function toggleUserMenu() {
        const menu = document.getElementById('user-dropdown');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
      }
  
      document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('user-dropdown');
        if (dropdown && !dropdown.contains(event.target) && event.target.tagName !== 'IMG') {
          dropdown.style.display = 'none';
        }
      });
  return (
    <div className="topbar">
        <div className="search-box">
          <input type="text" placeholder="Search..."/>
        </div>
          <div className="user-info" style={ {position: 'relative'}}>
              <select id="region-select" style={{
  backgroundColor: '#2a2d34',
  color: 'white',
  border: 'none',
  padding: '6px 10px',
  borderRadius: '6px',
}}>
                <option>India-Mumbai</option>
                <option>India-Hyderabad</option>
                <option>Australia</option>
                <option>Japan</option>
                <option>Singapore</option>
              </select>
              <div style={{position: "relative"}}>
                <img src="./images/6596121.png" alt="User Avatar" style={{cursor:"pointer"}} onClick={toggleUserMenu} />
                <div id="user-dropdown" style={ {
  display: 'none',
  position: 'absolute',
  top: '40px',
  right: '0',
  background: '#2a2d34',
  borderRadius: '6px',
  padding: '10px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
  zIndex: 10,
}}>
                  <div style={{padding:"6px 12px",cursor:"pointer"}}>Profile</div>
                  <div style={{padding:"6px 12px",cursor:"pointer"}}>Settings</div>
                  <div style={{padding:"6px 12px",cursor:"pointer"}}>Logout</div>
                </div>
              </div>
              <span className="username">Shashank Kumar</span>
              
          </div>
      </div>
  );
}

export default Topbar;