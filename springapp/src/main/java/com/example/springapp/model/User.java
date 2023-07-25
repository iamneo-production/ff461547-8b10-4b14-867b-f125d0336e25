package com.example.springapp.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long userId;
	private String usersname;
	private String useremail;
	private String userfirsName;
	private String userlastName;
	private String useraddress;
	private String userphone;
	public User() {}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getUsersname() {
		return usersname;
	}
	public void setUsersname(String usersname) {
		this.usersname = usersname;
	}
	public String getUseremail() {
		return useremail;
	}
	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}
	public String getUserfirsName() {
		return userfirsName;
	}
	public void setUserfirsName(String userfirsName) {
		this.userfirsName = userfirsName;
	}
	public String getUserlastName() {
		return userlastName;
	}
	public void setUserlastName(String userlastName) {
		this.userlastName = userlastName;
	}
	public String getUseraddress() {
		return useraddress;
	}
	public void setUseraddress(String useraddress) {
		this.useraddress = useraddress;
	}
	public String getUserphone() {
		return userphone;
	}
	public void setUserphone(String userphone) {
		this.userphone = userphone;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", usersname=" + usersname + ", useremail=" + useremail + ", userfirsName="
				+ userfirsName + ", userlastName=" + userlastName + ", useraddress=" + useraddress + ", userphone="
				+ userphone + "]";
	}
	
	
	
	
	

}
