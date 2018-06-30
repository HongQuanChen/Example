package com.mybatis.swschrwx.service.imp;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mybatis.swschrwx.model.LoginM;
import com.mybatis.swschrwx.service.LoginService;

@Component("LoginService")
public class LoginServiceImp implements LoginService {
	@Autowired
	private LoginM loginm;
	
	/*
	 * 查询是否存在相应的用户和密码
	 */
	public int selectUser(String IDNumber,
			String password) {
		return this.loginm.hasUser(IDNumber, password);
	};
}
