package com.mybatis.swschrwx.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mybatis.swschrwx.model.EducationBackgroundM;
import com.mybatis.swschrwx.pojo.EducationBackground;
import com.mybatis.swschrwx.service.EducationBackgroundService;

@Service("EducationBackgroundService")
public class EducationBackgroundServiceImp implements EducationBackgroundService {
	@Autowired
	private EducationBackgroundM ebm;
	/*
	 * 插入教育背景
	 */
	public void insertEducationBackground(Long EducationBackgroundId,
						String SchoolName,
						String ProfessionalTitle,
						Long Degree,
						String AdmissionTime,
						String GraduationTime,
						String IDNumber,
						Long Number,
						String CreateDate) {
		this.ebm.insertEducationBackground(EducationBackgroundId, SchoolName, ProfessionalTitle, Degree, AdmissionTime, GraduationTime, IDNumber, Number, CreateDate);
	}
	/*
	 * 更新教育背景
	 */
	public int updateEducationBackground(Long EducationBackgroundId,
						String SchoolName,
						String ProfessionalTitle,
						Long Degree,
						String AdmissionTime,
						String GraduationTime,
						String IDNumber,
						Long Number,
						String UpdateDate) {
		return this.ebm.updateEducationBackground(EducationBackgroundId, SchoolName, ProfessionalTitle, Degree, AdmissionTime, GraduationTime, IDNumber, Number, UpdateDate);
	}
	/*
	 * 查询该条教育背景信息是否存在
	 */
	public int selectEducationBackground(Long EducationBackgroundId,
						String IDNumber,
						Long Number) {
		return this.ebm.selectEducationBackground(EducationBackgroundId, IDNumber, Number);
	}
	/*
	 * 查询该条教育背景信息是否存在
	 */
	public List<EducationBackground> selectEducationBackgroundAll(Long EducationBackgroundId,
						String IDNumber){
		return this.ebm.selectEducationBackgroundAll(EducationBackgroundId, IDNumber);
	}
	/*
	 * 删除某条教育背景信息
	 */
	public int deleteEducationBackground(Long EducationBackgroundId,
			String IDNumber,
			Long Number) {
		return this.ebm.deleteEducationBackground(EducationBackgroundId, IDNumber, Number);
	}
	/*
	 * 删除该用户的某份简历下的所有教育背景信息
	 */
	public int deleteEducationBackgroundAll(Long EducationBackgroundId,
					String IDNumber) {
		return this.ebm.deleteEducationBackgroundAll(EducationBackgroundId, IDNumber);
	}
}
