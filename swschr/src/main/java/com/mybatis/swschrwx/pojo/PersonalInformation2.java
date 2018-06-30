package com.mybatis.swschrwx.pojo;

import java.util.Date;

public class PersonalInformation2 {
	private byte[] Avatar;
	private String ImgType;
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
	
	/*
	 * Avatar set,get
	 */
	public void setAvatar(byte[] x) {
		this.Avatar = x;
	}
	public byte[] getAvatar() {
		return this.Avatar;
	}
	/*
	 * ImgType set,get
	 */
	public void setImgType(String x) {
		this.ImgType = x;
	}
	public String getImgType() {
		return this.ImgType;
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
