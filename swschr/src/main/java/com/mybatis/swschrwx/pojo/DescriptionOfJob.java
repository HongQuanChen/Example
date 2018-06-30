package com.mybatis.swschrwx.pojo;

public class DescriptionOfJob {
	private Long DescriptionOfJobId;
	private String DescriptionOfJobText;
	
	/*
	 * DescriptionOfJobId set ,get
	 */
	public void setDescriptionOfJobId(Long x) {
		this.DescriptionOfJobId = x;
	}
	public Long getDescriptionOfJobId() {
		return this.DescriptionOfJobId;
	}
	/*
	 * DescriptionOfJobText set,get
	 */
	public void setDescriptionOfJobText(String x) {
		this.DescriptionOfJobText = x;
	}
	public String getDescriptionOfJobText() {
		return this.DescriptionOfJobText;
	}

}
