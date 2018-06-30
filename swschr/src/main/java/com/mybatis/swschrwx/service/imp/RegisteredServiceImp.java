package com.mybatis.swschrwx.service.imp;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mybatis.swschrwx.model.RegisteredM;
import com.mybatis.swschrwx.pojo.Registered;
import com.mybatis.swschrwx.service.RegisteredService;

@Component("RegisteredService")
public class RegisteredServiceImp implements RegisteredService {
	@Autowired
	private RegisteredM reg;
	/*
	 * 插入注册的信息
	 */
	public int Registered(@Param("IDNumber") String IDNumber,
						@Param("Password1") String Password1,
						@Param("Password2") String Password2,
						@Param("PhoneNumber") String PhoneNumber,
						@Param("emailAddress") String emailAddress) {
		return this.reg.InsertUser(IDNumber, Password1, Password2, PhoneNumber, emailAddress);
		
	}
	/*
	 * 查询用户ID是否存在
	 */
	public int HasUserId(String IDNumber) {
		return this.reg.hasUserId(IDNumber);
	};
	/*
	 * 查询手机号是否存在
	 */
	public int hasPhone(String PhoneNumber) {
		return this.reg.hasPhone(PhoneNumber);
	};
	/*
	 * 查询邮箱地址是否存在，指定的用户中
	 */
	public int hasEmail(String IDNumber,String Email) {
		return this.reg.hasEmail(IDNumber, Email);
	};
	/*
	 * 修改密码
	 */
	public int updatePassword(String IDNumber,String Password1,String Password2) {
		return this.reg.updatePassword(IDNumber,Password1,Password2);
	};
	/*
	 * 查询注册的信息
	 */
	public Registered selectXX(String IDNumber) {
		return this.reg.selectXX(IDNumber);
	}

}
