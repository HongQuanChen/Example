package com.mybatis.swschrwx.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mybatis.swschrwx.pojo.ResumeStatus;

public interface ResumeStatusService {
	/*
	 * 查询该用户的所有简历的创建时间、更新时间
	 */
	List<ResumeStatus> selectResumeStatus(String IDNumber);
}
