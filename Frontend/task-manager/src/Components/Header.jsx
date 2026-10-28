import './Header.css';
function Header(){
    return(
        <header className="dashboard-header">
            <div className="welcome">
                <h1>
                    {new Date().getHours() < 12 ?" Good Morning":new Date().getHours() < 18 ?"Good Afternoon":"Good Evening"}
                </h1>
                <p className="welcome-subtitle">
                    Here's what's happening with our tasks today
                </p>
            </div>
            <div className="right">
                <div className="avatar">
                    HM
                </div>
                <div className="right-info">
                    <h2>Henry Maina</h2>
                    <h3>User</h3>
                </div>
            </div>
        </header>
    );
}
export default Header;