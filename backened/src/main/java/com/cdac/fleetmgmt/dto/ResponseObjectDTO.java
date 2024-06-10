package com.cdac.fleetmgmt.dto;

public class ResponseObjectDTO {
	
	public String responseCode;
	public String responseMessage;
	
	public String getResponseCode() {
		return responseCode;
	}
	public void setResponseCode(String responseCode) {
		this.responseCode = responseCode;
	}
	public String getResponseMessage() {
		return responseMessage;
	}
	public void setResponseMessage(String responseMessage) {
		this.responseMessage = responseMessage;
	}
	
	@Override
	public String toString() {
		return "ResponseObjectDTO [responseCode=" + responseCode + ", responseMessage=" + responseMessage + "]";
	}
	
}
