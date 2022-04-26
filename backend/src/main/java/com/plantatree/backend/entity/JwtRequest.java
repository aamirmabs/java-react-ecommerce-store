package com.plantatree.backend.entity;

public class JwtRequest {

  private String userName;
  private String userPassowrd;

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public String getUserPassowrd() {
    return userPassowrd;
  }

  public void setUserPassowrd(String userPassowrd) {
    this.userPassowrd = userPassowrd;
  }
}
