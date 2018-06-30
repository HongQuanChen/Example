package com.mybatis.swschrwx.pojo;

public class CareerObjective {
	private Long CareerObjectiveId;
	private String IDNumber;
	private Long NatureOfTheWork;
	private String WorkPlace;
	private Long ExpectedSalary;
	private Long WorkStatus;
	private String CreateTime;
	private String UpdateTime;
	
	/*
	 * CareerObjectiveId set,get
	 */
	public void setCareerObjectiveId(Long x) {
		this.CareerObjectiveId = x;
	}
	public Long getCareerObjectiveId() {
		return this.CareerObjectiveId;
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
	 * NatureOfTheWork set,get
	 */
	public void setNatureOfTheWork(Long x) {
		this.NatureOfTheWork = x;
	}
	public Long getNatureOfTheWork() {
		return this.NatureOfTheWork;
	}
	/*
	 * WorkPlace set,get
	 */
	public void setWorkPlace(String x) {
		this.WorkPlace = x;
	}
	public String getWorkPlace() {
		return this.WorkPlace;
	}
	/*
	 * ExpectedSalary set,get
	 */
	public void setExpectedSalary(Long x) {
		this.ExpectedSalary = x;
	}
	public Long getExpectedSalary() {
		return this.ExpectedSalary;
	}
	/*
	 * WorkStatus set,get
	 */
	public void setWorkStatus(Long x) {
		this.WorkStatus = x;
	}
	public Long getWorkStatus() {
		return this.WorkStatus;
	}
	/*
	 * CreateTime set,get
	 */
	public void setCreateTime(String x) {
		this.CreateTime = x;
	}
	public String getCreateTime() {
		return this.CreateTime;
	}
	/*
	 * UpdateTime set,get
	 */
	public void setUpdateTime(String x) {
		this.UpdateTime = x;
	}
	public String getUpdateTime() {
		return this.UpdateTime;
	}

}
