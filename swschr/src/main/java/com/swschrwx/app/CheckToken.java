package com.swschrwx.app;

import java.util.ArrayList;
import java.util.Collections;

import org.springframework.stereotype.Component;

@Component("CheckToken")
public class CheckToken {
	private String token = "hellotoken";
	
    public Boolean CheckTokenb(String signature,String timestamp,String nonce) {
        String tokenb = this.token;
	    String timestampb = timestamp;
	    String nonceb = nonce;
	    String signatureb = signature;
	    
	    ArrayList<String> mysort = new ArrayList<String>();
	    mysort.add(timestampb);
	    mysort.add(nonceb);
	    mysort.add(this.token);
	    Collections.sort(mysort);
	    String mysha1 = org.apache.commons.codec.digest.DigestUtils.sha1Hex(mysort.get(0)+mysort.get(1)+mysort.get(2));
	    if(mysha1.equals(signatureb)) {
	    	   return true;
	    }
	    return false;
    }
}
