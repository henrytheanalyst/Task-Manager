import './TaskSection.css';
function TaskSection(){
    return(
        <section className="tasks-section">
            <div className="tasks-header">
                <div>
                    <h2>My Tasks</h2>
                    <p>Manage and track your daily tasks</p>
                </div>
                  <button type="button" className="add-task-btn">
                    <i className="ri-add-line"></i>
                    Add Task
                </button>
            </div>
            <div className="tasks-table">
                <div className="task-row tasks-table-header">
                    <span>Task</span>
                    <span>Due Date</span>
                    <span>Status</span>
                </div>
                <div className="task-row">
                    <div className="task-name">
                        <input type="checkbox"/>
                        <span>Complete project documentation</span>

                    </div>
                    <span className='task-date'>Oct 29,2026</span>
                    <span className="task-status in-progress">
                        In Progress
                    </span>
                </div>

                <div className="task-row">
                    <div className="task-name">
                        <input type="checkbox"/>
                        <span>Review React fundamentals</span>

                    </div>
                    <span className='task-date'>Oct 30,2026</span>
                    <span className="task-status todo">
                        To Do
                    </span>
                </div>

                <div className="task-row">
                    <div className="task-name">
                        <input type="checkbox"/>
                        <span>Push dashboard to GitHub</span>

                    </div>
                    <span className='task-date'>Oct 27,2026</span>
                    <span className="task-status completed">
                        Completed
                    </span>
                </div>
            </div>
        </section>
    );
}
export default TaskSection;