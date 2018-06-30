package com.mybatis.swschrwx.model;

import org.apache.ibatis.annotations.Param;

import com.mybatis.swschrwx.pojo.Registered;

public interface RegisteredM {
	/*
	 * 插入注册的信息
	 */
	int InsertUser(@Param("IDNumber") String IDNumber,
					@Param("Password1") String Password1,
					@Param("Password2") String Password2,
					@Param("PhoneNumber") String PhoneNumber,
					@Param("emailAddress") String emailAddress);
	/*
	 * 查询用户ID是否存在
	 */
	int hasUserId(String IDNumber);
	/*
	 * 查询手机号是否存在
	 */
	int hasPhone(String PhoneNumber);
	/*
	 * 查询邮箱地址是否存在，指定的用户中
	 */
	int hasEmail(@Param("IDNumber") String IDNumber,@Param("Email") String Email);
	/*
	 * 修改密码
	 */
	int updatePassword(@Param("IDNumber") String IDNumber,
			@Param("Password1") String Password1,
			@Param("Password2") String Password2);
	/*
	 * 查询注册的信息
	 */
	Registered selectXX(@Param("IDNumber") String IDNumber);

}
