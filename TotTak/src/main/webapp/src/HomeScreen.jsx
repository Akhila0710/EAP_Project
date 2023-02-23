import "./homeScreen.css"

  function homeScreen(){
    return(
      
      <div class="home-container1">
      <div class="main1">
        
      <br/><br/>
        <div class="logo1 center1">
          <img src='/static/Logo.png' alt="" />
        </div>
        <br /><br />

        <div class="expression1 center1">
          Your marketplace for buying, selling and Issuing real estate tokens
          
        </div>
        

        <div class="pre1 center1">
          AI-based prediction <br />
          Toktak is always with you 24/7
        </div>
        <br /><br/><br/>
        <div class="btn-group1">
          <input
            type="submit"
            value="Sign-in"
            class="btn"
            onclick="window.location.href='PrivateUserDashboard.html'"
          />
          <a href="/privateCustomerRegistration"> <input type="submit" value="New Account" class="btn"/></a>
        </div>
        <br /><br />
        <div class="about">
          <a href="#" class="about">About us</a>
        </div>
      </div>
    </div>
  
  
    )
  }
  export default homeScreen

    