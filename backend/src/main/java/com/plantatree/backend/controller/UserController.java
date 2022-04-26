package com.plantatree.backend.controller;

import com.plantatree.backend.entity.User;
import com.plantatree.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;

@RestController
public class UserController {

  @Autowired
  private UserService userService;

  @PostConstruct
  public void initRolesAndUsers() {
    userService.initRolesAndUsers();
  }

  @PostMapping({"/api/registerNewUser"})
  public User registerNewUser(@RequestBody User user) {
    return userService.registerNewUser(user);
  }

  @GetMapping({"/api/forAdmin"})
  public String forAdmin() {
    return "This URL is for admin only";
  }

  @GetMapping({"/api/forUser"})
  public String forUser() {
    return "This URL is for user only";
  }

}
