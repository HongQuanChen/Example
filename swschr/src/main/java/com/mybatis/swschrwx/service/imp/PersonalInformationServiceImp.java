package com.mybatis.swschrwx.service.imp;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.mybatis.swschrwx.model.PersonalInformationM;
import com.mybatis.swschrwx.pojo.PersonalInformation;
import com.mybatis.swschrwx.pojo.PersonalInformation2;
import com.mybatis.swschrwx.service.PersonalInformationService;

@Service("PersonalInformationService")
public class PersonalInformationServiceImp implements PersonalInformationService {
	@Autowired
	private PersonalInformationM pim;
	/*
	 * 插入个人信息
	 */
	public void insertPersonalInformation(Long PersonalId,
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
					String CreateTime) {
		this.pim.insertPersonalInformation(PersonalId, Avatar,ImgType, Name, Sex, DateOfBirth, IDnumber, PhoneNumber, ToWorkTime, AccountLocation, CurrentCity, EmailAddress, MaritalStatus,CreateTime);
	};
	/*
	 * 更新个人信息
	 */
	public int updatePersonalInformation(Long PersonalId,
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
					String UpdateTime) {
		return this.pim.updatePersonalInformation(PersonalId, Avatar,ImgType,Name, Sex, DateOfBirth, IDnumber, PhoneNumber, ToWorkTime, AccountLocation, CurrentCity, EmailAddress, MaritalStatus,UpdateTime);
	}
	/*
	 * 更新个人信息,但没有更新图片
	 */
	public int updatePersonalInformation1(Long PersonalId,
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
					String UpdateTime) {
		return this.pim.updatePersonalInformation1(PersonalId, Name, Sex, DateOfBirth, IDnumber, PhoneNumber, ToWorkTime, AccountLocation, CurrentCity, EmailAddress, MaritalStatus, UpdateTime);
	}
	/*
	 * 查询是否有该条个人信息
	 */
	public int selectPersonalInformation(Long PersonalId,
			       String IDnumber) {
		return this.pim.selectPersonalInformation(PersonalId, IDnumber);
	}
	/*
	 * 查询该用户的个人信息
	 */
	public PersonalInformation2 selectPersonalInformationAll(Long PersonalId,
					String IDnumber) {
		return this.pim.selectPersonalInformationAll(PersonalId, IDnumber);
	}
	/*
	 * 删除该用户的个人信息
	 */
	public int deletePersonalInformation(Long PersonalId,
					String IDnumber) {
		return this.pim.deletePersonalInformation(PersonalId, IDnumber);
	}
}
