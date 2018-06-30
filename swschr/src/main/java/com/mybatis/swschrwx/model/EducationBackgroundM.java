package com.mybatis.swschrwx.model;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mybatis.swschrwx.pojo.EducationBackground;

public interface EducationBackgroundM {
	/*
	 * 插入教育背景
	 */
	void insertEducationBackground(@Param("EducationBackgroundId") Long EducationBackgroundId,
			@Param("SchoolName") String SchoolName,
			@Param("ProfessionalTitle") String ProfessionalTitle,
			@Param("Degree") Long Degree,
			@Param("AdmissionTime") String AdmissionTime,
			@Param("GraduationTime") String GraduationTime,
			@Param("IDNumber") String IDNumber,
			@Param("Number") Long Number,
			@Param("CreateDate") String CreateDate);
	/*
	 * 更新教育背景
	 */
	int updateEducationBackground(@Param("EducationBackgroundId") Long EducationBackgroundId,
			@Param("SchoolName") String SchoolName,
			@Param("ProfessionalTitle") String ProfessionalTitle,
			@Param("Degree") Long Degree,
			@Param("AdmissionTime") String AdmissionTime,
			@Param("GraduationTime") String GraduationTime,
			@Param("IDNumber") String IDNumber,
			@Param("Number") Long Number,
			@Param("UpdateDate") String UpdateDate);
	/*
	 * 查询该条教育背景信息是否存在
	 */
	int selectEducationBackground(@Param("EducationBackgroundId") Long EducationBackgroundId,
			@Param("IDNumber") String IDNumber,
			@Param("Number") Long Number);
	/*
	 * 查询该用户相应简历下的所有教育背景信息
	 */
	List<EducationBackground> selectEducationBackgroundAll(@Param("EducationBackgroundId") Long EducationBackgroundId,
			@Param("IDNumber") String IDNumber);
	/*
	 * 删除某条教育背景信息
	 */
	int deleteEducationBackground(@Param("EducationBackgroundId") Long EducationBackgroundId,
			@Param("IDNumber") String IDNumber,
			@Param("Number") Long Number);
	/*
	 * 删除该用户的某份简历下的所有教育背景信息
	 */
	int deleteEducationBackgroundAll(@Param("EducationBackgroundId") Long EducationBackgroundId,
			@Param("IDNumber") String IDNumber);

}
