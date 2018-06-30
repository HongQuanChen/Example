package com.mybatis.swschrwx.service.imp;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mybatis.swschrwx.model.WorkExperienceM;
import com.mybatis.swschrwx.pojo.WorkExperience;
import com.mybatis.swschrwx.service.WorkExperienceService;

@Service("WorkExperienceService")
public class WorkExperienceServiceImp implements WorkExperienceService {
	@Autowired
	WorkExperienceM wem;
	/*
	 * 插入工作经验
	 */
	public void insertWorkExperience(Long WorkExperienceId,
					String CompanyName,
					String JobTitle,
					String ZWStartTime,
					String ZWEndTime,
					Long ZWSalary,
					String ZWGzms,
					String IDNumber,
					Long Number,
					String CreateDate) {
		this.wem.insertWorkExperience(WorkExperienceId, CompanyName, JobTitle, ZWStartTime, ZWEndTime, ZWSalary, ZWGzms, IDNumber, Number, CreateDate);
	}
	/*
	 * 更新工作经验
	 */
	public int updateWorkExperience(Long WorkExperienceId,
					String CompanyName,
					String JobTitle,
					String ZWStartTime,
					String ZWEndTime,
					Long ZWSalary,
					String ZWGzms,
					String IDNumber,
					Long Number,
					String UpdateDate) {
		return this.wem.updateWorkExperience(WorkExperienceId, CompanyName, JobTitle, ZWStartTime, ZWEndTime, ZWSalary, ZWGzms, IDNumber, Number, UpdateDate);
	}
	/*
	 * 查询是否有该条工作经验记录
	 */
	public int selectWorkExperience(Long WorkExperienceId,
					String IDNumber,
					Long Number) {
		return this.wem.selectWorkExperience(WorkExperienceId, IDNumber, Number);
	}
	/*
	 * 查询该用户相应简历下的所有工作经验记录
	 */
	public List<WorkExperience> selectWorkExperienceAll(String IDNumber,
					Long WorkExperienceId){
		return this.wem.selectWorkExperienceAll(IDNumber, WorkExperienceId);
	}
	/*
	 * 删除某条工作经验信息
	 */
	public int deleteWorkExperience(Long WorkExperienceId,
					String IDNumber,
					Long Number) {
		return this.wem.deleteWorkExperience(WorkExperienceId, IDNumber, Number);
	}
	/*
	 * 删除该用户的某份简历下的所有工作经验信息
	 */
	public int deleteWorkExperienceAll(Long WorkExperienceId,
					String IDNumber) {
		return this.wem.deleteWorkExperienceAll(WorkExperienceId, IDNumber);
	}
}
