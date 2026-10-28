import './Dashboard.css'
import Sidebar from "./Sidebar";
import Header from './Header';
function Dashboard(){
    return(
        <main className="dashboard-layout">
          <Sidebar/>
          <div className="dashboard-content">
            <Header/> 
          </div>
          
        </main>
    );
}
export default Dashboard;