package com.swschrwx.app;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Scope;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.web.filter.DelegatingFilterProxy;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;

@Configuration
public class Root {

	
	@Bean
	public MultipartResolver multipartResolver() {
		StandardServletMultipartResolver smr = new StandardServletMultipartResolver();
		return smr;
	}
	
	@Bean
	@Qualifier("myMail")
	public JavaMailSender initMail() {
		JavaMailSenderImpl ms = new JavaMailSenderImpl();
		Properties prop = new Properties();
	    prop.setProperty("mail.smtp.auth", "true");
	    prop.setProperty("mail.smtp.timeout", "30000");
	    
		ms.setHost("smtp.126.com");
		ms.setUsername("chq0330@126.com");
		ms.setPassword("Chq*501807");
		ms.setJavaMailProperties(prop);
		return ms;
	}
			

}
