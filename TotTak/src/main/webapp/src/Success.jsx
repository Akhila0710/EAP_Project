import './success.css'

function Success() {
    return (
        <div>


            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">

                        <div className="navbar-brand" href="#"><a href="dashboard"><img src="/static/Logo.png" alt="" width="140" height="100" /></a></div><br />

                    </div><br />

                    <div className="collapse navbar-collapse" id="myNavbar"><br /><br />
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><font color="white">Sign-out</font></a></li>
                            <li><a href="#"><font color="white">Settings</font></a></li>

                        </ul>
                    </div>
                </div>
            </nav>


            <div className="container-fluid bg-1 text-center">
                <br /><br /><br />
                <h1> Your Payment was Successful!</h1>

                <div className="wrapper"> <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" > <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
                </div>
                <a href="/homeScreen">
                    <input type="submit" value="Home" /></a>


            </div>

        </div>
    )
}

export default Success;