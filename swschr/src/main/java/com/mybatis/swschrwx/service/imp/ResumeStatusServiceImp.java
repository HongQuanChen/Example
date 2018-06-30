package com.mybatis.swschrwx.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mybatis.swschrwx.model.ResumeStatusM;
import com.mybatis.swschrwx.pojo.ResumeStatus;
import com.mybatis.swschrwx.service.ResumeStatusService;

@Service("ResumeStatusService")
public class ResumeStatusServiceImp implements ResumeStatusService {
	@Autowired
	ResumeStatusM rsm;
	
	/*
	 * 查询该用户的所有简历的创建时间、更新时间
	 */
	public List<ResumeStatus> selectResumeStatus(String IDNumber){
		return this.rsm.selectResumeStatus(IDNumber);
	}

}
