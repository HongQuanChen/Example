package com.mybatis.swschrwx.service;

import java.util.Date;

import org.apache.ibatis.annotations.Param;

import com.mybatis.swschrwx.pojo.PersonalInformation;
import com.mybatis.swschrwx.pojo.PersonalInformation2;

public interface PersonalInformationService {
	/*
	 * 插入个人信息
	 */
	void insertPersonalInformation(Long PersonalId,
			byte[] Avatar,
			String ImgType,
			String Name,
			Long Sex,
			String DateOfBirth,
			String IDnumber,
			String PhoneNumber,
			String ToWorkTime,
			String AccountLocation,
			String CurrentCity,
			String EmailAddress,
			Long MaritalStatus,
			String CreateTime);
	/*
	 * 更新个人信息
	 */
	int updatePersonalInformation(Long PersonalId,
			byte[] Avatar,
			String ImgType,
			String Name,
			Long Sex,
			String DateOfBirth,
			String IDnumber,
			String PhoneNumber,
			String ToWorkTime,
			String AccountLocation,
			String CurrentCity,
			String EmailAddress,
			Long MaritalStatus,
			String UpdateTime);
	/*
	 * 更新个人信息,但没有更新图片
	 */
	int updatePersonalInformation1(Long PersonalId,
			String Name,
			Long Sex,
			String DateOfBirth,
			String IDnumber,
			String PhoneNumber,
			String ToWorkTime,
			String AccountLocation,
			String CurrentCity,
			String EmailAddress,
			Long MaritalStatus,
			String UpdateTime);
	/*
	 * 查询是否有该条个人信息
	 */
	int selectPersonalInformation(Long PersonalId,
			String IDnumber);
	/*
	 * 查询该用户的个人信息
	 */
	PersonalInformation2 selectPersonalInformationAll(Long PersonalId,
			String IDnumber);
	/*
	 * 删除该用户的个人信息
	 */
	int deletePersonalInformation(Long PersonalId,
					String IDnumber);
}
