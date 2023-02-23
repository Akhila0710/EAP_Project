import './privateCustomerRegistration.css'
import { useNavigate } from "react-router-dom";

function PrivateCustomerRegistration() {

    const navigate = useNavigate();

  async function createUser() {
    const data = await fetch("http://localhost:9080/TotTak/service/toktak/pregister");
    const json = await data.json();
    navigate("/success");
  }

    return(
        <div>
            <nav className="navbar navbar-default">
                <div className="container">
                <div className="navbar-header">
                <div className="navbar-brand" href="#"><a href="/homeScreen"><img src="/static/Logo.png" alt="" width="140" height="100" /></a></div>
                </div></div></nav>

                <div className="container-fluid bg-1 text-center">
                <h3>Set-Up Private Customer Account <br /><br/></h3>


                <center>
                <div className="tablestyle">                             

                    
                    <table>
                        <tr>
                            <td><label for="fname" style={{ fontcolor: "white" }}>First Name</label><br/></td>
                            <td><label for="lname" style={{ fontcolor: "white" }}>Last Name</label><br/></td>
                        </tr>
                        <tr>
                            <td class="pd-bt"><input type="text" id="fname" name="fname" required/></td>
                            <td class="pd-bt"><input type="text" id="lname" name="lname" required/></td>
                        </tr>
                        <tr>
                            <td><label for="email" style={{ fontcolor: "white" }}>E-Mail Adress</label></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="pd-bt"><input type="email" id="email" name="email" style={{ width:300 }} required/></td>
                        </tr>
                        <tr>
                            <td ><label for="passwd" style={{ fontcolor: "white" }}>Password</label></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="pd-bt"><input type="password" id="passwd" name="passwd" style={{ width:200 }} required/></td>
                        </tr>
                        <tr>
                            <td><label for="cpasswd" sstyle={{ fontcolor: "white" }}>Confirm Password</label></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="pd-bt"><input type="password" id="cpasswd" name="cpasswd" style={{ width:200 }} required/></td>
                        </tr><tr></tr>
                        
                        <tr><td colspan="2"><input type="checkbox" value="sample" className="custom-control-input" />
                                  <label className="custom-control-label" htmlFor="customCheck"> I agree to the Terms & Conditions</label></td>
                                </tr>
                    </table></div></center>
                <br/>
                <div class="bottom">
                    <a href="C-Setup-new-account.html" class="btn" id="left">Cancel</a>&nbsp;
                    <input type="submit" value="Continue" class="btn" onClick={createUser}/>
                </div>
                    </div>

        </div>

    )
}
export default PrivateCustomerRegistration
