import { useState } from 'react'
import './buyTokens.css'
import { useNavigate } from "react-router-dom";

function BuyTokens() {

  const [numTok, setNumTok] = useState(0);


  const navigate = useNavigate();

  async function buy() {
    const data = await fetch("https://www.anapioficeandfire.com/api/houses");
    const json = await data.json();
    console.log(numTok);
    navigate("/success");
  }

  return (

    
    <div>
        <nav class="navbar12 navbar-default">
                  <div class="container">
                        <div class="navbar12-header">
                          
                            <a class="navbar12-brand" href="#"><a href="/homeScreen"><img src="/static/Logo.png" alt="" width ="140" height = "100"/></a><br/>
                              <ul class="nav navbar12-nav navbar12-right"><li><a href="PrivateUserDashboard.html"><font color="white">Dashboard</font></a></li>&nbsp;&nbsp;
                                  <li><a href="PrivateUserScreen-2.html"><font color="white">Buy Tokens</font></a></li></ul></a>
                        </div><br/>
                      
                        <div class="collapse navbar-collapse" id="myNavbar">
                              <ul class="nav navbar12-nav navbar12-right">
                                  <li><a href="#"><font color="white">Sign-out</font></a></li>
                                  <li><a href="#"><font color="white">Settings</font></a></li>
                                
                              </ul>
                        </div>
                  </div>
         </nav>


      <div className="container-fluid bg-11 text-center">
        
          <center>
                  <div className="tablestyle">
                      <table>
                        <tbody>
                                <tr>
                                  <td><h3>Buy Tokens</h3></td>
                                </tr>

                                <tr>
                                  <td>Number of Tokens to buy</td></tr>
                                <tr>
                                  <td><font color="black"><input type="text" id="houseId" /></font></td></tr>
                                <tr>
                                  <td>Total Price</td></tr>
                                <tr><td><font color="black"><input type="text" id="numToken" value={numTok} onChange={(e) => { setNumTok(e.target.value) }} /></font></td>
                                </tr>
                                <tr><td>Credit/Debit cards to use:</td>
                                </tr>
                                <tr><td><input type="checkbox" value="sample" className="custom-control-input" />
                                  <label className="custom-control-label" htmlFor="customCheck">Mastercard ending with 5005</label></td>
                                </tr>
                                <tr><td><input type="checkbox" value="sample" className="custom-control-input" />
                                  <label className="custom-control-label" htmlFor="customCheck">Mastercard ending with 4375</label></td>
                                </tr>

                                <tr><td><button className="btn3" onClick={buy}>Buy</button></td></tr>


                        </tbody>
                      </table>
                  </div>
          </center>

      </div>



      <footer className="container-fluid bg-4 text-center">
        <p><b>Contact us  </b> <a href=""><font color="white">contactuspage.com</font></a></p>
      </footer>

    </div>
  )
}

export default BuyTokens
