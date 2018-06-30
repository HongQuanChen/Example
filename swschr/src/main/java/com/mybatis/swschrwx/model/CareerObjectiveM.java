package com.mybatis.swschrwx.model;

import org.apache.ibatis.annotations.Param;

import com.mybatis.swschrwx.pojo.CareerObjective;

public interface CareerObjectiveM {
	/*
	 * 插入求职意向
	 */
	void insertCareerObjective(@Param("CareerObjectiveId") Long CareerObjectiveId,
			@Param("IDNumber") String IDNumber,
			@Param("NatureOfTheWork") Long NatureOfTheWork,
			@Param("WorkPlace") String WorkPlace,
			@Param("ExpectedSalary") Long ExpectedSalary,
			@Param("WorkStatus") Long WorkStatus,
			@Param("CreateTime") String CreateTime);
	/*
	 * 更新求职意向
	 */
	int updateCareerObjective(@Param("CareerObjectiveId") Long CareerObjectiveId,
			@Param("IDNumber") String IDNumber,
			@Param("NatureOfTheWork") Long NatureOfTheWork,
			@Param("WorkPlace") String WorkPlace,
			@Param("ExpectedSalary") Long ExpectedSalary,
			@Param("WorkStatus") Long WorkStatus,
			@Param("UpdateTime") String UpdateTime);
	/*
	 * 查询是否有该条求职意向信息
	 */
	int selectCareerObjective(@Param("CareerObjectiveId") Long CareerObjectiveId,
			@Param("IDNumber") String IDNumber);
	/*
	 * 查询该用户的求职意向信息
	 */
	CareerObjective selectCareerObjectiveAll(@Param("CareerObjectiveId") Long CareerObjectiveId,
			@Param("IDNumber") String IDNumber);
	/*
	 * 删除该用户的求职意向信息
	 */
	int deleteCareerObjective(@Param("CareerObjectiveId") Long CareerObjectiveId,
			@Param("IDNumber") String IDNumber);

}
