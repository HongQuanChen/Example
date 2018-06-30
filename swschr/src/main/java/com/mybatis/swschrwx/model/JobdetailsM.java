package com.mybatis.swschrwx.model;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import com.mybatis.swschrwx.pojo.Jobdetails;


public interface JobdetailsM {
	/*
	 * 通过条件查询职位
	 */
	List<Jobdetails> selectByCondition(@Param("PositionTitle") String[] PositionTitle,
			@Param("ReleaseDate") String ReleaseDate,
			@Param("Education") Long Education,
			@Param("jobType") Long jobType,
			@Param("Department") String Department,
			@Param("RecruitmentActivities") Long RecruitmentActivities,
			@Param("Place") String Place,
			@Param("CompanyName") String[] CompanyName);

}
