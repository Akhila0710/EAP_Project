package de.hnu.tottak;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.json.bind.JsonbBuilder;

import javax.json.bind.Jsonb;

/**
 * Session Bean implementation class TotTakService
 */
@Stateless
@LocalBean
@Path("toktak")
public class TotTakService {
		@PersistenceContext(name="TotTakDB")
		private EntityManager em;

//	public TotTakService() {
//	}

	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public PublicUser getUser(@PathParam("id") long id) {
		return new PublicUser("Max@test.com", "1324", "Max", "Mustermann", "Mastercard", "123456789123");
	}

	
//---------------------------------- OLD VERSION ----------------------------------------
	
//	@POST
//	@Path("/login")
//	@Produces(MediaType.TEXT_HTML)
//	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
//
//	public String AuthUser(@FormParam("email") String email, @FormParam("password") String password) {
//		// TODO DB-connection, DB-Request
//		if (email == "Max@test.com" & password == "123") {
//			return "K-Dashboard.html";
//		}
//		throw new RuntimeException("POST: User not found");
//	}
	
@GET
@Path("{userEmail}, {userPassword}")
@Produces(MediaType.APPLICATION_JSON)
public String getUser(@PathParam("userEmail") String userEmail, @PathParam("userPassword") String userPassword) {
	if(em.find(PublicUser.class, userEmail) != null) { //How to do Validation with PW???
		return "PrivateUserDashboard.html";
	}
	throw new RuntimeException("POST: User not found"); 
}


	@POST
	@Path("/pregister") // register private User
	@Produces(MediaType.APPLICATION_JSON)
	//@Consumes(MediaType.APPLICATION_FORM_URLENCODED) --> Wait for connection with HTML
	@Consumes(MediaType.APPLICATION_JSON)

	//public PublicUser createpUser(@FormParam("email") String email, @FormParam("password") String password,
		//	@FormParam("fname") String fname, @FormParam("lname") String lname) {
	public PublicUser createpUser(String json) {
//		PublicUser newuser = new PublicUser();
//		newuser.setEmail(email);
//		newuser.setPassword(password);
//		newuser.setFname(fname);
//		newuser.setLname(lname);
		Jsonb jsonb = JsonbBuilder.create();
		PublicUser pu = jsonb.fromJson(json, PublicUser.class);
		em.persist(pu);
		return pu;

		//return newuser;
	}

	@POST
	@Path("/cregister") // register commercial User
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)

	public ComUser createComUser(@FormParam("email") String email, @FormParam("password") String password,
			@FormParam("fname") String fname, @FormParam("lname") String lname, @FormParam("cname") String cname, // company-name
			@FormParam("cadr") String cadr) // company-address
	 {
		ComUser newuser = new ComUser();
		newuser.setEmail(email);
		newuser.setPassword(password);
		newuser.setFname(fname);
		newuser.setLname(lname);
		newuser.setCname(cname);
		newuser.setCadr(cadr);

		return newuser;
	}
	
	@POST
	@Path("/upload_house") // upload house
	@Produces(MediaType.APPLICATION_JSON)
	//@Consumes(MediaType.APPLICATION_FORM_URLENCODED) --> Wait for connection with HTML
	@Consumes(MediaType.APPLICATION_JSON)

	//public PublicUser createpUser(@FormParam("name") String name, @FormParam("address") String address,
		//	@FormParam("details") String details, @FormParam("value") INT value, @FormParam("tokprice") INT tokprice) {
	public House createHouse(String json) {
//		House ho = new House();
//		ho.setName(name);
//		ho.setAddress(address);
//		ho.setDetails(details);
//		ho.setValue(value);
//		ho.setTokprice(tokprice);
		
		Jsonb jsonb = JsonbBuilder.create();
		House ho = jsonb.fromJson(json, House.class);
		em.persist(ho);
		return ho;
	}
	
	@GET
	@Path("{houseId}")
	@Produces(MediaType.APPLICATION_JSON)
	public House getHouse(@PathParam("houseId") long houseId) {
		return em.find(House.class, houseId);
                
	}
	
	@POST
	@Path("/buy_tokens")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public House buyToken(@FormParam("numToken") Integer numToken, @PathParam("houseId") long houseId) {
		House ho = em.find(House.class, houseId);
		ho.setNumsoldtoken(numToken);
		
		em.persist(ho);
		return ho;
	}
	
	
	
	
}
