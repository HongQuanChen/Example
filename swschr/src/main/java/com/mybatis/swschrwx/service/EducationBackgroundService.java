package com.mybatis.swschrwx.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mybatis.swschrwx.pojo.EducationBackground;

public interface EducationBackgroundService {
	/*
	 * 插入教育背景
	 */
	void insertEducationBackground(Long EducationBackgroundId,
			String SchoolName,
			String ProfessionalTitle,
			Long Degree,
			String AdmissionTime,
			String GraduationTime,
			String IDNumber,
			Long Number,
			String CreateDate);
	/*
	 * 更新教育背景
	 */
	int updateEducationBackground(Long EducationBackgroundId,
			String SchoolName,
			String ProfessionalTitle,
			Long Degree,
			String AdmissionTime,
			String GraduationTime,
			String IDNumber,
			Long Number,
			String UpdateDate);
	/*
	 * 查询该条教育背景信息是否存在
	 */
	int selectEducationBackground(Long EducationBackgroundId,
			String IDNumber,
			Long Number);
	/*
	 * 查询该条教育背景信息是否存在
	 */
	List<EducationBackground> selectEducationBackgroundAll(Long EducationBackgroundId,
			String IDNumber);
	/*
	 * 删除某条教育背景信息
	 */
	int deleteEducationBackground(Long EducationBackgroundId,
			String IDNumber,
			Long Number);
	/*
	 * 删除该用户的某份简历下的所有教育背景信息
	 */
	int deleteEducationBackgroundAll(Long EducationBackgroundId,
			String IDNumber);
}
