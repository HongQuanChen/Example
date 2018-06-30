package com.mybatis.swschrwx.service;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;

import com.mybatis.swschrwx.pojo.*;


public interface JobdetailsService {
	List<Jobdetails> searchJobdetails(String[] PositionTitle,
			String ReleaseDate,
			Long Education,
			Long jobType,
			String Department,
			Long RecruitmentActivities,
			String Place,
			String[] CompanyName);

}
