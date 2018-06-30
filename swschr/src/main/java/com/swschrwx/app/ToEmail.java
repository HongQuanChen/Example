package com.swschrwx.app;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;



public class ToEmail {
	@Autowired
	private JavaMailSender md;
	
	public void sendMail(String email,String position,JavaMailSender ms) {
		md = ms; 
		SimpleMailMessage me = new SimpleMailMessage();
		me.setFrom("chq0330@126.com");
		me.setTo(email);
		me.setSubject("职位申请");
		me.setText("感谢你申请"+position);
		md.send(me);
	}
}
