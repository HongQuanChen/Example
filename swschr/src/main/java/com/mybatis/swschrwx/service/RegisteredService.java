package com.mybatis.swschrwx.service;

import org.apache.ibatis.annotations.Param;

import com.mybatis.swschrwx.pojo.Registered;

public interface RegisteredService {
	/*
	 * 插入注册的信息
	 */
	int Registered(@Param("IDNumber") String IDNumber,
					@Param("Password1") String Password1,
					@Param("Password2") String Password2,
					@Param("PhoneNumber") String PhoneNumber,
					@Param("emailAddress") String emailAddress);
	/*
	 * 查询用户ID是否存在
	 */
	int HasUserId(String IDNumber);
	/*
	 * 查询手机号是否存在
	 */
	int hasPhone(String PhoneNumber);
	/*
	 * 查询邮箱地址是否存在，指定的用户中
	 */
	int hasEmail(String IDNumber,String Email);
	
	/*
	 * 修改密码
	 */
	int updatePassword(String IDNumber,String Password1,String Password2);
	
	/*
	 * 查询注册的信息
	 */
	Registered selectXX(String IDNumber);

}
