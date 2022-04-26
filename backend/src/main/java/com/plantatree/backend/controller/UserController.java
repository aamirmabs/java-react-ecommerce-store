package com.plantatree.backend.controller;

import com.plantatree.backend.entity.User;
import com.plantatree.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @Autowired
  private UserService userService;

  @PostMapping({"/api/registerNewUser"})
  public User registerNewUser(@RequestBody User user) {
    return userService.registerNewUser(user);
  }
}
