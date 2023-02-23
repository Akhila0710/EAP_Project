package de.hnu.tottak;

import java.io.Serializable;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Entity;

@Entity  //(name="") to change DB Table Name
public class PublicUser implements Serializable {
	@Id @GeneratedValue
	private long id;
	@Column(nullable = false, unique = true, length=50)
	private String email;
	@Column(nullable = false, length=64)
	private String password;
	@Column(nullable = false, length=30)
	private String fname;
	@Column(nullable = false, length=30)
	private String lname;
	@Column(length=30)
	private String cardname;
	@Column(length=12)
	private String cardnumber;

	public PublicUser() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PublicUser(String email, String password, String fname, String lname, String cardname, String cardnumber) {
		super();
		this.email = email;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.cardname = cardname;
		this.cardnumber = cardnumber;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCardname() {
		return cardname;
	}

	public void setCardname(String cardname) {
		this.cardname = cardname;
	}

	public String getCardnumber() {
		return cardnumber;
	}

	public void setCardnumber(String cardnumber) {
		this.cardnumber = cardnumber;
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

}
