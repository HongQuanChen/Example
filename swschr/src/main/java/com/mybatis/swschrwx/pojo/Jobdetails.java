package com.mybatis.swschrwx.pojo;

import java.util.Date;

public class Jobdetails {
	private Long JobDetailsId;
	//private Long companyid;
	private String PositionTitle;
	private String ReleaseDate;
	private Long Education;
	private Long jobType;
	private String Department;
	private Long RecruitmentActivities;
	private String Place;
	private Company company;
	
	/*
	 * JobDetailsId set,get
	 */
	public void setJobDetailsId(Long x) {
		this.JobDetailsId = x;
	}
	public Long getJobDetailsId() {
		return this.JobDetailsId;
	}
	/*
	 * companyid set,get
	 */
	/*public void setCompanyid(Long x) {
		this.companyid = x;
	}
	public Long getCompanyid() {
		return this.companyid;
	}*/
	/*
	 * PositionTitle set,get
	 */
	public void setPositionTitle(String x) {
		this.PositionTitle = x;
	}
	public String getPositionTitle() {
		return this.PositionTitle;
	}
	/*
	 * ReleaseDate set,get
	 */
	public void setReleaseDate(String x) {
		this.ReleaseDate = x;
	}
	public String getReleaseDate() {
		return this.ReleaseDate;
	}
	/*
	 * Education set,get
	 */
	public void setEducation(Long x) {
		this.Education = x;
	}
	public Long getEducation() {
		return this.Education;
	}
	/*
	 * jobType set,get
	 */
	public void setJobType(Long x) {
		this.jobType = x;
	}
	public Long getJobType() {
		return this.jobType;
	}
	/*
	 * Department set,get
	 */
	public void setDepartment(String x) {
		this.Department = x;
	}
	public String getDepartment() {
		return this.Department;
	}
	/*
	 * RecruitmentActivities set,get
	 */
	public void setRecruitmentActivities(Long x) {
		this.RecruitmentActivities = x;
	}
	public Long getRecruitmentActivities() {
		return this.RecruitmentActivities;
	}
	/*
	 * place set,get
	 */
	public void setPlace(String x) {
		this.Place = x;
	}
	public String getPlace() {
		return this.Place;
	}
	/*
	 * company set,get
	 */
	public void setCompany(Company x) {
		this.company = x;
	}
	public Company getCompany() {
		return this.company;
	}
}
