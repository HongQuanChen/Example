package com.mybatis.swschrwx.pojo;

public class Registered {
	private String IDNumber;
	private String Password1;
	private String Password2;
	private String PhoneNumber;
	private String EmailAddress;
	
	/*
	 * IDNumber set,get
	 */
	public void setIDNumber(String x) {
		this.IDNumber = x;
	}
	public String getIDNumber() {
		return this.IDNumber;
	}
	/*
	 * Password1 set,get
	 */
	public void setPassword1(String x) {
		this.Password1 = x;
	}
	public String getPassword1() {
		return this.Password1;
	}
	/*
	 * Password2 set,get
	 */
	public void setPassword2(String x) {
		this.Password2 = x;
	}
	public String getPassword2() {
		return this.Password2;
	}
	/*
	 * PhoneNumber set,get
	 */
	public void setPhoneNumber(String x) {
		this.PhoneNumber = x;
	}
	public String getPhoneNumber() {
		return this.PhoneNumber;
	}
	/*
	 * emailAddress set,get
	 */
	public void setEmailAddress(String x) {
		this.EmailAddress = x;
	}
	public String getEmailAddress() {
		return this.EmailAddress;
	}

}
