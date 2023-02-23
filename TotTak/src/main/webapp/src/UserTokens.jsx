

import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import './userTokens'

function UserTokens() {
    const navigate = useNavigate();

    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a href="/homeScreen">
                            <img src="/static/Logo.png" alt="" width="140" height="100" />
                        </a><br />
                        <ul className="nav navbar-nav navbar-right"><li><a href="/dashboard"><font color="white">Dashboard</font></a></li>
                        </ul>
                    </div><br></br>

                    <div className="collapse navbar-collapse" id="myNavbar"><br /><br />
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><font color="white">Sign-out</font></a></li>
                            <li><a href="#"><font color="white">Settings</font></a></li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="dropdown" style={{ float: "right" }}>
                <button className="dropbtn">Sort by: Germany</button>
                <div className="dropdown-content">
                    <a href="#">Germany</a>
                    <a href="#">France</a>
                    <a href="#">Italy</a>
                </div>
            </div>

            <div className="dropdown" style={{ float: "right" }}>
                <button className="dropbtn">Sort by: Featured</button>
                <div className="dropdown-content">
                    <a href="#">Featured</a>
                    <a href="#">Latest</a>
                    <a href="#">Cheapest</a>
                </div>
            </div>

            <div className="container-fluid bg-1 text-center">


                <form method="get">
                    <table>
                        <tbody>
                            <tr>
                                <td><img src="/static/HomeA.jpg" width="250" height="150" /></td>
                                <td>House A<br />Ulm,Germany</td>
                                <td>Є10.0/Token</td>
                                <td><img src="/static/Graphpic.jpg" width="300" /></td>
                            </tr>
                            <tr>
                                <td></td><td><input type="submit" value="Details" className="btn3" />&nbsp;
                                    <button className='btn3' onClick={() => navigate('/buy-tokens/1')}>Buy</button>
                                </td>
                            </tr>
                            <tr>
                                <td><img src="/static/HomeB.jpg" width="250" height="150" /></td>
                                <td>House B<br />Munich,Germany</td>
                                <td>Є15.0/Token</td>
                                <td><img src="/static/Graphpic.jpg" width="300" /></td>
                            </tr>
                            <tr>
                                <td></td><td><input type="submit" value="Details" className="btn3" />&nbsp;
                                    <button className='btn3' onClick={() => navigate('/buy-tokens/2')}>Buy</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>


            <footer className="container-fluid bg-4 text-center">
                <p><b>Contact us  </b> <a href=""><font color="white">contactuspage.com</font></a></p>
            </footer>

        </div>
    )
}

export default UserTokens
