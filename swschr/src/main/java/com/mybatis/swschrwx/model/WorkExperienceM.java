package com.mybatis.swschrwx.model;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mybatis.swschrwx.pojo.WorkExperience;

public interface WorkExperienceM {
	/*
	 * 插入工作经验
	 */
	void insertWorkExperience(@Param("WorkExperienceId") Long WorkExperienceId,
			@Param("CompanyName") String CompanyName,
			@Param("JobTitle") String JobTitle,
			@Param("ZWStartTime") String ZWStartTime,
			@Param("ZWEndTime") String ZWEndTime,
			@Param("ZWSalary") Long ZWSalary,
			@Param("ZWGzms") String ZWGzms,
			@Param("IDNumber") String IDNumber,
			@Param("Number") Long Number,
			@Param("CreateDate") String CreateDate);
	/*
	 * 更新工作经验
	 */
	int updateWorkExperience(@Param("WorkExperienceId") Long WorkExperienceId,
			@Param("CompanyName") String CompanyName,
			@Param("JobTitle") String JobTitle,
			@Param("ZWStartTime") String ZWStartTime,
			@Param("ZWEndTime") String ZWEndTime,
			@Param("ZWSalary") Long ZWSalary,
			@Param("ZWGzms") String ZWGzms,
			@Param("IDNumber") String IDNumber,
			@Param("Number") Long Number,
			@Param("UpdateDate") String UpdateDate);
	/*
	 * 查询是否有该条工作经验记录
	 */
	int selectWorkExperience(@Param("WorkExperienceId") Long WorkExperienceId,
			@Param("IDNumber") String IDNumber,
			@Param("Number") Long Number);
	/*
	 * 查询该用户相应简历下的所有工作经验记录
	 */
	List<WorkExperience> selectWorkExperienceAll(@Param("IDNumber") String IDNumber,
			@Param("WorkExperienceId") Long WorkExperienceId);
	/*
	 * 删除某条工作经验信息
	 */
	int deleteWorkExperience(@Param("WorkExperienceId") Long WorkExperienceId,
			@Param("IDNumber") String IDNumber,
			@Param("Number") Long Number);
	/*
	 * 删除该用户的某份简历下的所有工作经验信息
	 */
	int deleteWorkExperienceAll(@Param("WorkExperienceId") Long WorkExperienceId,
			@Param("IDNumber") String IDNumber);

}
