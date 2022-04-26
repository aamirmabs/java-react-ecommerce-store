package com.plantatree.backend.service;

import com.plantatree.backend.dao.RoleDao;
import com.plantatree.backend.dao.UserDao;
import com.plantatree.backend.entity.Role;
import com.plantatree.backend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

//  public void initRolesAndUsers() {
//    Role adminRole = new Role();
//    adminRole.setRoleName("Admin");
//    adminRole.setRoleDescription("This is the admin role");
//    roleDao.save(adminRole);
//
//    Role userRole = new Role();
//    userRole.setRoleName("User");
//    userRole.setRoleDescription("Default role for newly craeted users");
//    roleDao.save(userRole);
//
//    User adminUser = new User();
//    adminUser.setUserFirstName("admin");
//    adminUser.setUserLastName("admin");
//    adminUser.setUserName("admin123");
////    adminUser.setUserPassword(getEncodedPassword("admin123"));
//    adminUser.setUserPassword("admin123");
//    Set<Role> adminRoles = new HashSet<>();
//    adminRoles.add(adminRole);
//    adminUser.setRole(adminRoles);
//    userDao.save(adminUser);
//
//
//    User user1 = new User();
//    user1.setUserFirstName("user1");
//    user1.setUserLastName("user1");
//    user1.setUserName("user1");
//    user1.setUserPassword(getEncodedPassword("user123"));
//    Set<Role> userRoles = new HashSet<>();
//    userRoles.add(userRole);
//    user1.setRole(userRoles);
//    userDao.save(user1);
//
//
//    User user2 = new User();
//    user2.setUserFirstName("user2");
//    user2.setUserLastName("user2");
//    user2.setUserName("user2");
//    user2.setUserPassword(getEncodedPassword("user123"));
//    // userRoles = new HashSet<>();
//    userRoles.add(userRole);
//    user2.setRole(userRoles);
//    userDao.save(user2);
//
//    User user3 = new User();
//    user3.setUserFirstName("user3");
//    user3.setUserLastName("user3");
//    user3.setUserName("user3");
//    user3.setUserPassword(getEncodedPassword("user123"));
//    // userRoles = new HashSet<>();
//    userRoles.add(userRole);
//    user3.setRole(userRoles);
//    userDao.save(user3);
//
//  }


@Service
public class UserService {

  @Autowired
  private UserDao userDao;

  @Autowired
  private RoleDao roleDao;

  @Autowired
  private PasswordEncoder passwordEncoder;

  public void initRoleAndUser() {

    Role adminRole = new Role();
    adminRole.setRoleName("Admin");
    adminRole.setRoleDescription("Admin role");
    roleDao.save(adminRole);

    Role userRole = new Role();
    userRole.setRoleName("User");
    userRole.setRoleDescription("Default role for newly created record");
    roleDao.save(userRole);

    User adminUser = new User();
    adminUser.setUserName("admin123");
    adminUser.setUserPassword(getEncodedPassword("admin123"));
    adminUser.setUserFirstName("admin");
    adminUser.setUserLastName("admin");
    Set<Role> adminRoles = new HashSet<>();
    adminRoles.add(adminRole);
    adminUser.setRole(adminRoles);
    userDao.save(adminUser);

//        User user = new User();
//        user.setUserName("raj123");
//        user.setUserPassword(getEncodedPassword("raj@123"));
//        user.setUserFirstName("raj");
//        user.setUserLastName("sharma");
//        Set<Role> userRoles = new HashSet<>();
//        userRoles.add(userRole);
//        user.setRole(userRoles);
//        userDao.save(user);
  }

  public User registerNewUser(User user) {
    Role role = roleDao.findById("User").get();
    Set<Role> userRoles = new HashSet<>();
    userRoles.add(role);
    user.setRole(userRoles);
    user.setUserPassword(getEncodedPassword(user.getUserPassword()));

    return userDao.save(user);
  }

  public String getEncodedPassword(String password) {
    return passwordEncoder.encode(password);
  }
}