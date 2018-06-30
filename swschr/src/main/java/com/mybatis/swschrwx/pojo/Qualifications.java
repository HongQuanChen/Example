package com.mybatis.swschrwx.pojo;

public class Qualifications {
	private Long QualificationsId;
	private String QualificationsText;
	
	/*
	 * QualificationsId set ,get
	 */
	public void setQualificationsId(Long x) {
		this.QualificationsId = x;
	}
	public Long getQualificationsId() {
		return this.QualificationsId;
	}
	/*
	 * QualificationsText set,get
	 */
	public void setQualificationsText(String x) {
		this.QualificationsText = x;
	}
	public String getQualificationsText() {
		return this.QualificationsText;
	}

}
