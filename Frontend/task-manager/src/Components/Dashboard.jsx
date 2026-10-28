import './Dashboard.css'
import Sidebar from "./Sidebar";
import Header from './Header';
import Stats from './Stats';
import TaskSection from './TaskSection';
function Dashboard(){
    return(
        <main className="dashboard-layout">
          <Sidebar/>
          <div className="dashboard-content">
            <Header/> 
            <Stats/>
            <TaskSection/>
          </div>
          
        </main>
    );
}
export default Dashboard;