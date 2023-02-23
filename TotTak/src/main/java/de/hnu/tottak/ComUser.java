package de.hnu.tottak;

import java.io.Serializable;

public class ComUser implements Serializable {

	private String email;
	private String password;
	private String fname;
	private String lname;
	private String cname;
	private String cadr;

	public ComUser() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ComUser(String email, String password, String fname, String lname, String cname, String cadr) {
		super();
		this.email = email;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.cname = cname;
		this.cadr = cadr;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public String getCadr() {
		return cadr;
	}

	public void setCadr(String cadr) {
		this.cadr = cadr;
	}

}
