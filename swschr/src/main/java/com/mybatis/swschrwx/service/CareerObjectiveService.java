package com.mybatis.swschrwx.service;

import org.apache.ibatis.annotations.Param;

import com.mybatis.swschrwx.pojo.CareerObjective;

public interface CareerObjectiveService {
	/*
	 * 插入求职意向
	 */
	void insertCareerObjective(Long CareerObjectiveId,
			String IDNumber,
			Long NatureOfTheWork,
			String WorkPlace,
			Long ExpectedSalary,
			Long WorkStatus,
			String CreateTime);
	/*
	 * 更新求职意向
	 */
	int updateCareerObjective(Long CareerObjectiveId,
			String IDNumber,
			Long NatureOfTheWork,
			String WorkPlace,
			Long ExpectedSalary,
			Long WorkStatus,
			String UpdateTime);
	/*
	 * 查询是否有该条求职意向信息
	 */
	int selectCareerObjective(Long CareerObjectiveId,
			String IDNumber);
	/*
	 * 查询该用户的求职意向信息
	 */
	CareerObjective selectCareerObjectiveAll(Long CareerObjectiveId,
			String IDNumber);
	/*
	 * 删除该用户的求职意向信息
	 */
	int deleteCareerObjective(Long CareerObjectiveId,
			String IDNumber);
}
