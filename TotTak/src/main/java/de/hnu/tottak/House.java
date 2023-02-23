package de.hnu.tottak;

import java.io.Serializable;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Entity;

@Entity // (name="") to change DB Table Name
public class House implements Serializable {
	@Id
	@GeneratedValue
	private long id;
	@Column(nullable = false, unique = true, length = 30)
	private String name;
	@Column(length = 50)
	private String address;
	@Column(length = 100)
	private String details;
	@Column(nullable = false) // Define data size?
	private int value;
	@Column(nullable = false)
	private int tokprice;
	@Column(columnDefinition = "integer default 0")
	private int numsoldtoken;

	public House() {
		super();
		// TODO Auto-generated constructor stub
	}

	public House(long id, String name, String address, String details, int value, int tokprice, int numsoldtoken) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.details = details;
		this.value = value;
		this.tokprice = tokprice;
		this.numsoldtoken = numsoldtoken;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	public int getTokprice() {
		return tokprice;
	}

	public void setTokprice(int tokprice) {
		this.tokprice = tokprice;
	}
	
	public int getNumsoldtoken() {
		return numsoldtoken;
	}

	public void setNumsoldtoken(int numsoldtoken) {
		this.numsoldtoken = numsoldtoken;
	}
	

}
