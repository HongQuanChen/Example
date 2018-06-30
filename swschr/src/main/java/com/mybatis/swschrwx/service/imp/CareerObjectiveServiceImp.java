package com.mybatis.swschrwx.service.imp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mybatis.swschrwx.model.CareerObjectiveM;
import com.mybatis.swschrwx.pojo.CareerObjective;
import com.mybatis.swschrwx.service.CareerObjectiveService;

@Service("CareerObjectiveService")
public class CareerObjectiveServiceImp implements CareerObjectiveService {
	@Autowired CareerObjectiveM cobm;
	
	/*
	 * 插入求职意向
	 */
	public void insertCareerObjective(Long CareerObjectiveId,
					String IDNumber,
					Long NatureOfTheWork,
					String WorkPlace,
					Long ExpectedSalary,
					Long WorkStatus,
					String CreateTime) {
				this.cobm.insertCareerObjective(CareerObjectiveId, IDNumber, NatureOfTheWork, WorkPlace, ExpectedSalary, WorkStatus, CreateTime);
			}
	/*
	 * 更新求职意向
	 */
	public int updateCareerObjective(Long CareerObjectiveId,
						String IDNumber,
						Long NatureOfTheWork,
						String WorkPlace,
						Long ExpectedSalary,
						Long WorkStatus,
						String UpdateTime) {
					return this.cobm.updateCareerObjective(CareerObjectiveId, IDNumber, NatureOfTheWork, WorkPlace, ExpectedSalary, WorkStatus, UpdateTime);
				}
	/*
	 * 查询是否有该条求职意向信息
	 */
	public int selectCareerObjective(Long CareerObjectiveId,
						String IDNumber) {
					return this.cobm.selectCareerObjective(CareerObjectiveId, IDNumber);
				}
	/*
	 * 查询该用户的求职意向信息
	 */
	public CareerObjective selectCareerObjectiveAll(Long CareerObjectiveId,
						String IDNumber) {
		return this.cobm.selectCareerObjectiveAll(CareerObjectiveId, IDNumber);
	}
	/*
	 * 删除该用户的求职意向信息
	 */
	public int deleteCareerObjective(Long CareerObjectiveId,
						String IDNumber) {
		return this.cobm.deleteCareerObjective(CareerObjectiveId, IDNumber);
	}

}
