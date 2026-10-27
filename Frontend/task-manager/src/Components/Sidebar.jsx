import './Sidebar.css';
function Sidebar(){
    return(
        <aside className="sidebar">
            <h2>Focusly</h2>
            <nav>
                <ul>
                    <li className='active'> 
                        <i className="ri-dashboard-line"></i>
                        <span> Overview</span>
                    </li>
                    <li>
                        <i className="ri-briefcase-line"></i>
                        <span>My Tasks</span>
                    </li>
                    <li>
                        <i className="ri-calendar-2-line"></i>
                        <span>Calendar</span>
                    </li>
                    <li>
                        <i className="ri-settings-2-line"></i>
                        <span>Settings</span>
                    </li>
                </ul>
            </nav>
            <button type="button">
                <i className="ri-logout-box-r-line"></i>
                <span>Log out</span>
            </button>
        </aside>
    );
}
export default Sidebar;