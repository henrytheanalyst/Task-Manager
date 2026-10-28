import './Stats.css';
function Stats(){
    return(
        <section className="stats-section">
            <div className="stat">
                <div className="stat-icon">
                    <i className="ri-dashboard-line"></i>
                </div>
                <div className="stat-info">
                    <h2>6</h2>
                    <p>Total tasks</p>
                </div>
            </div>

             <div className="stat">
                <div className="stat-icon">
                    <i class="ri-calendar-todo-line"></i>
                </div>
                <div className="stat-info">
                    <h2>3</h2>
                    <p>To do</p>
                </div>
            </div>

             <div className="stat">
                <div className="stat-icon">
                  <i className="ri-time-line"></i>
                </div>
                <div className="stat-info">
                    <h2>2</h2>
                    <p>In progress</p>
                </div>
            </div>

             <div className="stat">
                <div className="stat-icon">
                 <i className="ri-check-double-line"></i>
                </div>
                <div className="stat-info">
                    <h2>1</h2>
                    <p>Completed</p>
                </div>
            </div>
        </section>
    );
}
export default Stats;