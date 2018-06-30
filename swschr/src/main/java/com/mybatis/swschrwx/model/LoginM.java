package com.mybatis.swschrwx.model;

import org.apache.ibatis.annotations.Param;

public interface LoginM {
	/*
	 * 查询是否存在相应的用户和密码
	 */
	int hasUser(@Param("IDNumber")String IDNumber,@Param("password")String password);

}
