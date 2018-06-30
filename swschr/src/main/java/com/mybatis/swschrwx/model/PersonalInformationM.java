package com.mybatis.swschrwx.model;

import java.util.Date;

import org.apache.ibatis.annotations.Param;

import com.mybatis.swschrwx.pojo.PersonalInformation;
import com.mybatis.swschrwx.pojo.PersonalInformation2;

public interface PersonalInformationM {
	/*
	 * 插入个人信息
	 */
	void insertPersonalInformation(@Param("PersonalId") Long PersonalId,
			@Param("Avatar") byte[] Avatar,
			@Param("ImgType") String ImgType,
			@Param("Name") String Name,
			@Param("Sex") Long Sex,
			@Param("DateOfBirth") String DateOfBirth,
			@Param("IDnumber") String IDnumber,
			@Param("PhoneNumber") String PhoneNumber,
			@Param("ToWorkTime") String ToWorkTime,
			@Param("AccountLocation") String AccountLocation,
			@Param("CurrentCity") String CurrentCity,
			@Param("EmailAddress") String EmailAddress,
			@Param("MaritalStatus") Long MaritalStatus,
			@Param("CreateTime") String CreateTime);
	/*
	 * 更新个人信息
	 */
	int updatePersonalInformation(@Param("PersonalId") Long PersonalId,
			@Param("Avatar") byte[] Avatar,
			@Param("ImgType") String ImgType,
			@Param("Name") String Name,
			@Param("Sex") Long Sex,
			@Param("DateOfBirth") String DateOfBirth,
			@Param("IDnumber") String IDnumber,
			@Param("PhoneNumber") String PhoneNumber,
			@Param("ToWorkTime") String ToWorkTime,
			@Param("AccountLocation") String AccountLocation,
			@Param("CurrentCity") String CurrentCity,
			@Param("EmailAddress") String EmailAddress,
			@Param("MaritalStatus") Long MaritalStatus,
			@Param("UpdateTime") String UpdateTime);
	/*
	 * 更新个人信息,但没有更新图片
	 */
	int updatePersonalInformation1(@Param("PersonalId") Long PersonalId,
			@Param("Name") String Name,
			@Param("Sex") Long Sex,
			@Param("DateOfBirth") String DateOfBirth,
			@Param("IDnumber") String IDnumber,
			@Param("PhoneNumber") String PhoneNumber,
			@Param("ToWorkTime") String ToWorkTime,
			@Param("AccountLocation") String AccountLocation,
			@Param("CurrentCity") String CurrentCity,
			@Param("EmailAddress") String EmailAddress,
			@Param("MaritalStatus") Long MaritalStatus,
			@Param("UpdateTime") String UpdateTime);
	/*
	 * 查询是否有该条个人信息
	 */
	int selectPersonalInformation(@Param("PersonalId") Long PersonalId,
			@Param("IDnumber") String IDnumber);
	
	/*
	 * 查询该用户的个人信息
	 */
	PersonalInformation2 selectPersonalInformationAll(@Param("PersonalId") Long PersonalId,
			@Param("IDnumber") String IDnumber);
	/*
	 * 删除该用户的个人信息
	 */
	int deletePersonalInformation(@Param("PersonalId") Long PersonalId,
			@Param("IDnumber") String IDnumber);

}
