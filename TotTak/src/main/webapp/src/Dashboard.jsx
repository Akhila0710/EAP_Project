import "./dashboard.css";

function Dashboard() {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">

                        <div className="navbar-brand" href="#"><a href="/homeScreen"><img src="/static/Logo.png" alt="" width="140" height="100" /></a></div><br />
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/user-tokens"><font color="white">Buy Tokens</font></a></li></ul>
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
                <h3>Welcome back, <br /><br /> <center>Total Assest (changed from yesterday)  Є 8,300 &nbsp;&nbsp;<font color="red">(-Є &nbsp;550.0)</font></center><br /><br /></h3>
                <table className="tab">
                    <tbody>
                        <tr>
                            <td><b>My Tokens</b></td></tr>
                    </tbody>
                </table>
                <div className="row1">
                        <table>
                            <tbody>
                                <tr>
                                    <td></td><td></td>
                                    <td>Product name</td>
                                    <td>Total value</td>
                                    <td>Token amount</td>
                                    <td>Value/token</td>
                                </tr>
                                <tr>
                                    <td><input type="submit" value="Sell" className="btn3" />&nbsp;<input type="submit" value="Add" className="btn3" /></td>
                                    <td></td>
                                    <td>House A&nbsp; 	&#128269;</td>
                                    <td>Є1,500.0 &nbsp;<font color="green">(+Є250.0)</font></td>
                                    <td>500</td>
                                    <td>Є10.0&nbsp;<font color="green">(+Є0.5)</font>&nbsp;&nbsp;<i className='bi bi-graph-up blue-color' style={{ fontSize: "36px" }}></i></td>

                                </tr>

                                <tr>
                                    <td><input type="submit" value="Sell" className="btn3" />&nbsp;<input type="submit" value="Add" className="btn3" /></td>
                                    <td></td>

                                    <td>House B&nbsp; 	&#128269;</td>
                                    <td>Є800.0 &nbsp;<font color="red">(-Є200.0)</font></td>
                                    <td>400</td>
                                    <td>Є2.0&nbsp;<font color="red">(-Є0.5)</font>&nbsp;&nbsp;&nbsp;&nbsp; <i className="bi bi-graph-down blue-color" style={{ fontSize: "36px" }}> </i></td>

                                </tr>
                                <tr>
                                    <td><input type="submit" value="Sell" className="btn3" />&nbsp;<input type="submit" value="Add" className="btn3" /></td>
                                    <td></td>

                                    <td>House C&nbsp; 	&#128269;</td>
                                    <td>Є6,000.0 &nbsp;<font color="red">(-Є600.0)</font></td>
                                    <td>600</td>
                                    <td>Є3.0&nbsp;<font color="red">(-Є1.0)</font>&nbsp;&nbsp;&nbsp;&nbsp; <i className="bi bi-graph-down blue-color" style={{ fontSize: "36px" }}></i></td></tr>
                            </tbody>
                </table></div>
            </div>


            <footer className="container-fluid bg-4 text-center">
                <p><b>Contact us  </b> <a href=""><font color="white">contactuspage.com</font></a></p>
            </footer>

        </div>
    )
}

export default Dashboard