package com.mybatis.swschrwx.pojo;

public class ResumeStatus {
	private Long ResumeId;
	private String CreateTime;
	private String UpdateTime;
	
	/*
	 * ResumeId set,get
	 */
	public void setResumeId(Long x) {
		this.ResumeId = x;
	}
	public Long getResumeId() {
		return this.ResumeId;
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
