package com.mybatis.swschrwx.model;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mybatis.swschrwx.pojo.ResumeStatus;

public interface ResumeStatusM {
	/*
	 * 查询该用户的所有简历的创建时间、更新时间
	 */
	List<ResumeStatus> selectResumeStatus(@Param("IDNumber") String IDNumber);

}
