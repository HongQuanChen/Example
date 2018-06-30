package com.mybatis.swschrwx.model;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.mybatis.swschrwx.pojo.Description;
import com.mybatis.swschrwx.pojo.JobDescription;
import com.mybatis.swschrwx.pojo.Jobdetails;

public interface DescriptionM {
	Jobdetails selectById(@Param("JobDetailsId") Long JobDetailsId);
	List<Description> descriptionById(@Param("JobDetailsId") Long JobDetailsId);
	List<JobDescription> descriptionQuaById(@Param("JobDetailsId") Long JobDetailsId);

}
