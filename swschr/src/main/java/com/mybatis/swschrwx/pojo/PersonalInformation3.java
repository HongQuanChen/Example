package com.mybatis.swschrwx.pojo;

import java.util.Base64;

public class PersonalInformation3 {
	private String Avatar;
	private String Name;
	private Long Sex;
	private String DateOfBirth;
	private String IDnumber;
	private String PhoneNumber;
	private String ToWorkTime;
	private String AccountLocation;
	private String CurrentCity;
	private String EmailAddress;
	private Long MaritalStatus;
	

	
	public PersonalInformation3(String a,String n, Long s,
			String d,String i,String p,String t,
			String ac,String c,String e,
			Long m){
		this.Avatar = a;
		this.Name = n;
		this.Sex = s;
		this.DateOfBirth = d;
		this.IDnumber = i;
		this.PhoneNumber = p;
		this.ToWorkTime = t;
		this.AccountLocation = ac;
		this.CurrentCity = c;
		this.EmailAddress = e;
		this.MaritalStatus = m;
	}
	
	/*
	 * Avatar set,get
	 */
	public void setAvatar(String x) {
		this.Avatar = x;
	}
	public String getAvatar() {
		return this.Avatar;
	}
	/*
	 * Name set,get
	 */
	public void setName(String x) {
		this.Name = x;
	}
	public String getName() {
		return this.Name;
	}
	/*
	 * Sex set,get
	 */
	public void setSex(Long x) {
		this.Sex = x;
	}
	public Long getSex() {
		return this.Sex;
	}
	/*
	 * DateOfBirth set,get
	 */
	public void setDateOfBirth(String x) {
		this.DateOfBirth = x;
	}
	public String getDateOfBirth() {
		return this.DateOfBirth;
	}
	/*
	 * IDnumber set,get
	 */
	public void setIDnumber(String x) {
		this.IDnumber = x;
	}
	public String getIDnumber() {
		return this.IDnumber;
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
	 * ToWorkTime set,get
	 */
	public void setToWorkTime(String x) {
		this.ToWorkTime = x;
	}
	public String getToWorkTime() {
		return this.ToWorkTime;
	}
	/*
	 * AccountLocation set,get
	 */
	public void setAccountLocation(String x) {
		this.AccountLocation = x;
	}
	public String getAccountLocation() {
		return this.AccountLocation;
	}
	/*
	 * CurrentCity set,get
	 */
	public void setCurrentCity(String x) {
		this.CurrentCity = x;
	}
	public String getCurrentCity() {
		return this.CurrentCity;
	}
	/*
	 * EmailAddress set,get
	 */
	public void setEmailAddress(String x) {
		this.EmailAddress = x;
	}
	public String getEmailAddress() {
		return this.EmailAddress;
	}
	/*
	 * MaritalStatus set,get
	 */
	public void setMaritalStatus(Long x) {
		this.MaritalStatus = x;
	}
	public Long getMaritalStatus() {
		return this.MaritalStatus;
	}
	
}
