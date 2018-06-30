package com.mybatis.swschrwx.pojo;

import java.util.Date;

public class WorkExperience {
	private Long WorkExperienceId;
	private String CompanyName;
	private String JobTitle;
	private String ZWStartTime;
	private String ZWEndTime;
	private Long ZWSalary;
	private String ZWGzms;
	private String IDNumber;
	private Long Number;
	private String CreateDate;
	private String UpdateDate;
	
	/*
	 * WorkExperienceId set,get
	 */
	public void setWorkExperienceId(Long x) {
		this.WorkExperienceId = x;
	}
	public Long getWorkExperienceId() {
		return this.WorkExperienceId;
	}
	/*
	 * CompanyName set,get
	 */
	public void setCompanyName(String x) {
		this.CompanyName = x;
	}
	public String getCompanyName() {
		return this.CompanyName;
	}
	/*
	 * JobTitle set,get
	 */
	public void setJobTitle(String x) {
		this.JobTitle = x;
	}
	public String getJobTitle() {
		return this.JobTitle;
	}
	/*
	 * ZWStartTime set,get
	 */
	public void setZWStartTime(String x) {
		this.ZWStartTime = x;
	}
	public String getZWStartTime() {
		return this.ZWStartTime;
	}
	/*
	 * ZWEndTime set,get
	 */
	public void setZWEndTime(String x) {
		this.ZWEndTime = x;
	}
	public String getZWEndTime() {
		return this.ZWEndTime;
	}
	/*
	 * ZWSalary set,get
	 */
	public void setZWSalary(Long x) {
		this.ZWSalary = x;
	}
	public Long getZWSalary() {
		return this.ZWSalary;
	}
	/*
	 * ZWEndTime set,get
	 */
	public void setZWGzms(String x) {
		this.ZWGzms = x;
	}
	public String getZWGzms() {
		return this.ZWGzms;
	}
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
	 * IDNumber set,get
	 */
	public void setNumber(Long x) {
		this.Number = x;
	}
	public Long getNumber() {
		return this.Number;
	}
	/*
	 * CreateDate set,get
	 */
	public void setCreateDate(String x) {
		this.CreateDate = x;
	}
	public String getCreateDate() {
		return this.CreateDate;
	}
	/*
	 * UpdateDate set,get
	 */
	public void setUpdateDate(String x) {
		this.UpdateDate = x;
	}
	public String getUpdateDate() {
		return this.UpdateDate;
	}

}
