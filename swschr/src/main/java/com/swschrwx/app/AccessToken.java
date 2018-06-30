package com.swschrwx.app;

import java.io.IOException;

import org.apache.commons.httpclient.DefaultHttpMethodRetryHandler;
import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.params.HttpMethodParams;
import org.json.JSONObject;

public class AccessToken {
	private String appid = "wx050894017602002f";
	private String secret = "c5bf14b7b5351ef2af61be7492ba9632";
	private String myaccesstoken = "";
	

    public String getAccessToken() {
    	HttpClient accesstoken = new HttpClient();
    	GetMethod getmethod = new GetMethod("https://api.weixin.qq.com/cgi-bin/token?"
    			+ "grant_type=client_credential&appid="+appid+"&secret="+secret);
    	  //使用系统提供的默认的恢复策略
    	getmethod.getParams().setParameter(HttpMethodParams.RETRY_HANDLER,
    	    new DefaultHttpMethodRetryHandler());
    	
    	try {
    		int statuscode = accesstoken.executeMethod(getmethod);
    		if(statuscode != HttpStatus.SC_OK) {
    			System.err.println("获取accesstoken失败： "+getmethod.getStatusLine());
    		}
    		myaccesstoken = getmethod.getResponseBodyAsString();
    		

    	}
    	catch (HttpException  e) {
			// TODO: handle exception
    		//发生致命的异常，可能是协议不对或者返回的内容有问题
    		System.out.println("发生致命的异常，可能是协议不对或者返回的内容有问题");
		}catch (IOException e) {
			   //发生网络异常
			   e.printStackTrace();
			  } finally {
			   //释放连接
				  getmethod.releaseConnection();
			  }
    	
    	return myaccesstoken;
    }
    
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		AccessToken at = new AccessToken();
		JSONObject json = new JSONObject(at.getAccessToken());
		System.out.println(at.getAccessToken());
		System.out.println(json.get("access_token"));
		System.out.println(json.get("expires_in"));

	}

}
