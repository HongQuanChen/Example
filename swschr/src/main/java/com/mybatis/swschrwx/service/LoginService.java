package com.mybatis.swschrwx.service;

public interface LoginService {
	/*
	 * 查询是否存在相应的用户和密码
	 */
	int selectUser(String IDNumber,String password);
}
