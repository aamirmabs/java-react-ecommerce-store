package com.plantatree.backend.service;

import com.plantatree.backend.dao.UserDao;
import com.plantatree.backend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  private UserDao userDao;

  public User registerNewUser(User user) {
    return userDao.save(user);
  }

}
