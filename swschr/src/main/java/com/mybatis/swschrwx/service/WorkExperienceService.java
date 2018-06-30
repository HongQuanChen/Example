package com.mybatis.swschrwx.service;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mybatis.swschrwx.pojo.WorkExperience;

public interface WorkExperienceService {
	/*
	 * 插入工作经验
	 */
	void insertWorkExperience(Long WorkExperienceId,
			String CompanyName,
			String JobTitle,
			String ZWStartTime,
			String ZWEndTime,
			Long ZWSalary,
			String ZWGzms,
			String IDNumber,
			Long Number,
			String CreateDate);
	/*
	 * 更新工作经验
	 */
	int updateWorkExperience(Long WorkExperienceId,
			String CompanyName,
			String JobTitle,
			String ZWStartTime,
			String ZWEndTime,
			Long ZWSalary,
			String ZWGzms,
			String IDNumber,
			Long Number,
			String UpdateDate);
	/*
	 * 查询是否有该条工作经验记录
	 */
	int selectWorkExperience(Long WorkExperienceId,
			String IDNumber,
			Long Number);
	/*
	 * 查询该用户相应简历下的所有工作经验记录
	 */
	List<WorkExperience> selectWorkExperienceAll(String IDNumber,
			Long WorkExperienceId);
	/*
	 * 删除某条工作经验信息
	 */
	int deleteWorkExperience(Long WorkExperienceId,
			String IDNumber,
			Long Number);
	/*
	 * 删除该用户的某份简历下的所有工作经验信息
	 */
	int deleteWorkExperienceAll(Long WorkExperienceId,
			String IDNumber);

}
