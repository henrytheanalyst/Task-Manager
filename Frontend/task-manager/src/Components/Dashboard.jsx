import './Dashboard.css'
import Sidebar from "./Sidebar";
import Header from './Header';
import Stats from './Stats';
function Dashboard(){
    return(
        <main className="dashboard-layout">
          <Sidebar/>
          <div className="dashboard-content">
            <Header/> 
            <Stats/>
          </div>
          
        </main>
    );
}
export default Dashboard;