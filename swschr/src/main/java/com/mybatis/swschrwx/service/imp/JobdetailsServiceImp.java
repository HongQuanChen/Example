package com.mybatis.swschrwx.service.imp;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mybatis.swschrwx.model.JobdetailsM;
import com.mybatis.swschrwx.pojo.Jobdetails;
import com.mybatis.swschrwx.service.JobdetailsService;

@Component("searchService")
public class JobdetailsServiceImp implements JobdetailsService {
	@Autowired
	private JobdetailsM jobDao;
	
	public List<Jobdetails> searchJobdetails(String[] PositionTitle,
			String ReleaseDate,
			Long Education,
			Long jobType,
			String Department,
			Long RecruitmentActivities,
			String Place,
			String[] CompanyName){
		return jobDao.selectByCondition(PositionTitle,ReleaseDate,Education,
				jobType,Department,RecruitmentActivities,Place,CompanyName);
	}

}
